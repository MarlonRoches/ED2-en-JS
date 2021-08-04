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

function LeerArcihvo(ruta)
{
      return fs.readFileSync(ruta,'utf8')
}
//exportamos pa usarlo en otro lao
module.exports = {EscribirArchivo,LeerArcihvo}