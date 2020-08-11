const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    
    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0;
  
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;


    const vcmbd = new Discord.MessageEmbed()
    .setColor('#7289da')
    .setTitle(`Total member in voice channels:`)
    .setDescription(`🔊 ${count}`)
    .setTimestamp()
    message.channel.send(vcmbd);
      
};
