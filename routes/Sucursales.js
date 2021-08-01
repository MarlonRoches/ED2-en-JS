const express = require('express');
// const { model } = require('mongoose');
const router = express.Router()
// • Agregar sucursal 
// • Actualizar los datos de una sucursal 
router.get('/',(req,res)=>{
    res.send('SUCURSALES')
})
module.exports = router
