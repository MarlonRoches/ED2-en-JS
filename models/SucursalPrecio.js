const express = require('express')
const router = express.Router()
const fs = require('')


router.get('/', (req, res) => {
 res.send(GetDataFile())
})

class SucursalProducto {
    constructor(){
        this.idSucursal=0
        this.idProducto=0
        this.Stock =0
    }

    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
      }
     
    // GetDataFile()
    // {
    //     const fs = require('fs')

    //     fs.readFile('data.jsom', 'utf8' , (err, data) => {
    //         if (err) {
    //           console.error(err)
    //           return
    //         }
    //         return data
    //       })
    // }

    
}
function Leer()
{

   return 'xd'
}



function GetDataFile()
    {
        const fs = require('fs')

        fs.readFile('data.jsom', 'utf8' , (err, data) => {
            if (err) {
              console.error(err)
              return
            }
            return data
          })
    } 
module.exports = router
