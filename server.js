const Discord = require('discord.js');
const { registerFont, Canvas } = require('canvas');
const { prefix, botLogs } = require('./config.json');
const fs = require('fs');
const db = require('quick.db');

const client = new Discord.Client({
  disableEveryone: true
});

// HANDLER

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
};

// ACTIVITY

client.once('ready', () => {
	console.log('Ready!');
  client.user.setActivity('BOKEP', { type: `STREAMING` });
});


client.on("guildCreate", guild => {
  const gcembed = new Discord.MessageEmbed()
  .setColor('#00ff00')
  .setTitle(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`)
  .setTimestamp()
  client.channels.cache.get(botLogs).send(gcembed);
});

client.on("guildDelete", guild => {
  const gdembed = new Discord.MessageEmbed()
  .setColor('#ff0000')
  .setTitle(`I have been removed from: ${guild.name} (id: ${guild.id})`)
  .setTimestamp()
  client.channels.cache.get(botLogs).send(gdembed);
});


// CHECK


client.on('message', message => {
  
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (!message.guild) return;
  
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
  
  if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).run(client, message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
  
});

// START OF CANVAS

client.on("guildMemberUpdate", (oldMember, newMember) => {
  const addedRoles = newMember.roles.cache.filter(role => !oldMember.roles.cache.has('464110415727558697'));
	console.log(`The roles ${addedRoles.map(r => r.name)} were added to ${oldMember.displayName}.`);
});

client.on("guildMemberAdd", async (member) => {
  let chx = db.get(`wchan_${member.guild.id}`);
  
  if(chx === null) {
    return;
  }
  
  registerFont('comicsans.ttf', { family: 'Comic Sans' })
  
  const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 50;

	do {
		ctx.font = `${fontSize -= 10}px Comic Sans`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
  };
  
  const canvas = Canvas.createCanvas(700, 350);
	const ctx = canvas.getContext('2d');
  
  var wimg = db.get(`wimg_${member.guild.id}`);

	const background = await Canvas.loadImage(`${wimg}`);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '28px "Comic Sans"';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Welcome to ${member.guild.name}`, canvas.width / 2.5, canvas.height / 3.5);

	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 175, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 75, 200, 200);
  
  var wmsg = db.get(`wmsg_${member.guild.id}`);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
  
  if (wmsg.indexOf("<USER>") != -1) wmsg = wmsg.replace("<USER>", `${member}`);
  if (wmsg.indexOf("<GUILD>") != -1) wmsg = wmsg.replace("<GUILD>", `${member.guild.name}`);
  
  client.channels.cache.get(chx).send(`${wmsg}`, attachment);

});

// END OF CANVAS

client.login(process.env.TOKEN);
