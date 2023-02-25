const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>')
})
app.get('/products', (req, res) => {
    res.send('<h1>Welcome to products page</h1>')
})
const server = app.listen(3002, () => {
    console.log("Listening at port 3002");
})