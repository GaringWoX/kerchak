exports.run = (client, message, args) => {
    
    if (message.author.id !== client.config.ownerID) return;
        
    message.client.guilds.cache.forEach((guild) => {
      message.channel.send(`\`${guild.name}\n${guild.id}\`\n`);
                                            
    });
};