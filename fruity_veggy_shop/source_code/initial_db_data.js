//stand-alone file to populate the database with some initial data
const mongoose = require("mongoose");
const Product = require("./mongo_models/product");

mongoose
    .connect("mongodb://localhost:27017/Shop", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!");
    })
    .catch((err) => {
        console.log("MONGO CONNECTION ERROR!!!");
        console.log(err);
    });

const initialProducts = [
    {
        name: "Fresh Tomato",
        price: 1.0,
        category: "vegetable",
        freshness: "most fresh",
        notes: "tastes disgusting",
    },
    {
        name: "Cucumber",
        price: 0.9,
        category: "vegetable",
        freshness: "modern",
        notes: "I hate that thing, it's almost always bitter",
    },
    {
        name: "Pamela",
        price: 1.8,
        category: "fruit",
        freshness: "most fresh",
        notes: "tastes disgusting, do not take it",
    },
    {
        name: "Banana",
        price: 0.5,
        category: "fruit",
        freshness: "rotted",
    },
    {
        name: "Lemon",
        price: 0.2,
        category: "fruit",
        freshness: "rotted",
        notes: "tastes disgusting, do not take it",
    },
];

//--------------------------------------------------------------
//for testing
//--------------------------------------------------------------
/*
nodemon initial_db_data.js
in mondo db:
show dbs
use Shop
show collections
db.products.find()
*/
// const p = new Product({
//     name: "Orange",
//     price: 2.5,
//     category: "fruit",
// });

// p.save()
//     .then((p) => {
//         console.log(p);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

//by default insertMany makes validation on all the values that are passing in
Product.insertMany(initialProducts)
    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
        console.log(e);
    });
