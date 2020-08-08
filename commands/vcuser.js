const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    
    const vc = (message.guild.voiceStates.cache.size)
    const vcmbd = new Discord.MessageEmbed()
    .setColor('#7289da')
    .setTitle(`Total member in voice channels:`)
    .setDescription(`🔊 ${vc}`)
    .setTimestamp()
    message.channel.send(vcmbd);

};
