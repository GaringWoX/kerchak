const Discord = require('discord.js');

module.exports = {
  name: 'ping',
  usage: 'Don\'t ask!',
  description: 'Do i need to describe it? Shit, i already does.',
  run: async (client, message, args) => {
    
    const m = await message.channel.send("Ping?");
    m.edit(`🏓 Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    
  }
};
