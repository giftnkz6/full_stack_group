const express = require('express');
// path
const path = require('path');
// body-parser
const bodyParser = require('body-parser');
// Router
const route = express.Router();
// Models
const {User, Product} = require('../model');
// Create a user instance
const user = new User();
// Product instance
const product = new Product();

route.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
})
// =========USER's Router========
// Login
route.post('/login', bodyParser.json(), (req, res)=>{
    user.login(req, res);
})
// Retrieve all users
route.get('/users', (req, res)=>{
    user.getUsers(req, res);
});

route.get('/user/:id', (req, res)=>{
    user.getUser(req, res);
});
// Update
route.put('/user/:id',bodyParser.json(), (req, res)=>{
    user.editUser(req, res);
});
// Register
route.post('/register', bodyParser.json(), (req, res)=> {
    user.newUser(req, res);
})
// Delete
route.delete('/user/:id', (req, res)=>{
    user.removeUser(req, res);
});

// Fetch all products
route.get('/products', (req, res)=> {
    product.getProducts(req, res);
})
// Fetch a single product
route.get('/product/:id', 
(req, res)=> {
    product.getProduct(req, res);
})
// Add a new product
route.post('/product', bodyParser.json(), (req, res)=> {
    product.newProduct(req, res);
})
// Update a product
route.put('/product/:id', bodyParser.json(),(req, res)=> {
    product.editProduct(req, res);
})
// Delete a product
route.delete('/product/:id', (req, res)=> {
    product.removeProduct(req, res);
})

module.exports = route;