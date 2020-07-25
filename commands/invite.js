const Discord = require('discord.js');

module.exports = {
  name: 'invite',
  description: 'bot invite link',
  run: (client, message, args) => {
    
    const embed = new Discord.MessageEmbed()
    
    .setColor('#7289da')
    .setTitle('🔗 Invite Me!')
    .setURL('https://discordapp.com/api/oauth2/authorize?client_id=732828598435708974&permissions=8&scope=bot')
    
    message.channel.send(embed);
    
  }
};
