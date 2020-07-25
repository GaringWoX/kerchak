const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "delwimg",
  category: "moderation",
  usage: "delwimg",
  description: "Delete the welcome image",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission('MANAGE_CHANNELS')) {
      return message.reply('You lack of __**PERMISSION**__ `MANAGE_CHANNELS`')
    };
    
    if(!db.has(`wimg_${message.guild.id}`)) {
      return message.channel.send('Theres no __**WELCOME IMAGE**__ to delete.');
    };
    
    db.delete(`wimg_${message.guild.id}`);
    
    message.channel.send('__**WELCOME IMAGE**__ deleted!');
    
   },
};