const Discord = require('discord.js');
exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_CHANNELS')) {
      return message.reply('You lack of __PERMISSION__ `MANAGE_CHANNELS`')
    };
    
    const vc = (message.guild.voiceStates.cache.size)
    const vcmbd = new Discord.MessageEmbed()
    .setColor('#7289da')
    .setTitle(`Total member in voice channels:`)
    .setDescription(`🔊 ${vc}`)
    .setTimestamp()
    message.channel.send(vcmbd);

};
