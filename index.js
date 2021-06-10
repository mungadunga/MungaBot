const Discord = require('discord.js');
const client = new Discord.Client();
const token = "NzE0MTE5NzQwOTcyNTk3MzE4.XsqB1Q.VARLaoWu2bnj_Ogjbg4nN2mwDIg";
const prefix = '.';

// status

client.on('ready', () => {
   console.log(`Logged in as ${client.user.tag}!`);
   client.user.setActivity('.info', { type: 'WATCHING' }).catch(console.error);
});

//welcomes and goodbyes

client.on('guildMemberAdd', member => {
   const channel = member.guild.channels.cache.find(channel => channel.id == "666363740349792303" || channel.id == "724904900651122723");
   if(!channel) return;
   
   let welcomeEmbed = new Discord.MessageEmbed()
   .setColor(0x00FF00)
   .setTitle(`Welcome!`)
   .setDescription(`Hey ${member}, we hope you'll have a great time in our server!`)
   .setThumbnail(member.user.displayAvatarURL())
   return channel.send(welcomeEmbed);
});

client.on('guildMemberRemove', member =>{
   const channel = member.guild.channels.cache.find(channel => channel.id == "666363740349792303" || channel.id == "724904900651122723");
   if(!channel) return;

   let goodbyeEmbed = new Discord.MessageEmbed()
   .setColor(0xFF0000)
   .setTitle(`Ouch!`)
   .setDescription(`${member.displayName} just left the server!`)
   .setThumbnail(member.user.displayAvatarURL())
   return channel.send(goodbyeEmbed);
});

// commands

client.commands = new Discord.Collection();
const fs = require('fs');
const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

// client.on

client.on('message', message => {
   const args = message.content.slice(prefix.length).split(/ +/);
   const commandName = args.shift().toLowerCase();
   const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

   if(!message.content.startsWith(prefix) || message.author.bot) return;
   if (!command) return;

   try { command.execute(message, args) }
   catch (error) {
      console.error(error);
      message.reply('There was an error trying to execute that command!');
   };
});

//client login
  
client.login(token);