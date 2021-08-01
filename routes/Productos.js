const { json } = require('express');
const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const { TIMEOUT } = require('dns');

// const myFile = new File('./data/productos.json')
// const { model } = require('mongoose');
const router = express.Router()

class Producto {
    constructor(){
        this.id=0
        this.Nombre=''
        this.Precio =0
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
    console.log(ValidarArchivo())

   const lista = JSON.parse(LeerArcihvo())
    res.status(202).send(lista)
})


router.post('/single',(req,res)=>{

    const content = req.body
    const lista = JSON.parse(LeerArcihvo())
    lista.push(content)
    EscribirArchivo(JSON.stringify(lista))
    res.status(202).send('ok')

})
router.post('/csv',(req,res)=>{

    const content = req.body
    const lista = JSON.parse(LeerArcihvo())
    const temp =[]
    fs.createReadStream(content.route)
    .pipe(csv())
    .on('data', (row) => {
    //   console.log(row)
      temp.push(row)

    })
    .on('end', () => {
      console.log('CSV file successfully processed');
    });
    console.log(temp)
    EscribirArchivo(JSON.stringify(lista))
    res.status(202).send('ok')
    // const lista = JSON.parse(LeerArcihvo())
    // lista.push(content)
    // EscribirArchivo(JSON.stringify(lista))
    // res.status(202).send('ok')

})

function  LeerArcihvo() 
{
   
      return fs.readFileSync('./data/productos.json','utf8')
}

const ValidarArchivo=()=>
{
    if(fs.existsSync('./data/productos.json')){
        // console.log('existo')
        return true
    }else{
        fs.writeFile('./data/productos.json', JSON.stringify([]), err => {
            if (err) {
                console.log(err)
            } else {
                console.log("ARCHIVO VALIDADO")
            }
            })
        return false
    }
}

const EscribirArchivo=(stringData)=>
{
    fs.writeFile('./data/productos.json', stringData, err => {
        if (err) {
            console.log(err)
        } else {
            console.log("ARCHIVO ACTUALIZADO")
        }
        })
}
module.exports = router
