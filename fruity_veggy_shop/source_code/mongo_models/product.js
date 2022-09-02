const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        lowercase: true,
        list: ["fruit", "vegetable"],
    },
    freshness: {
        type: String,
        lowercase: true,
        list: ["most fresh", "modern", "rotted"],
    },
    notes: {
        type: String,
        lowercase: false,
        required: false,
    },
});

//compile the model
const Product = mongoose.model("Product", productSchema);

//exporting model so it's available in index.js
module.exports = Product;
