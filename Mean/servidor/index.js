const express = require('express')
const conectarDB = require('./config/db');
const cors = require('cors');

//Creamos el servidor
const app = express();

//Conectamos a la BD
 conectarDB();
 app.use(cors());

app.use(express.json());

app.use('/api/productos',require('./routes/producto'));

//DB_MONGO=mongodb://tomas:admin123@cluster0-shard-00-00.pvfn6.mongodb.net:27017/meanproductos


app.listen(4001, ()=>{
    console.log("servidor levantado");
})

