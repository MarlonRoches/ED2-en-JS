const express = require('express');
const SucursalBD = require('../models/sucursal');
const router = express.Router()
// • Agregar sucursal 
// • Actualizar los datos de una sucursal 
router.get('/',  async (req,res)=>{
    
    try {
        var sucurBD = await SucursalBD.find()
        // console.log(sucurBD)
        res.status(200).send(sucurBD)        
    } catch (error) {
        console.log(error)
        res.status(502).send('ERROR')        
    }
    
    // res.send('SUCURSALES')
})
module.exports = router
