const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '/';

var version = '1.0.1';

client.on('ready', () =>{
  console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', message=>{

  let args = message.content.substring(PREFIX.length).split(" ");

  switch(args[0]){
    case 'sup':
      message.channel.send('sup');
      break;
    case 'munga':
      message.channel.send('https://www.youtube.com/channel/UCm6m7iJj2CSdcmfKAYtgVFg');
      break;
    case 'info':
      if(args[1] === 'version'){
        message.channel.send('Version ' + version);
      }else{
        message.channel.send('Invalid Arguments')
      }   
      break; 
    case 'clear':
      if(!args[1]) return message.reply('blyat, plz define the second argument comrade') 
      message.channel.bulkDelete(args[1]);
      break;
    
  }
})
  
client.login(process.env.token);