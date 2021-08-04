const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productoSchema = new Schema({
    Nombre : String,
    Precio : Number
})

const Producto =mongoose.model('Producto', productoSchema)

module.exports = Producto

// class Producto {
//     constructor(){
//         this.id=0
//         this.Nombre=''
//         this.Precio =0
//     }

    
//     id = Number
//     Nombre = String
//     Precio = Number
// }

