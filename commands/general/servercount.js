module.exports = {
   name: 'servercount',
   description: "servercount command",
   execute(message, args){
      message.channel.send(`MungaBot is in ${message.client.guilds.cache.size} servers!`);
   },
};