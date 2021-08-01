const express = require('express');
// const { model } = require('mongoose');
const router = express.Router()

// • Transferir unidades de una sucursal a otra 
// • Agregar un producto a una sucursal 
// • Actualizar cantidad en inventario en la sucursal 
router.get('/',(req,res)=>{
    res.send('MANEJO')
})
module.exports = router
