const Discord = require('discord.js');
const client = new Discord.Client();
const token = "NzE0MTE5NzQwOTcyNTk3MzE4.Xu5wGA.bVkN7rqD4Hfj74DjKkLs_7Idq_g";
const prefix = '/';

client.on('ready', () =>{
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('/info', { type: 'WATCHING' }).catch(console.error);

})

const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on('guildMemberAdd', member =>{
  
  const channel = member.guild.channels.cache.find(channel => channel.name === "👋┃welcome")
  if(!channel) return;

  channel.send(`Welcome to OUR server ${member}, no capitalism allowed here!`)
});

client.on('message', message=>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'info'){
      client.commands.get('info').execute(message, args); 
  } else if (command === 'version'){
      client.commands.get('version').execute(message, args);
  } else if (command === 'creator'){
      client.commands.get('creator').execute(message, args);
  } else if (command === 'date'){
      client.commands.get('date').execute(message, args);
  } else if (command === 'sup'){
      client.commands.get('sup').execute(message, args);
  } else if (command === 'profile'){
      client.commands.get('profile').execute(message, args);
  } else if (command === 'kick'){
      client.commands.get('kick').execute(message, args);
  } else if (command === 'ban'){
      client.commands.get('ban').execute(message, args);
  } else if (command === 'howgay'){
      client.commands.get('howgay').execute(message, args); 
  }
})
  
client.login(token);