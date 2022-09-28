const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/urprovider-webapp"'));
app.get('/*',(req,res)=>
  res.sendFile('index.html',{root:'dist/urprovider-webapp"'}),
);

app.listen(process.env.PORT || 8080);
