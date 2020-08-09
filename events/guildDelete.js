const Discord = require('discord.js');

module.exports = (client, guild, message) => {

  if (!guild.available) return;
  
  const gdembed = new Discord.MessageEmbed()
  .setColor('#ff0000')
  .setTitle('I\'ve been removed from:')
  .setDescription(`**Guild Name:** ${guild.name}\n**Guild ID:** (\`${guild.id}\`)`)
  .setFooter(`Now connected to ${client.guilds.cache.size} guilds`)
  .setTimestamp()
  
  client.channels.cache.get(client.config.botLogs).send(gdembed);
  
};
