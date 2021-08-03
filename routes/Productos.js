const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const common = require('../scripts/common');

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

    GuardarElemento(req.body)
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
        const OBJ =  new Producto()
        OBJ.Nombre = row.nombre
        OBJ.Precio = Number.parseInt(row.precio)
        OBJ.id = lista.length
        lista.push(OBJ)
        console.log('------------')
        console.log(lista)
    })
    .on('end', () => {

        console.log('-> Finalle')
        // console.log('CSV file successfully processed');
        EscribirArchivo(JSON.stringify(lista))
        console.log('Archivo Actualizado')
    });
    res.status(202).send('to piola')
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

const GuardarElemento = (Node) =>
{
    const lista = JSON.parse(LeerArcihvo())
    Node.id = lista.length
    lista.push(Node)
    EscribirArchivo(JSON.stringify(lista))

}
const EscribirArchivo=(stringData)=>
{
    common.EscribirArchivo(stringData,'./data/productos.json')
    
    // fs.writeFile('./data/productos.json', stringData, err => {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         console.log("ARCHIVO ACTUALIZADO")
    //     }
    //     })
}
module.exports = router
