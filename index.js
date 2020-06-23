const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = '/';
var version = '1.0.2';


client.on('ready', () =>{
  console.log(`Logged in as ${client.user.tag}!`);

client.user.setActivity("with anime tiddies") 
})


client.on('message', message=>{

  let args = message.content.substring(PREFIX.length).split(" ");

  switch(args[0]){
    case 'sup':
      message.channel.send('sup');
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
  
client.login('NzE0MTE5NzQwOTcyNTk3MzE4.Xu5wGA.bVkN7rqD4Hfj74DjKkLs_7Idq_g');