const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwmsg",
  category: "moderation",
  usage: "setwmsg <your_message>",
  description: "Set the welcome message",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission('MANAGE_CHANNELS')) {
      return message.reply('You lack of __**PERMISSION**__ `MANAGE_CHANNELS`');
    };
    
    var greet = args.join(" ");
    
    var gx = db.fetch(`wgreet_${message.guild.id}`);
    
    if(db.has(`wgreet_${message.guild.id}`)) {
     return message.channel.send(`Current greeting is :\n${gx}`)
    };
    
    if(!args.length) {
      return message.channel.send("Please send me the __**WELCOME MESSAGE!**__")
    };

    db.set(`wgreet_${message.guild.id}`, args.join(" "))
    
    message.channel.send(`Greeting set to :\n${greet}`);

  },
};