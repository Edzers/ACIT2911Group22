var host = 'localhost';
var port = 3000;
var host = '0.0.0.0';
var port = process.env.PORT || 3000;
var express = require("express");
var app = express();
var http = require("http");
const path = require('path');
const { async } = require("regenerator-runtime");
app.use(express.static(__dirname));

app.listen(port, host, function() {
  console.log("Server started.......");
});

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'homepage.html'));
  });

  app.get('/to-do-list', async (req, res)=>  {
    res.sendFile(path.join(__dirname, 'To-Do.html'));
  });


var server = http.createServer(app);

module.exports = server;