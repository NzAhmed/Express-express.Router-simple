// Creates an Express application: 
// The express() function is a top-level function exported by the express module.
const express = require('express')
const app = express()

var productRoutes = require('./product.route')
app.use('/api', productRoutes)

app.listen(3000, () => console.log('listening on port 3000!'))


// http://localhost:3000/api/products
// http://localhost:3000/api/products/14