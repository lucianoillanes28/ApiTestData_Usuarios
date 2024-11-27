const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("almacen.json"); // Asegúrate de que este archivo exista en la raíz
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 10000;

server.use(middlewares);
server.use(router);
server.listen(port);
