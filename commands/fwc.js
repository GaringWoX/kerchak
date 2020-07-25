const db = require('quick.db');

module.exports = {
	name: 'fwc',
	description: 'fake new member',
	run: (client, message, args) => {
    
    if(!message.member.hasPermission('ADMINISTRATOR')) {
      return message.reply('You lack of __**PERMISSION**__ `ADMINISTRATOR`');
    }
      
    if(!db.has(`wchan_${message.guild.id}`)) {
     return message.channel.send('Please set your __**WELCOME CHANNEL!**__')
    }
    
    if(!db.has(`wgreet_${message.guild.id}`)) {
      return message.channel.send('Please set your __**WELCOME MESSAGE!**__')
    }
    
    if(!db.has(`wimg_${message.guild.id}`)) {
      return message.channel.send('Please set your __**WELCOME IMAGE!**__')
    }
    
		message.client.emit('guildMemberAdd', message.member);
      
  
  },
};