const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwimg",
  category: "moderation",
  usage: "setwimg <image link>",
  description: "Set the welcome image",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission('MANAGE_CHANNELS')) {
      return message.reply('You lack of __PERMISSION__ `MANAGE_CHANNELS`')
    };
    
    var wimg = db.fetch(`wimg_${message.guild.id}`);
    
    if(!args.length && db.has(`wimg_${message.guild.id}`)) {
       return message.channel.send(`Current __Welcome Image__ is :\n${wimg}`)
    };
  
    if(!args.length) {
       return message.channel.send('Please send me the __Welcome Image Link/URL!__')
    };
    
    db.set(`wimg_${message.guild.id}`, args);
 
    message.channel.send(`__Welcome Image__ have been set to ${args}`);
    
   },
};
