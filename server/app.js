const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 5000;
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose')
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri = 'mongodb://akhil:fooddelievery@cluster0-shard-00-00.9z6rv.mongodb.net:27017,cluster0-shard-00-01.9z6rv.mongodb.net:27017,cluster0-shard-00-02.9z6rv.mongodb.net:27017/restaurants?ssl=true&replicaSet=atlas-4rhtc8-shard-0&authSource=admin&retryWrites=true&w=majority'

app.use(session({
    secret:"our little secret.",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);
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
    email:String,
    password:String,
    name:String,
    contact:String
})
userSchema.plugin(passportLocalMongoose);
const Restaurant = mongoose.model('Restaurant', restaurantSchema);
//-----to create a restaurant-----
// for (var i = 0; i < 16; i++) {


//     const res = new Restaurant({
//         name: `Restaurant ${i+1}`,
//         type: 'Fast-food',
//         time: '8am - 10pm',
//         foodItems: []
//     })

//     for (let index = 0; index < 20; index++) {
//         var lel = Math.floor(Math.random() * 2);
//         res.foodItems.push({
//             name: `dish ${index+1}`,
//             price: `${Math.floor(Math.random() * 500) + 20}`,
//             veg:`${lel===0?false:true}`,
//             category:`Category ${(index%4)+1}`

//         })
//     }
//     res.save(function (err, presentRes) {
//         if (err) {
//             console.log(err);
//         }
//     })
// }
const User = new mongoose.model('User',userSchema);
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// passport.serializeUser((user,done)=>{
//     done(null,user);
// })
// passport.deserializeUser((user,done)=>{
//     done(null,user);
// })

app.use(
    cors({
        origin:'http://localhost:3000',
        methods:'GET,HEAD,PUT,POST,PATCH,DELETE',
        credentials:true
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
.get(function(req,res){

    
    const query= {
        $or: [
            {name:{$regex: req.params.search} },
            {type:{$regex: req.params.search} },
            {foodItems:{ $elemMatch: {name :{$regex: req.params.search}}}},
            {foodItems:{ $elemMatch: {category :{$regex: req.params.search}}}}
            
        ]
    };
    
    Restaurant.find(query,function (err, restaurants) {
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
        res.sendFile(__dirname + '/admin/index.html')
    });

app.post('/register',function(req,res){
    User.register({
        username:req.body.username,
        name:req.body.name,
        contact:req.body.contact
    },req.body.password,function(err,user){
        if(err){
            console.log(err);
            res.redirect('http://localhost:3000/authenticate/register')
        } else {
            passport.authenticate('local')(req,res,function(){
                res.redirect('http://localhost:3000')
                
            })
        }
    })
})
app.post('/login',function(req,res){
    const user = new User({
        username:req.body.username,
        password: req.body.password
    })
    console.log(req.body)
    req.login(user,function(err){
        if(err){
            console.log(err);
        } else (
            passport.authenticate('local')(req,res,function(){
                var data = {
                    authentication: true
                }
                res.json(data)

            })
        )
    })
})
app.get('/logout', function(req, res){
    req.logout();
    var data = {
        authentication: true
    }
    res.json(data)
  });
app.get('/authenticate',function(req,res){

    if(req.isAuthenticated()){
        var data = {
            authentication: true
        }
        res.json(data)
    }
    else{
        var data = {
            authentication: false
        }
        res.json(data)
    }
})
app.listen(port, function () {
    console.log(`Server is running at port ${port}...`);
})