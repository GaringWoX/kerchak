const config = require('../config.json');

module.exports = {
  name: 'leaveguild',
  description: 'bot invite link',
  run: (client, message, args) => {
    
    if(message.author.id !== config.ownerID) return;
    
    message.guild.leave();
    
    },
             
};