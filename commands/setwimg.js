const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwimg",
  category: "moderation",
  usage: "setwimg <image link>",
  description: "Set the welcome image",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission('MANAGE_CHANNELS')) {
      return message.reply('You lack of __**PERMISSION**__ `MANAGE_CHANNELS`')
    };
    
    let wimg = db.fetch(`wimg_${message.guild.id}`);
   
    if(db.has(`wimg_${message.guild.id}`)) {
      return message.channel.send(`__Current welcome image is:__ ${wimg}`)
    };
  
    if(!args.length) {
      return message.channel.send('Please send me the __**IMAGE LINK!**__')
    };
    
    db.set(`wimg_${message.guild.id}`, args);
 
    message.channel.send(`Welcome image have been set to ${args}`);
    
   },
};