const db = require('quick.db');

exports.run = (client, message, args) => {
    
    if(!message.member.hasPermission('ADMINISTRATOR')) {
      return message.reply('You lack of __PERMISSION__ `ADMINISTRATOR`')
    };
      
    if(!db.has(`lchan_${message.guild.id}`)) {
     return message.channel.send('Please set your __Leave Channel!__')
    };
    
    if(!db.has(`lmsg_${message.guild.id}`)) {
      return message.channel.send('Please set your __Leave Message!__')
    };
    
    if(!db.has(`limg_${message.guild.id}`)) {
      return message.channel.send('Please set your __Leave Image!__')
    };

    client.emit('guildMemberRemove', message.member);
      
};