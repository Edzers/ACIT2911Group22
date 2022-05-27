const PORT = process.env.PORT || 5000;
var express = require("express");
var app = express();
var http = require("http");
const path = require('path');
const { async } = require("regenerator-runtime");
app.use(express.static(__dirname));

server.listen(process.env.PORT || 5000)

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'homepage.html'));
  });

  app.get('/to-do-list', async (req, res)=>  {
    res.sendFile(path.join(__dirname, 'To-Do.html'));
  });


var server = http.createServer(app);

module.exports = server;