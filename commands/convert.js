module.exports = {
   name: 'convert',
   description: "convert command",
   execute(message, args){
      let func = (type, num) => {
         if(type == 'binary' || type == 2){return parseInt(num).toString(2)}
         else if(type == 'ternary' || type == 3){return parseInt(num).toString(3)}
         else if(type == 'quaternary' || type == 4){return parseInt(num).toString(4)}
         else if(type == 'quinary' || type == 5){return parseInt(num).toString(5)}
         else if(type == 'senary' || type == 6){return parseInt(num).toString(6)}
         else if(type == 'septenary' || type == 7){return parseInt(num).toString(7)}
         else if(type == 'octal' || type == 8){return parseInt(num).toString(8)}
         else if(type == 'nonary' || type == 9){return parseInt(num).toString(9)}
         else if(type == 'decimal' || type == 'denary' || type == 10){return parseInt(num).toString(9)}
         else {      
            const Discord = require('discord.js');
            const embed = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .setTitle("Error:")
            .setDescription("Invalid <type> argument")
            .setFooter('Use >info-convert for more info');
            return embed;
         };
      };
      message.channel.send(func(args[0], args[1]));
   }
}