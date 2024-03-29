module.exports = {
   name: 'meme',
   description: "sends a meme from r/meme",
   execute(message, args){
      const Discord = require('discord.js');
      const https = require('https');
      const url = 'https://www.reddit.com/r/meme/hot/.json?limit=100'

      https.get(url, (result) => {
         var body = '';
         result.on('data', (chunk) => {
            body += chunk;
         });

         result.on('end', () => {
            var response = JSON.parse(body);
            var index = response.data.children[Math.floor(Math.random() * 99) + 1].data;

            if (index.post_hint !== 'image') {

               var text = index.selftext;
               const textembed = new Discord.MessageEmbed()
                  .setTitle(subRedditName)
                  .setColor(0x7A7B80)
                  .setDescription(`[${title}](${link})\n\n${text}`)
                  .setURL(`https://reddit.com/${subRedditName}`);
               message.channel.send(textembed);
            };

            let image = index.preview.images[0].source.url.replace('&amp;', '&');
            let title = index.title;
            let link = 'https://reddit.com' + index.permalink;
            let subRedditName = index.subreddit_name_prefixed;

            if (index.post_hint !== 'image') {
               const textembed = new Discord.MessageEmbed()
               .setTitle(subRedditName)
               .setColor(0x7A7B80)
               .setDescription(`[${title}](${link})\n\n${text}`)
               .setURL(`https://reddit.com/${subRedditName}`);
               message.channel.send(textembed);
            };
            const imageembed = new Discord.MessageEmbed()
               .setTitle(subRedditName)
               .setImage(image)
               .setColor(0x7A7B80)
               .setDescription(`[${title}](${link})`)
               .setURL(`https://reddit.com/${subRedditName}`);
            message.channel.send(imageembed);
         }).on('error', function (e) {
            console.log('Got an error: ', e);
         });
      });
   },
};
