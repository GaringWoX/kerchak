const db = require('quick.db');

module.exports = {
	name: 'fwc',
	description: 'fake new member',
	run: (client, message, args) => {
    
    if(!message.member.hasPermission('ADMINISTRATOR')) {
      return message.reply('You lack of __PERMISSION__ `ADMINISTRATOR`')
    };
      
    if(!db.has(`wchan_${message.guild.id}`)) {
     return message.channel.send('Please set your __Welcome Channel!__')
    };
    
    if(!db.has(`wmsg_${message.guild.id}`)) {
      return message.channel.send('Please set your __Welcome Message!__')
    };
    
    if(!db.has(`wimg_${message.guild.id}`)) {
      return message.channel.send('Please set your __Welcome Image!__')
    };

    message.client.emit('guildMemberAdd', message.member);
      
  },
};
