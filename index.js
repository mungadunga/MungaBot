const Discord = require('discord.js');
const client = new Discord.Client();
const token = "NzE0MTE5NzQwOTcyNTk3MzE4.XsqB1Q.rZgo4avnMSgj7LAvWgS45wUOY0I";
const prefix = '.';

//client

client.on('ready', () => {
   console.log(`Logged in as ${client.user.tag}!`);
   client.user.setActivity('.info', { type: 'WATCHING' }).catch(console.error);
});

//welcomes and goodbyes

client.on('guildMemberAdd', member =>{
   const channel = member.guild.channels.cache.find(channel => channel.name === "👋┃welcome");
   if(!channel) return;
   channel.send(`Welcome to OUR server ${member}, no capitalism allowed here!`);
});

client.on('guildMemberRemove', member =>{
   const channel = member.guild.channels.cache.find(channel => channel.name === "👋┃welcome");
   if(!channel) return;
   channel.send(`Blyat, ${member.displayName} has left the server`);
});

// commands

const fs = require('fs');
const fileGroups = ["commands", "helpcommands", "cards"], files = {};
client.commands = new Discord.Collection();

for (const group of fileGroups){
   files[group] = fs.readdirSync(`./${group}/`).filter(file => file.endsWith('.js'));
   for(const file of files[group]){
      const command = require(`./${group}/${file}`);
      client.commands.set(command.name, command);
   }
}

client.on('message', message => {
   const args = message.content.slice(prefix.length).split(/ +/);
   const command = args.shift().toLowerCase();

   if(!message.content.startsWith(prefix) || message.author.bot) return;
   if (!client.commands.has(command)) return;

   try {
      client.commands.get(command).execute(message, args);
   }
   catch (error) {
      console.error(error);
      message.reply('there was an error trying to execute that command!');
   };
});

//client login
  
client.login(token);