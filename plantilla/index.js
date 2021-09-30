const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const fs = require('fs')

const { Client, Collection, Guild} = require('discord.js');
const keepAlive = require('./server.js');

let prefix = '-' //esto define el prefijo 

///////////////

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'))

for(const files of commandFiles){
  const command = require(`./comandos/${files}`);
  client.commands.set(command.name, command)
};  




///////////////



client.on('ready', ()  => {
  
  setInterval(() =>{
    function presence(){
      client.user.setPresence({
        status: 'dnd', 
        activity:{
          name: 'Construyendome',
          type: 'PLAYING'
        }
      })
    }
    presence()
  }, 1000)
  console.log('Estoy listo!')
});

client.on('message', (message) => {

  if(!message.content.startsWith(prefix)) return;
  if(message.author.bot) return;

  let usuario = message.mentions.members.first() || message.member;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command == 'help'){
  
  }else{
    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
    if(cmd){
      cmd.execute(client, message, args);
      return;
    } 
    console.log(command)
    message.channel.send('No reconozco ese comando')
  }
});

keepAlive()
client.login(Tu token)
