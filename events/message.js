module.exports = async (client, message) => {
  
  if (!message.guild || message.author.bot) return;
  
  if (message.content.indexOf(client.config.prefix) !== 0) {
     (client.ar[message.content].indexOf("<USER>") != -1)
       message.channel.send(client.ar[message.content].replace("<USER>", `${message.author}`))
  }
  
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  const cmd = client.commands.get(command);
  
  if (!cmd) return;
  
  cmd.run(client, message, args);
  
};
