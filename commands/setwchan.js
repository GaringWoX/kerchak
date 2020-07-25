const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwchan",
  category: "moderation",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission('MANAGE_CHANNELS')) {
      return message.reply('You lack of __**PERMISSION**__ `MANAGE_CHANNELS`')
    };
    
    let channel = message.mentions.channels.first();
    let chid = db.fetch(`wchan_${message.guild.id}`);
   
    if(db.has(`wchan_${message.guild.id}`)) {
      return message.channel.send(`Current welcome channel is <#${chid}>`)
    };
  
    if(!channel) {
      return message.channel.send('Please __**MENTION**__ the __**CHANNEL!**__')
    };
    
    db.set(`wchan_${message.guild.id}`, channel.id);
 
    message.channel.send(`\_\_\*\*WELCOME CHANNEL*\*\_\_\ have been set to ${channel}`);

  },
};