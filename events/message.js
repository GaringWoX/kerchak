module.exports = async (client, message) => {
  
  if (message.author.bot) return;
  if (!message.guild) return;
  
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if (!client.commands.has(command));
  else client.commands.get(command).run(client, message, args);

  if(!client.ar[message.content]) return;
  if(client.ar[message.content].indexOf("<USER>") != -1) {
    message.channel.send(client.ar[message.content].replace("<USER>", `${message.author}`));
  } else
  if(client.ar[message.content].indexOf("<USER>") != 0) {
    message.channel.send(client.ar[message.content]);
  }
  
};
