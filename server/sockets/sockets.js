//ARCHIVO CON LAS CONFIGURACION DEL SERVIDOR

const { io } = require("../server");

io.on("connection", (client) => {
  //con esto sabremos quien esta conectado

  console.log("Usuario conectado");

  //enviamos un msj desde el servidor
  client.emit("enviarMensaje", {
    usuario: "Admin",
    mensaje: "Bienvenido a la Aplicación",
  });

  client.on("disconnect", () => {
    console.log("Usuario desconectado");
  });

  //vamos a esuchar los que manda el cliente por el emit
  //data: es lo que recibimos del cliente

  client.on("enviarMensaje", (data, callback) => {
    //recivimos el emit con la variable mensaje

    //para confirmarle al cliente que la informacion llego bien
    // if (mensaje.usuario) {
    // callback({
    //    resp: "Todo salio Bien",
    //  });
    //  } else {
    //    callback({
    //    resp: "Todo salio mal !!",
    //    });
    //  }

    //para mandar el mensaje que mando el cliente a todos los demas (broadcast)
    client.broadcast.emit("enviarMensaje", data);

    console.log(data);
  });
});
