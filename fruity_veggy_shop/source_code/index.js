const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");

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

app.use(express.static(__dirname + "/views"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true })); //for app.post. To tell Express to use that middleware
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false })); //to save a text from textarea in new.ejs

// app.get("/dog", (req, res) => {
//     res.send("Woff");
// });

// app.listen(3000, () => {
//     console.log("port 3000");
// });

app.get("/products", async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category }); //same as category: category
        res.render("products/index", { products, category }); //the second argument is what we are passing to render
    } else {
        const products = await Product.find({});
        res.render("products/index", { products, category: "All" });
    }
});

const categories = ["fruit", "vegetable"];
const freshness = ["most fresh", "modern", "rotted"];
const notes = "";
app.get("/products/new", (req, res) => {
    res.render("products/new", { categories, freshness, notes });
});

//to save the product in db
app.post("/products", async (req, res) => {
    const newProduct = new Product(req.body);
    console.log(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`); //without redirection refreshing this page will create the product again
});

app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/show", { product });
});

app.get("/products/:id/edit", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/edit", { product, categories, freshness, notes });
});

app.put("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
        runValidators: true,
        new: true,
    });
    res.redirect(`/products/${product._id}`);
});

app.delete("/products/:id", async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect("/products");
});

app.listen(3005, () => {
    console.log("APP IS LISTENING ON PORT 3005!");
});
