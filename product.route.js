var express = require('express')

// Use the express.Router class to create modular, mountable route handlers. 
// A Router instance is a complete middleware and routing system; for this reason, 
// it is often referred to as a “mini-app”.
var productRoutes = express.Router()

// define the home page route
productRoutes.get('/products', function (req, res) {
  res.send('All Products')
})
// define the about route
productRoutes.get('/products/:id', function (req, res) {
  res.send('Product By Id')
})

module.exports = productRoutes
