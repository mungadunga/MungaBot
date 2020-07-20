const Discord = require('discord.js');
const client = new Discord.Client();
const token = "NzE0MTE5NzQwOTcyNTk3MzE4.Xu5wGA.bVkN7rqD4Hfj74DjKkLs_7Idq_g";
const prefix = '/';
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

client.on('ready', () =>{
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('/info', { type: 'WATCHING' }).catch(console.error);

})

//welcomes and goodbyes

client.on('guildMemberAdd', member =>{
  
  const channel = member.guild.channels.cache.find(channel => channel.name === "👋┃welcome");
  if(!channel) return;

  channel.send(`Welcome to OUR server ${member}, no capitalism allowed here!`);
});

client.on('guildMemberRemove', member =>{
  
    const channel = member.guild.channels.cache.find(channel => channel.name === "👋┃welcome");
    if(!channel) return;
  
    channel.send(`Blyat, ${member.user.tag} has left the server`);
});

//commands 

client.commands = new Discord.Collection();
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on('message', message => {
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
        } else if (command === 'userinfo'){
            client.commands.get('userinfo').execute(message, args);
        } else if (command === 'kick'){
            client.commands.get('kick').execute(message, args);
        } else if (command === 'ban'){
            client.commands.get('ban').execute(message, args);
        } else if (command === 'howgay'){
            client.commands.get('howgay').execute(message, args); 
        } else if (command === 'iq'){
            client.commands.get('iq').execute(message, args); 
        } else if (command === 'poll'){
            client.commands.get('poll').execute(message, args); 
        } else if (command === 'meme'){
            client.commands.get('meme').execute(message, args); 
        } else if (command === 'snipe'){
            client.commands.get('snipe').execute(message, args); 
        } else if (command === 'invite'){
            client.commands.get('invite').execute(message, args); 
        } else if (command === 'server'){
            client.commands.get('server').execute(message, args); 
        } else if (command === 'number'){
            client.commands.get('number').execute(message, args); 
        } else if (command === 'weather'){
            client.commands.get('weather').execute(message, args); 
        }
})

//client login
  
client.login(token);