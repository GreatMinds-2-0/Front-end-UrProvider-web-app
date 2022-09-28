const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/Front-end-UrProvider-web-app'));
app.get('/*',(req,res)=>
  res.sendFile('index.html',{root:'dist/Front-end-UrProvider-web-app'}),
);

app.listen(process.env.PORT || 8080);
