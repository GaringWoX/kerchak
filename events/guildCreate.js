const Discord = require('discord.js');

module.exports = (client, guild, message) => {
  
  const gcembed = new Discord.MessageEmbed()
  .setColor('#00ff00')
  .setDescription(`New guild joined: **${guild.name}** (ID: ${guild.id}). This guild has ${guild.memberCount} members!`)
  .setFooter(`Now connected to ${client.guilds.cache.size} guilds`)
  .setTimestamp()
  
  client.channels.cache.get(client.comfig.botLogs).send(gcembed);
  
};