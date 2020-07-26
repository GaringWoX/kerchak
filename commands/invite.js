const Discord = require('discord.js');

module.exports = {
  name: 'invite',
  description: 'bot invite link',
  run: (client, message, args) => {
    
    const embed = new Discord.MessageEmbed()
    
    .setColor('#7289da')
    .setTitle('🔗 Invite Me!')
    .setURL('https://discord.com/api/oauth2/authorize?client_id=462328608896188421&permissions=8&scope=bot')
    
    message.channel.send(embed);
    
  }
};
