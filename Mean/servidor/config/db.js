const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
    //useFindAndModify: false,
    //autoIndex: false, // Don't build indexes
    //poolSize: 10, // Maintain up to 10 socket connections
    //serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    //socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    //family: 4 // Use IPv4, skip trying IPv6
  };


const conectarDB = async () =>{
    try {
        await mongoose.connect(process.env.DB_MONGO, 
            options
        )
        console.log("BD Conectada");


    } catch (error) {
        console.log(error);
        process.exit(1); //Detemos la app
    }
}

module.exports=conectarDB;