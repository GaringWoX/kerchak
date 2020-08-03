const Discord = require('discord.js');
const Canvas = require('canvas');
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
  const actvs = [
    `with ${client.users.cache.size} users`,
    `at discord.gg/gangsebelah`,
    `at GANG SEBELAH`,
    `and Making Love`
    ];
  
	console.log('Ready!');
  setInterval(() => {
        const index = Math.floor(Math.random() * (actvs.length));
        client.user.setActivity(`${actvs[index]}`);
    }, 7000);
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

// Boost Event

client.on("guildMemberUpdate", (oldMember, newMember) => {
  
  const nbid = ('722412731650670693');
  const xbid = ('733419579585331320');
  
  const removedRoles = oldMember.roles.cache.filter(role => !newMember.roles.cache.has(role.id));
	if (removedRoles.has(nbid)) oldMember.roles.add(xbid);
  
  const addedRoles = newMember.roles.cache.filter(role => !oldMember.roles.cache.has(role.id));
	if (addedRoles.has(nbid)) {
    const bcx = ('722420259721838653');
    
    newMember.roles.remove(xbid);
    
    const bembed = new Discord.MessageEmbed()
    .setColor('#f47fff')
    .setAuthor(`${oldMember.displayName} just boosted the server!`, 'https://cdn.discordapp.com/emojis/739595657123201125.gif')
    .setThumbnail(newMember.user.displayAvatarURL())
    .setDescription(`Thank you ${newMember.user} for boosting the server.\nBecause of you, we are now have __**${newMember.guild.premiumSubscriptionCount}**__ boost in total.\nPlease DM our Admin or Moderator for a __**Custom Role!**__`)
    .setFooter(`Current Server Level : ${newMember.guild.premiumTier}`, 'https://cdn.discordapp.com/emojis/739595657123201125.gif')
    .setTimestamp()
  
    client.channels.cache.get(bcx).send(bembed);
  }
  
});

// Start of Canvas

client.on("guildMemberAdd", async (member) => {
  let chx = db.get(`wchan_${member.guild.id}`);
  
  if(chx === null) {
    return;
  }

  const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 60;

	do {
		ctx.font = `bold ${fontSize -= 10}px Calibri`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
  };
  
  const canvas = Canvas.createCanvas(700, 350);
	const ctx = canvas.getContext('2d');
  
  var wimg = db.get(`wimg_${member.guild.id}`);
  var wimg2 = db.get(`wimg2_${member.guild.id}`);
  var images = [`${wimg}`, `${wimg2}`];
  var imx = Math.floor(Math.random() * images.length)

	const background = await Canvas.loadImage(images[imx]);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
  ctx.font = 'bold 15px Impact';
  ctx.fillStyle = '#ffffff';
  ctx.shadowColor = 'black';
  ctx.shadowBlur = 7;
  ctx.fillText(`Kamu member\nke #${member.guild.memberCount}`, canvas.width / 1.25, canvas.height / 1.4);

	ctx.font = 'bold 40px Calibri';
	ctx.fillStyle = '#ffffff';
  ctx.shadowColor = 'black';
  ctx.shadowBlur = 7;
	ctx.fillText(`Selamat Datang di`, canvas.width / 5.1, canvas.height / 6.5);
  
	ctx.font = applyText(canvas, `${member.displayName}`);
	ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.shadowColor = 'black';
  ctx.shadowBlur = 7;
	ctx.fillText(`${member.displayName}`, canvas.width / 2.0, canvas.height / 1.05);
  
	ctx.beginPath();
	ctx.arc(345, 145, 80, 0, Math.PI * 2, true);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 5;
	ctx.stroke();
  ctx.closePath();
  ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 265, 65, 160, 160);
  
  var wmsg = db.get(`wmsg_${member.guild.id}`);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
  
  if (wmsg.indexOf("<USER>") != -1) wmsg = wmsg.replace("<USER>", `${member}`);
  if (wmsg.indexOf("<GUILD>") != -1) wmsg = wmsg.replace("<GUILD>", `${member.guild.name}`);
  
  client.channels.cache.get(chx).send(`${wmsg}`, attachment);
  
  // Welcome Embed
  
  const chxx = ('738826287124185088');//db.get(`wembc_${member.guild.id}`);
  const wembed = new Discord.MessageEmbed()
  
  .setAuthor(`Selamat Datang di ${member.guild.name}, ${member.displayName}!`, `${member.user.displayAvatarURL()}`)
  .setThumbnail(member.user.avatarURL())
  .setDescription(
    `**Baca tata krama di :** <#719482949011243048>
**Ambil role di :** <#719483981355024404>
**Dan jangan lupa isi data diri lu di :** <#719484046174060555>\n
**Enjoy your stay and Have fun guys! Cheers...**🍻`)
  .setImage('https://cdn.discordapp.com/attachments/649483422426726430/719534483400818688/banner.jpg')
  .setColor('#7289da')
  .setFooter(`Member Saat ini : ${member.guild.memberCount}`)
  .setTimestamp()
  
  client.channels.cache.get(chxx).send(`Welcome ${member}`, wembed);

});

// END OF CANVAS

client.on("guildMemberRemove", async (member) => {
  let lchx = db.get(`wchan_${member.guild.id}`);
  
  if(lchx === null) {
    return;
  }

  const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 60;

	do {
		ctx.font = `bold ${fontSize -= 10}px Calibri`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
  };
  
  const canvas = Canvas.createCanvas(700, 350);
	const ctx = canvas.getContext('2d');
  
  var limg = db.get(`limg_${member.guild.id}`);

	const background = await Canvas.loadImage(`${limg}`);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
	ctx.font = 'bold 40px Calibri';
	ctx.fillStyle = '#ffffff';
  ctx.shadowColor = 'black';
  ctx.shadowBlur = 7;
	ctx.fillText(`Selamat Jalan Sahabat`, canvas.width / 7.0, canvas.height / 6.5);
  
	ctx.font = applyText(canvas, `${member.displayName}`);
	ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.shadowColor = 'black';
  ctx.shadowBlur = 7;
	ctx.fillText(`${member.displayName}`, canvas.width / 2.0, canvas.height / 1.1);

	ctx.beginPath();
	ctx.arc(345, 175, 80, 0, Math.PI * 2, true);
	ctx.strokeStyle = 'black';
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.closePath();
  ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 265, 95, 160, 160);
  
  var lmsg = db.get(`lmsg_${member.guild.id}`);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'leave-image.png');

  client.channels.cache.get(lchx).send(`${lmsg}`, attachment);

});


client.login(process.env.TOKEN);
