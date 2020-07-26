const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "delwimg",
  category: "moderation",
  usage: "delwimg",
  description: "Delete the welcome image",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission('MANAGE_CHANNELS')) {
      return message.reply('You lack of __PERMISSION__ `MANAGE_CHANNELS`')
    };
    
    if(!db.has(`wimg_${message.guild.id}`)) {
      return message.channel.send('Theres no __Welcome Image__ to delete.')
    };
    
    db.delete(`wimg_${message.guild.id}`);
    
    message.channel.send('__Welcome Image__ deleted!');
    
   },
};