const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productoSchema = new Schema({
    Nombre : String,
    Precio : Number
})

const Producto =mongoose.model('productos', productoSchema)

module.exports = Producto

