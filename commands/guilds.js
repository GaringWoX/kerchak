const config = require("../config.json");

module.exports = {
  name: "guilds",
  description: "bot joined guilds",
  run: (client, message, args) => {
    
    if (message.author.id !== config.ownerID) return;
        
    message.client.guilds.cache.forEach((guild) => {
      message.channel.send(`\`${guild.name}\n${guild.id}\`\n`);
                                            
    });
  }
};