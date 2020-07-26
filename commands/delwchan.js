const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "delwchan",
  category: "moderation",
  usage: "delwchan",
  description: "Delete the welcome channel",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission('MANAGE_CHANNELS')) {
      return message.reply('You lack of __PERMISSION__ `MANAGE_CHANNELS`')
    };
    
    if(!db.has(`wchan_${message.guild.id}`)) {
      return message.channel.send('Theres no __Welcome Channel__ to delete.')
    };
   
    db.delete(`wchan_${message.guild.id}`);
    
    message.channel.send('__Welcome Channel__ deleted!');

  },
};
