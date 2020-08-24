//ARCHICO CON LAS CONFIGURACIONES DEL CLIENTE

//vamos a definir las funciones que queremos que se disparen cuando queramos
//enviar informacion al servidor

var socket = io(); // es el objeto para la comunicacion

//LOS ON SON PARA ESCUCHAR SUCESOS
//n os conecytaremso al servidor y estaremos pendiente de cualquier cambio e el backend
socket.on("connect", function () {
  console.log("Conectado al servidor");
});

//LOS ON SON PARA ESCUCHAR SUCESOS
socket.on("disconnect", function () {
  //para saber si se deconectaron del servidor
  console.log("Perdimos conexion con el servidor");
});

//LOS EMIT SON PARA ENVIAR INFORMACION, en els egundo parametro ponemos el msj

socket.emit(
  "enviarMensaje",
  {
    usuario: "Rodrigo",
    mensaje: "Hola Mundo",
  },
  function (resp) {
    //resp: ES LA RESPUESTA DEL SERVIDOR
    //si yo quisiera una confirmacion de que la informacion llego bien desde el servidor
    console.log("Respuesta server:", resp);
  }
);

//VAMOS A ESUCHAR INFORMACION DEL SERVIDOR

socket.on("enviarMensaje", function (mensaje) {
  console.log("Servidor:", mensaje);
});
