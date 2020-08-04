const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  const cid = client.user.id;
    
  const embed = new Discord.MessageEmbed()
    
  .setColor('#7289da')
  .setTitle('🔗 Invite Me!')
  .setURL(`https://discord.com/api/oauth2/authorize?client_id=${cid}&permissions=8&scope=bot`)
    
  message.channel.send(embed);
    
};