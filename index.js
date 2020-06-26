const Discord = require('discord.js');
const client = new Discord.Client();
const token = "NzE0MTE5NzQwOTcyNTk3MzE4.Xu5wGA.bVkN7rqD4Hfj74DjKkLs_7Idq_g";
const PREFIX = '/';

const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on('ready', () =>{
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('/info', { type: 'WATCHING' }).catch(console.error);

})

client.on('guildMemberAdd', member =>{
  
  const channel = member.guild.channels.cache.find(channel => channel.name === "👋┃welcome")
  if(!channel) return;

  channel.send(`Welcome to OUR server ${member}, no capitalism allowed here!`)
});

client.on('message', message=>{

  let args = message.content.substring(PREFIX.length).split(" ");

  switch(args[0]){
    case 'info':
      client.commands.get('info').execute(message, args);
      break; 
    case 'version':
      client.commands.get('version').execute(message, args);
      break;
    case 'creator':
      client.commands.get('creator').execute(message, args);
      break;
    case 'date':
      client.commands.get('date').execute(message, args);  
      break;
    case 'sup':
      client.commands.get('sup').execute(message, args);
      break;    
  }
})
  
client.login(token);