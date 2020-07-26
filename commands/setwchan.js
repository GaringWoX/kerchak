const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwchan",
  category: "moderation",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission('MANAGE_CHANNELS')) {
      return message.reply('You lack of __PERMISSION__ `MANAGE_CHANNELS`')
    };
    
    let channel = message.mentions.channels.first();
    
    var wchan = db.fetch(`wchan_${message.guild.id}`);
    
    if(!channel && db.has(`wchan_${message.guild.id}`)) {
      return message.channel.send(`Current __Welcome Channel__ is :\n<#${wchan}>`)
    };
    
    if(!channel) {
      return message.channel.send('Please __Mention__ the __Welcome Channel!__')
    };
    
    db.set(`wchan_${message.guild.id}`, channel.id);
 
    message.channel.send(`\_\_\*\*WELCOME CHANNEL*\*\_\_\ have been set to ${channel}`);

  },
};
