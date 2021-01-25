// aqui colocare toda la configuracion para conectarme a mi db
const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('db online')
        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar base de  datos');
    }

}

module.exports = {
    dbConnection
}





