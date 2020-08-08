module.exports = async (client, message) => {
  
  if (!message.guild || message.author.bot) return;
  
  const gid = ("339210008594087940" || "718691607888789547");
  const trg = message.content.toLowerCase();
  
  const ar = ["welkam", "welcome",
             "<@300944075983421451>",
             "<@622047554359656473>",
             "<@720224674457452594>",
             "<@508092111858434110>"];
  
  if (trg === ar[0]) {
    if (message.guild.id !== (gid)) return;
    message.channel.send("<a:welcomeimage_1:727887823537176638><a:welcomeimage_2:727887823268610089>");
  } else
  if (trg === ar[1]) {
    if (message.guild.id !== (gid)) return;
    message.channel.send("<a:wlcm1:741733944130797608><a:wlcm2:741734096710926357>");
  } else
  if (trg === ar[2]) {
    if (message.guild.id !== (gid)) return;
    message.reply("Maaf kalau slowrespon, coba WA aja yaa.... <:sinisamaom:731030533169217566>");
  } else
  if (trg === ar[3]) {
    if (message.guild.id !== (gid)) return;
    message.reply("Apa sayang? Penting DM aja yuhuuu <a:RainbowWeeb:729649922240151563>");
  } else
  if (trg === ar[4]) {
    if (message.guild.id !== (gid)) return;
    message.reply("Iya sayang kenapa?");
  } else
  if (trg === ar[5]) {
    if (message.guild.id !== (gid)) return;
    message.reply("Ada apa tag - tag? Kalau kangen DM aja.... <a:ciatciat:725117108832436274>");
  };
  
  
  if (message.content.indexOf(client.config.prefix) !== 0) return;
  
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  const cmd = client.commands.get(command);
  
  if (!cmd) return;
  
  cmd.run(client, message, args);
  
};
