const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "delwmsg",
  category: "moderation",
  usage: "delwmsg",
  description: "Delete the welcome message",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission('MANAGE_CHANNELS')) {
      return message.reply('You lack of __**PERMISSION**__ `MANAGE_CHANNELS`');
    };
    
    if(!db.has(`wgreet_${message.guild.id}`)) {
       return message.channel.send('Theres no __**WELCOME MESSAGE**__ to delete.');
    };
   
    db.delete(`wgreet_${message.guild.id}`);
    
    message.channel.send('__**WELCOME MESSAGE**__ deleted!');
    
  },
};