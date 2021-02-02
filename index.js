//npm i express
const express = require('express'); 
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');


//crear el servidor de express
const app = express();

//Base de datos
dbConnection();

//Cors
app.use(cors());

//Directorio publico
app.use( express.static('public'));

//Lectura y parseo del body usamos potsman
app.use( express.json() );


//Rutas
app.use('/api/auth', require('./routes/auth') ); //todo lo que ./routes/auth lo va a habilitar en esta ruta /api/auth
//TODO: auth //crear, login, renew
//TODO: CRUD: eventos
app.use('/api/events', require('./routes/events'));



//escuchar peticiones 
app.listen(process.env.PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`)
});







