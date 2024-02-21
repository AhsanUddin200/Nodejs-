const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name: String,
    "Father Name" : String,
    Id : String,
    Status : String
})

module.exports = mongoose.model('products',productSchema);