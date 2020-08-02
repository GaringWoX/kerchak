const MessageAttachment = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwimg2",
  category: "moderation",
  usage: "setwimg <image link>",
  description: "Set the welcome image",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission('MANAGE_CHANNELS')) {
      return message.reply('You lack of __PERMISSION__ `MANAGE_CHANNELS`')
    };
    
    var wimg2 = db.fetch(`wimg2_${message.guild.id}`);
    
    if(!args.length && db.has(`wimg2_${message.guild.id}`)) {
      return message.channel.send(`Current __Secondary Welcome Image__ is :\n${wimg2}`)
    };
  
    if(!args.length) {
      return message.channel.send('Please send me the __Welcome Image Link/URL!__')
    };
    
    db.set(`wimg2_${message.guild.id}`, args);
 
    message.channel.send(`__Secondary Welcome Image__ have been set to :\n${args}`);
    
   },
};
