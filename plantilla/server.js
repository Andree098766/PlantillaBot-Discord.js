const express = require('express');
const server = express();

server.all('/', (req, res) =>{
  res.send('Aqui estamos')
});

function keepalive(){
  server.listen(3000, () =>{console.log("Servidor listo!" + Date.now())});
}

module.exports = keepalive; 
