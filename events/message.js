module.exports = async (client, message) => {
  
  if (message.author.bot) return;
  if (!message.guild) return;
  
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).run(client, message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	};
  
  setInterval(() => {
    client.channels.get(client.config.botLogs).send('ping');
  }, 280000);
  
};