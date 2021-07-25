const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const uri = 'mongodb+srv://akhil:fooddelievery@cluster0.9z6rv.mongodb.net/restaurants?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
const restaurantSchema = new mongoose.Schema({
    name: String,
    type: String,
    foodItems: [
        {
            name: String,
            price: Number,
            veg: Boolean
        }
    ]
})
const Restaurant = mongoose.model('Restaurant', restaurantSchema);
//-----to create a restaurant-----
// const kfc = new Restaurant({
//     name: 'KFC',
//     type: 'Fast-food',
//     foodItems:[
//         {
//             name:'Veg-Burger',
//             price: 100,
//             veg: true
//         },
//         {
//             name:'Chicken Burger',
//             price:200,
//             veg:false
//         }
//     ]
// })
// kfc.save(function(err,kfc){
//     if(err){
//         console.log(err);
//     }
// })
app.get('/api', function (req, res) {
    // res.send("Hello")
    Restaurant.find(function (err, restaurants) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(restaurants);
        }
    })
})
app.route('/api/:restaurantName')
.get(function(req,res){
    Restaurant.findOne({name: req.params.restaurantName},function(err,restaurant){
        if(restaurant){
            res.send(restaurant)
        }
        else{
            res.send('No restaurants found by that name')
        }
    })
})
app.listen(port, function () {
    console.log(`Server is running at port ${port}...`);
})