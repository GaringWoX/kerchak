const Discord = require('discord.js');
exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
    
    message.guild.fetch().then(fetchedGuild => {
    const totalvcStates = fetchedGuild.voiceStates.cache.size;

    const vcmbd = new Discord.MessageEmbed()
    .setColor('#7289da')
    .setTitle(`Total member in voice channels:`)
    .setDescription(`🔊 ${totalvcStates}`)
    .setTimestamp()
    message.channel.send(vcmbd);

};
