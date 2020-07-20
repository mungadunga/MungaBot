module.exports = {
    name: 'weather',
    description: "correct usage: /weather <insert city name here>",
    execute(message, args){

        const Discord = require('discord.js');
        const weather = require('weather-js');
        const prefix = '/';

        if (message.content.startsWith(prefix + 'weather')){
            weather.find({search: args[0], degreeType: 'C'}, function(err, result){
                if (err) message.channel.send(err);

                if (result === undefined || result.length === 0){
                    message.channel.send('please enter a valid location')
                }

                var current = result[0].current;
                var location =  result[0].location;

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
                .addField('Humidity', `${current.humidity}%`, true);

                message.channel.send(embed);
            });
        }
    }
}
