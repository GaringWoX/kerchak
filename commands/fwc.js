const db = require('quick.db');

exports.run = (client, message, args) => {
    
    if(!message.member.hasPermission('ADMINISTRATOR')) return;
      
    if(!db.has(`wchan_${message.guild.id}`)) {
     return message.channel.send('Please set your __Welcome Channel!__')
    };
    
    if(!db.has(`wmsg_${message.guild.id}`)) {
      return message.channel.send('Please set your __Welcome Message!__')
    };
    
    if(!db.has(`wimg_${message.guild.id}`)) {
      return message.channel.send('Please set your __Welcome Image!__')
    };

    client.emit('guildMemberAdd', message.member);
      
};
