const express = require('express');
require('dotenv').config();
//console.log(process.env);//muestra las variables de entornos
//crear servidor express
const app=express();
const cors=require('cors');
app.use(cors());
//para mostrar la pagina index.html
app.use(express.static('public'));

// Rutas
// app.get('/',(req,res) =>{
//   console.log('Se solicitó el /');
//   res.json({
//       ok: true
//   })
// });

app.use(express.json());//Lectura del body
app.use('/api/movimiento', require('./routes/movimiento'))
app.use('/api/consulta', require('./routes/consultas'))
//escuchar peticiones
app.listen(process.env.PORT, () =>{
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});