//npm i express
const express = require('express'); 
require('dotenv').config();


//crear el servidor de express
const app = express();

//Directorio publico
app.use( express.static('public'));


//Rutas
app.use('/api/auth', require('./routes/auth') ); //todo lo que ./routes/auth lo va a habilitar en esta ruta /api/auth
//TODO: auth //crear, login, renew
//TODO: CRUD: eventos



//escuchar peticiones 
app.listen(process.env.PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`)
});







