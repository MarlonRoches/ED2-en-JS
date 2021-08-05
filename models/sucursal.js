const mongoose = require('mongoose');
const Schema = mongoose.Schema

const sucursalSchema = new Schema({
    Nombre : String,
    Direccion : String
})

const Sucursal =mongoose.model('sucursales', sucursalSchema)

module.exports = Sucursal


// class Sucursal {
//     constructor(){
//         this.id=0
//         this.Nombre=''
//         this.Direccion =''
//     }
//     id = Number
//     Nombre = String
//     Direccion = String
// }
