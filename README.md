Esta es una pequeña plantilla basica para un bot, en replit


Como no puse comentarios pondre una explicacion aqui...


El archivo plantilla de "comandos" sirve para, valga la redundancia, colocar un comando con su nombre y alias. Puedes poner más archivos en esa carpeta con el formato '.js', la plantilla sirve para copiar y pegar en otros archivos para que puedas hacer otros comandos con su alias, ejemplo:


  ///////////////////////////////////// 
 ```
const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

  module.exports = {
    name: "ping",
    
    alias: ["pong"],  Si no quieres alias puedes quitar las comillas 
    
  execute (client, message, args){
  Lo que haga el comando   

  
  }

}
```
  ///////////////////////////////////// 

Luego en index puedes editar el comando 'help' y el estado del bot, por default esta en "No molestar" y "Jugando Construyendome", puedes cambiar eso desde la linea 33 a la 36 del index.js 

