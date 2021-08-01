const { json } = require('express');
const express = require('express');
const { stringify } = require('querystring');
const fs = require('fs')
// const myFile = new File('./data/productos.json')
// const { model } = require('mongoose');
const router = express.Router()

class Producto {
    constructor(){
        this.id=0
        this.Nombre=''
        this.Precio =''
    }
    id = Number
    Nombre = String
    Precio = Number
}


router.use(express.json())
// • Agregar un producto 
// • Agregar múltiples productos (vía un archivo .csv) 
// • Actualizar los datos de un producto 

router.get('/',(req,res)=>{
    const [flag, data] = LeerArcihvo()
    if(readed.result === false)
    {
        res.status(502).send(readed.cont)
        
    }else{
        res.status(202).send(readed.cont)
        
    }
})

router.post('/',(req,res)=>{

    const content = JSON.stringify(req.body)

    

    
})

const LeerArcihvo =() =>
{
    fs.readFile('./data/productos.json', 'utf8' , (err, data) => {
        if (err) {
            return [false, err]
        }else{
            return [true, JSON.parse(data)]
        }
      })
}
const ValidarArchivo=()=>
{
    if(fs.existsSync('./data/productos.json')){
        // console.log('existo')
        return true
    }else{
        EscribirArchivo([])
    }
}

const EscribirArchivo=(data)=>
{
    fs.writeFile('./data/productos.json', data, err => {
        if (err) {
            res.status(502).send(err)
        } else {
            res.status(202).send("OK")
        }
        })
}
module.exports = router
