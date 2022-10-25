require('dotenv').config();
const Server = require("./clases/server");

const server = new Server();
server.listen();
