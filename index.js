const express = require('express')
const app =express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose');



const user = "admin_ED2"
const password = "ytmlDR0qqKiHhGVE"
const dbName = "proyectoED2"

const uri = `mongodb+srv://${user}:${password}@cluster0.c0tze.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri, 
    { 
        //no mostrar mensajes en la consola
        useNewUrlParser: true, useUnifiedTopology: true })
        // exito
  .then(()=> console.log('conectado a mongodb'))
  //error 
  .catch(e => console.log('error de conexión', e))

app.get('/',(req,res)=>{
    res.send('to piola')
})

app.use('/manejo',require('./routes/Manejo'))
app.use('/productos',require('./routes/Productos'))
app.use('/sucursales',require('./routes/Sucursales'))

app.listen(port, () => console.log('ED2  escuchando en el puerto 3000'))