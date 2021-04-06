module.exports = {
   name: 'weather',
   description: "use /weather and add a city name after the command to get the weather of that city!",
   execute(message, args){

      const Discord = require('discord.js');
      const weather = require('weather-js');
      const prefix = '.';

      if (message.content.startsWith(prefix + 'weather')){
         weather.find({search: args[0], degreeType: 'C'}, function(err, result){
            if (err) message.channel.send('u gotta add a city name after `.weather`, it makes sense right?');
            if(!args[0]) return;
            if (result === undefined || result.length === 0) return message.channel.send("i think you mispelled " + message.content + ", please try again");

            let current = result[0].current;
            let location =  result[0].location;

            const embed = new Discord.MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Weather for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor(0x7A7B80)
            .addField('Timezone', `UTC${location.timezone}`, true)
            .addField('Degree Type', location.degreetype, true)
            .addField('Temperature', `${current.temperature} Degrees`, true)
            .addField('Feels Like', `${current.feelslike} Degrees`, true)
            .addField('Winds', current.winddisplay, true)
            .addField('Humidity', `${current.humidity}%`, true)
            .setTimestamp();

            message.channel.send(embed);
         });
      };
   },
};
