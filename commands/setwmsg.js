const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwmsg",
  category: "moderation",
  usage: "setwmsg <your_message>",
  description: "Set the welcome message",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission('MANAGE_CHANNELS')) {
      return message.reply('You lack of __PERMISSION__ `MANAGE_CHANNELS`')
    };
    
    var wmsg = args.join(" ");
    
    var gx = db.fetch(`wmsg_${message.guild.id}`);
    
    if(!args.length && db.has(`wmsg_${message.guild.id}`)) {
      return message.channel.send(`Current __Welcome Message__ is :\n${gx}`)
    };
    
    if(!args.length) {
      return message.channel.send("Please send me the __Welcome Message!__")
    };

    db.set(`wmsg_${message.guild.id}`, args.join(" "));
    
    message.channel.send(`__Welcome Message_ set to :\n${wmsg}`);

  },
};
