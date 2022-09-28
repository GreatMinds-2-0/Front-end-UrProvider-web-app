let express = require('express');
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("server/db.json");
const middlewares = jsonServer.defaults({ static: "./build" });
const port = process.env.PORT || 3000;
const app = express();



app.use(express.static(__dirname+'/dist/urprovider-webapp'));

app.get('/*',(req,resp)=> {
  resp.sendFile(__dirname + '/dist/urprovider-webapp/index.html');
});

app.listen(process.env.PORT || 8080);
server.use(middlewares);
server.use(router);
server.listen(port);
