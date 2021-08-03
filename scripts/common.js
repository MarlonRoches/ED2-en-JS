const fs = require('fs');

//funcion que quiero usar en otros archivos
function EscribirArchivo(stringData, route)
{
    fs.writeFile(route, stringData, err => {
        if (err) {
            console.log(err)
        } else {
            console.log("ARCHIVO ACTUALIZADO")
        }
        })
}

//exportamos pa usarlo en otro lao
module.exports = {EscribirArchivo}