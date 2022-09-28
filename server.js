let express = require('express');

const app = express();



app.use(express.static(__dirname+'/dist/urprovider-webapp'));

app.get('/*',(req,resp)=> {
  resp.sendFile(__dirname + '/dist/urprovider-webapp/index.html');
});

app.listen(process.env.PORT || 8080);

