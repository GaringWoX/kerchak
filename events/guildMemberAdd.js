const Discord = require('discord.js');
const Canvas = require('canvas');
const db = require('quick.db');

module.exports = async (client, member) => {
  
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
  
};