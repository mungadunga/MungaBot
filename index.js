const Discord = require('discord.js');
const client = new Discord.Client();
const token = "NzE0MTE5NzQwOTcyNTk3MzE4.XsqB1Q.rZgo4avnMSgj7LAvWgS45wUOY0I";
const prefix = '>';

const fs = require('fs');

client.on('ready', () =>{
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('>info', { type: 'WATCHING' }).catch(console.error);

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

//cards folder

const cardsFiles = fs.readdirSync('./cards/').filter(file => file.endsWith('.js'));
for(const file of cardsFiles){
    const cardscommand = require(`./cards/${file}`);
    client.commands.set(cardscommand.name, cardscommand);
}

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    //commands folder

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //helpcommands folder

    const helpcommand = command

    //cards folder

    const cardscommand = command

    //commands

    if(command === 'info'){
        client.commands.get('info').execute(message, args); 
    } else if (command === 'version'){
        client.commands.get('version').execute(message, args);
    } else if (command === 'creator'){
        client.commands.get('creator').execute(message, args);
    } else if (command === 'dates'){
        client.commands.get('dates').execute(message, args);
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
    } else if (command === 'repeat'){
        client.commands.get('repeat').execute(message, args); 
    } else if (command === 'quiz'){
        client.commands.get('quiz').execute(message, args); 
    } else if (command === 'online'){
        client.commands.get('online').execute(message, args); 
    } else if (command === 'patreon'){
        client.commands.get('patreon').execute(message, args); 
    } else if (command === 'serverinfo'){
        client.commands.get('serverinfo').execute(message, args); 
    } else if (command === 'reddit'){
        client.commands.get('reddit').execute(message, args); 
    } else if (command === 'pp'){
        client.commands.get('pp').execute(message, args); 
    } else if (command === 'sus'){
        client.commands.get('sus').execute(message, args); 
    } else if (command === 'fight'){
        client.commands.get('fight').execute(message, args); 
    } else if (command === 'alia'){
        client.commands.get('alia').execute(message, args); 
    } else if (command === 'clap'){
        client.commands.get('clap').execute(message, args); 
    } else if (command === 'hack'){
        client.commands.get('hack').execute(message, args); 
    } else if (command === 'servercount'){
        client.commands.get('servercount').execute(message, args); 
    } else if (command === 'muda'){
        client.commands.get('muda').execute(message, args); 
    } else if (command === 'awaken'){
        client.commands.get('awaken').execute(message, args); 
    } else if (command === 'spoiler'){
        client.commands.get('spoiler').execute(message, args); 
    } else if (command === 'coinflip'){
        client.commands.get('coinflip').execute(message, args); 
    }

    //helpcommands
    else if (helpcommand === 'info-cards'){
        client.commands.get('info-cards').execute(message, args); 
    } else if (helpcommand === 'info-commands'){
        client.commands.get('info-commands').execute(message, args); 
    } else if (helpcommand === 'info-socialmedia'){
        client.commands.get('info-socialmedia').execute(message, args); 
    } else if (helpcommand === 'info-ban'){
        client.commands.get('info-ban').execute(message, args); 
    } else if (helpcommand === 'info-creator'){
        client.commands.get('info-creator').execute(message, args); 
    } else if (helpcommand === 'info-dates'){
        client.commands.get('info-dates').execute(message, args); 
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
    } else if (helpcommand === 'info-repeat'){
        client.commands.get('info-repeat').execute(message, args); 
    } else if (helpcommand === 'info-quiz'){
        client.commands.get('info-quiz').execute(message, args); 
    } else if (helpcommand === 'info-online'){
        client.commands.get('info-online').execute(message, args); 
    } else if (helpcommand === 'info-patreon'){
        client.commands.get('info-patreon').execute(message, args); 
    } else if (helpcommand === 'info-serverinfo'){
        client.commands.get('info-serverinfo').execute(message, args); 
    } else if (helpcommand === 'info-reddit'){
        client.commands.get('info-reddit').execute(message, args); 
    } else if (helpcommand === 'info-pp'){
        client.commands.get('info-pp').execute(message, args); 
    } else if (helpcommand === 'info-sus'){
        client.commands.get('info-sus').execute(message, args); 
    }  else if (helpcommand === 'info-fight'){
        client.commands.get('info-fight').execute(message, args); 
    }  else if (helpcommand === 'info-alia'){
        client.commands.get('info-alia').execute(message, args); 
    }  else if (helpcommand === 'info-clap'){
        client.commands.get('info-clap').execute(message, args); 
    } else if (helpcommand === 'info-hack'){
        client.commands.get('info-hack').execute(message, args); 
    } else if (helpcommand === 'info-servercount'){
        client.commands.get('info-servercount').execute(message, args); 
    } else if (helpcommand === 'info-muda'){
        client.commands.get('info-muda').execute(message, args); 
    } else if (helpcommand === 'info-awaken'){
        client.commands.get('info-awaken').execute(message, args); 
    } else if (helpcommand === 'info-spoiler'){
        client.commands.get('info-spoiler').execute(message, args); 
    } else if (helpcommand === 'info-coinflip'){
        client.commands.get('info-coinflip').execute(message, args); 
    }

    //cards folder
    else if (cardscommand === 'uno'){
        client.commands.get('uno').execute(message, args); 
    } else if (cardscommand === 'matt'){
        client.commands.get('matt').execute(message, args); 
    } else if (cardscommand === 'communism'){
        client.commands.get('communism').execute(message, args); 
    } else if (cardscommand === 'suscard'){
        client.commands.get('suscard').execute(message, args); 
    } else if (cardscommand === 'rick'){
        client.commands.get('rick').execute(message, args); 
    } else if (cardscommand === 'giorno'){
        client.commands.get('giorno').execute(message, args); 
    } else if (cardscommand === 'duo'){
        client.commands.get('duo').execute(message, args); 
    } else if (cardscommand === 'mememan'){
        client.commands.get('mememan').execute(message, args); 
    } else if (cardscommand === 'mememan-s1'){
        client.commands.get('mememan-s1').execute(message, args); 
    } else if (cardscommand === 'mememan-s2'){
        client.commands.get('mememan-s2').execute(message, args); 
    } else if (cardscommand === 'mememan-sx'){
        client.commands.get('mememan-sx').execute(message, args); 
    } else if (cardscommand === 'ger'){
        client.commands.get('ger').execute(message, args); 
    } else if (cardscommand === 'zoom'){
        client.commands.get('zoom').execute(message, args); 
    } else if (cardscommand === 'rick2'){
        client.commands.get('rick2').execute(message, args); 
    } else if (cardscommand === 'rick3'){
        client.commands.get('rick3').execute(message, args); 
    } 
});

//client login
  
client.login(token);