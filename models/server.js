const express = require('express');
const cors = require('cors');

class Sever{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';


        //middlewares
        this.middlewares();

        //Rutas de mi aplicaión
        this.routes();
    }

    middlewares(){

        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/Usuarios'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('servidor corriend en el puerto: ', this.port)
        })
    }
}

module.exports = Sever;
 