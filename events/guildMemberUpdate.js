const Discord = require('discord.js');
module.exports = (client, oldMember, newMember) => {
  
  const nbid = ('722412731650670693');
  const xbid = ('733419579585331320');
  
  const removedRoles = oldMember.roles.cache.filter(role => !newMember.roles.cache.has(role.id));
	if (removedRoles.has(nbid)) oldMember.roles.add(xbid);
  
  const addedRoles = newMember.roles.cache.filter(role => !oldMember.roles.cache.has(role.id));
	if (addedRoles.has(nbid)) {
    const bcx = ('722420259721838653');
    
    newMember.roles.remove(xbid);
    
    const bembed = new Discord.MessageEmbed()
    .setColor('#f47fff')
    .setAuthor(`${oldMember.displayName} just boosted the server!`, 'https://cdn.discordapp.com/emojis/739595657123201125.gif')
    .setThumbnail(newMember.user.displayAvatarURL())
    .setDescription(`Thank you ${newMember.user} for boosting the server.\nBecause of you, we are now have __**${newMember.guild.premiumSubscriptionCount}**__ boost in total.\nPlease DM our Admin or Moderator for a __**Custom Role!**__`)
    .setFooter(`Current Server Level : ${newMember.guild.premiumTier}`, 'https://cdn.discordapp.com/emojis/739595657123201125.gif')
    .setTimestamp()
  
    client.channels.cache.get(bcx).send(bembed);
  }
  
};
