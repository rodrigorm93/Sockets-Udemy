const express = require("express");
const socketIO = require("socket.io");
const http = require("http"); //nos permitira levantar un servidor y trabajar con los sockets

const path = require("path");

const app = express();

let server = http.createServer(app); // creamos el servidor, con  express

const publicPath = path.resolve(__dirname, "../public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//inicializaremos el sockets io
//IO: esta es la comunicacion del backend
module.exports.io = socketIO(server);

require("./sockets/sockets");

server.listen(port, (err) => {
  if (err) throw new Error(err);

  console.log(`Servidor corriendo en puerto ${port}`);
});
