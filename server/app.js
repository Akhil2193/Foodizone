const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// const uri = 'mongodb+srv://akhil:fooddelievery@cluster0.9z6rv.mongodb.net/restaurants?retryWrites=true&w=majority';
const uri = 'mongodb://akhil:fooddelievery@cluster0-shard-00-00.9z6rv.mongodb.net:27017,cluster0-shard-00-01.9z6rv.mongodb.net:27017,cluster0-shard-00-02.9z6rv.mongodb.net:27017/restaurants?ssl=true&replicaSet=atlas-4rhtc8-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
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
app.get('/api', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
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
        res.header("Access-Control-Allow-Origin", "*");
        Restaurant.findOne({ _id: req.params.id }, function (err, restaurant) {
            if (restaurant) {
                res.send(restaurant)
            }
            else {
                res.send('No restaurants found by that name')
            }
        })
    })
//admin portal
app.route('/admin')
    .get(function (req, res) {
        res.sendFile(__dirname + '/admin/index.html')
    });



app.listen(port, function () {
    console.log(`Server is running at port ${port}...`);
})