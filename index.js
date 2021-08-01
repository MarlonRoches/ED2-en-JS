const express = require('express')
const app =express()

const port = 3000

app.get('/',(req,res)=>{
    res.send('to piola')
})

app.use('/manejo',require('./routes/Manejo'))
app.use('/productos',require('./routes/Productos'))
app.use('/sucursales',require('./routes/Sucursales'))

app.listen(port, () => console.log('ED2  escuchando en el puerto 3000'))