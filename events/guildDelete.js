const Discord = require('discord.js');

module.exports = (client, guild, message) => {
  
  const gdembed = new Discord.MessageEmbed()
  .setColor('#ff0000')
  .setDescription(`I have been removed from: **${guild.name}** (ID: ${guild.id})`)
  .setFooter(`Now connected to ${client.guilds.cache.size} guilds`)
  .setTimestamp()
  
  client.channels.cache.get(client.config.botLogs).send(gdembed);
  
};