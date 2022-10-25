const express = require('express')
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.puerto = process.env.PORT;
        this.usuariosRoutePath = '/api/usuarios';
        //Middlewares
        this.middlewares();
        //Rutas de la aplicación
        this.routes();
    }

    routes() {
        this.app.use(this.usuariosRoutePath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.puerto);
    }

    middlewares() {
        //Directorio pulbico
        this.app.use(express.static('public'));
        //Cors
        this.app.use(cors());
        //Lectura y parseo del body
        this.app.use(express.json());
    }

}

module.exports = Server;