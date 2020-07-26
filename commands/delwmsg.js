const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "delwmsg",
  category: "moderation",
  usage: "delwmsg",
  description: "Delete the welcome message",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission('MANAGE_CHANNELS')) {
      return message.reply('You lack of __PERMISSION__ `MANAGE_CHANNELS`')
    };
    
    if(!db.has(`wmsg_${message.guild.id}`)) {
       return message.channel.send('Theres no __Welcome Message__ to delete.')
    };
   
    db.delete(`wmsg_${message.guild.id}`);
    
    message.channel.send('__Welcome Message__ deleted!');
    
  },
};
