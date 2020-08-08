const Discord = require('discord.js');

module.exports = (client, guild, message) => {
  
  const gcembed = new Discord.MessageEmbed()
  .setColor('#00ff00')
  .setTitle('New guild joined:')
  .setDescription(`**Guild Name:** ${guild.name}\n**Guild ID:** (\`${guild.id}\`)\nThis guild has \`${guild.memberCount}\` members!`)
  .setFooter(`Now connected to ${client.guilds.cache.size} guilds`)
  .setTimestamp()
  
  client.channels.cache.get(client.config.botLogs).send(gcembed);
  
};
