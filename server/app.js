require('dotenv').config({ path: './.env' })
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'))
const uri = process.env.DB_URI;

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
const restaurantSchema = new mongoose.Schema({
    name: String,
    type: String,
    openTime: Number,
    closeTime: Number,
    foodItems: [
        {
            name: String,
            price: Number,
            category: String,
            veg: Boolean
        }
    ]
})
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    contact: String
})
userSchema.plugin(passportLocalMongoose);
const Restaurant = mongoose.model('Restaurant', restaurantSchema);
const User = new mongoose.model('User', userSchema);
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: 'GET,HEAD,PUT,POST,PATCH,DELETE',
        credentials: true
    })
)

app.get('/api', function (req, res) {

    Restaurant.find(function (err, restaurants) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(restaurants);
        }
    })
})
app.route('/api/:id')
    .get(function (req, res) {

        Restaurant.findOne({ _id: req.params.id }, function (err, restaurant) {
            if (restaurant) {
                res.send(restaurant)
            }
            else {
                res.send('No restaurants found by that name')
            }
        })
    });
app.route('/api/search/:search')
    .get(function (req, res) {


        const query = {
            $or: [
                { name: { $regex: req.params.search } },
                { type: { $regex: req.params.search } },
                { foodItems: { $elemMatch: { name: { $regex: req.params.search } } } },
                { foodItems: { $elemMatch: { category: { $regex: req.params.search } } } }

            ]
        };

        Restaurant.find(query, function (err, restaurants) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(restaurants);
            }
        })
    })
//admin portal
app.route('/admin')
    .get(function (req, res) {
        res.render('index')
    });

app.post('/register', function (req, res) {
    User.register({
        username: req.body.username,
        name: req.body.name,
        contact: req.body.contact
    }, req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            res.redirect('http://localhost:3000/authenticate/register')
        } else {
            passport.authenticate('local')(req, res, function () {
                res.redirect('http://localhost:3000')

            })
        }
    })
})
app.post('/login', function (req, res) {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })
    req.login(user, function (err) {
        if (err) {
            console.log(err);
        } else (
            passport.authenticate('local')(req, res, function () {
                var data = {
                    authentication: true
                }
                res.json(data)

            })
        )
    })
})
app.get('/logout', function (req, res) {
    req.logout();
    var data = {
        authentication: true
    }
    res.json(data)
});
app.get('/authenticate', function (req, res) {

    if (req.isAuthenticated()) {
        var data = {
            authentication: true
        }
        res.json(data)
    }
    else {
        var data = {
            authentication: false
        }
        res.json(data)
    }
})
app.listen(port, function () {
    console.log(`Server is running at port ${port}...`);
})