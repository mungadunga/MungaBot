const Discord = require('discord.js');
const client = new Discord.Client();
const token = "NzE0MTE5NzQwOTcyNTk3MzE4.Xu5wGA.bVkN7rqD4Hfj74DjKkLs_7Idq_g";
const prefix = '/';

const fs = require('fs');

client.on('ready', () =>{
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('/info', { type: 'WATCHING' }).catch(console.error);

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

//commands and command handler

//commands folder

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
client.commands = new Discord.Collection();
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//helpcommands folder

const helpcommandFiles = fs.readdirSync('./helpcommands/').filter(file => file.endsWith('.js'));
for(const file of helpcommandFiles){
    const helpcommand = require(`./helpcommands/${file}`);
    client.commands.set(helpcommand.name, helpcommand);
}

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    //commands folder

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //helpcommands folder

    const helpcommand = command

    //commands

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
    } else if (command === 'discord'){
        client.commands.get('discord').execute(message, args); 
    } else if (command === 'number'){
        client.commands.get('number').execute(message, args); 
    } else if (command === 'weather'){
        client.commands.get('weather').execute(message, args); 
    } else if (command === 'insult'){
        client.commands.get('insult').execute(message, args); 
    } else if (command === 'youtube'){
        client.commands.get('youtube').execute(message, args); 
    } else if (command === 'twitter'){
        client.commands.get('twitter').execute(message, args); 
    } else if (command === 'instagram'){
        client.commands.get('instagram').execute(message, args); 
    } else if (command === 'discord'){
        client.commands.get('discord').execute(message, args); 
    } else if (command === 'dm'){
        client.commands.get('dm').execute(message, args); 
    } else if (command === 'update'){
        client.commands.get('update').execute(message, args); 
    } else if (command === 'clear'){
        client.commands.get('clear').execute(message, args); 
    } else if (command === 'say'){
        client.commands.get('say').execute(message, args); 
    } else if (command === 'quiz'){
        client.commands.get('quiz').execute(message, args); 
    } else if (command === 'online'){
        client.commands.get('online').execute(message, args); 
    }


    //helpcommands

    else if (helpcommand === 'info-ban'){
        client.commands.get('info-ban').execute(message, args); 
    } else if (helpcommand === 'info-creator'){
        client.commands.get('info-creator').execute(message, args); 
    } else if (helpcommand === 'info-date'){
        client.commands.get('info-date').execute(message, args); 
    } else if (helpcommand === 'info-discord'){
        client.commands.get('info-discord').execute(message, args); 
    } else if (helpcommand === 'info-dm'){
        client.commands.get('info-dm').execute(message, args); 
    } else if (helpcommand === 'info-howgay'){
        client.commands.get('info-howgay').execute(message, args); 
    } else if (helpcommand === 'info-info'){
        client.commands.get('info-info').execute(message, args); 
    } else if (helpcommand === 'info-instagram'){
        client.commands.get('info-instagram').execute(message, args); 
    } else if (helpcommand === 'info-insult'){
        client.commands.get('info-insult').execute(message, args); 
    } else if (helpcommand === 'info-invite'){
        client.commands.get('info-invite').execute(message, args); 
    } else if (helpcommand === 'info-iq'){
        client.commands.get('info-iq').execute(message, args); 
    } else if (helpcommand === 'info-kick'){
        client.commands.get('info-kick').execute(message, args); 
    } else if (helpcommand === 'info-meme'){
        client.commands.get('info-meme').execute(message, args); 
    } else if (helpcommand === 'info-number'){
        client.commands.get('info-number').execute(message, args); 
    } else if (helpcommand === 'info-poll'){
        client.commands.get('info-poll').execute(message, args); 
    } else if (helpcommand === 'info-snipe'){
        client.commands.get('info-snipe').execute(message, args); 
    } else if (helpcommand === 'info-sup'){
        client.commands.get('info-sup').execute(message, args); 
    } else if (helpcommand === 'info-twitter'){
        client.commands.get('info-twitter').execute(message, args); 
    } else if (helpcommand === 'info-update'){
        client.commands.get('info-update').execute(message, args); 
    } else if (helpcommand === 'info-userinfo'){
        client.commands.get('info-userinfo').execute(message, args); 
    } else if (helpcommand === 'info-version'){
        client.commands.get('info-version').execute(message, args); 
    } else if (helpcommand === 'info-weather'){
        client.commands.get('info-weather').execute(message, args); 
    } else if (helpcommand === 'info-youtube'){
        client.commands.get('info-youtube').execute(message, args); 
    } else if (helpcommand === 'info-clear'){
        client.commands.get('info-clear').execute(message, args); 
    } else if (helpcommand === 'info-say'){
        client.commands.get('info-say').execute(message, args); 
    } else if (helpcommand === 'info-quiz'){
        client.commands.get('info-quiz').execute(message, args); 
    } else if (helpcommand === 'info-online'){
        client.commands.get('info-online').execute(message, args); 
    }
});

//client login
  
client.login(token);