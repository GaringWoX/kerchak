exports.run = async (client, message, args) => {
  
  const Discord = require("discord.js");
  const moment = require("moment");

  function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
    
    let verifLevels = {"NONE": "NONE", "LOW": "LOW", "MEDIUM": "MEDIUM", "HIGH": "(╯°□°）╯︵  ┻━┻", "VERY_HIGH": "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"};
    let presence = {"online": "ngentot"};
    let region = {"brazil": ":flag_br: Brazil",
        "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
    };
    
    const embed = new Discord.MessageEmbed()
    
        .setAuthor("SERVER INFO")
        .setColor("#7289da")
        .addField("Guild:", `${message.guild.name}\n(\`${message.guild.id}\`)`, true)
        .addField("Verification Level:", verifLevels[message.guild.verificationLevel], true)
        .addField("Owner:", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("Region:", region[message.guild.region], true)
        .addField("Banner:", `🔗 [Click Me!](${message.guild.bannerURL()})`, true)
        .addField("Vanity URL:", `🔗 https://discord.gg/${message.guild.vanityURLCode}`, true)
        .addField("Guild Boost Tier:", `<a:boostgems:739595657123201125> ${message.guild.premiumTier}`, true)
        .addField("Guild Boost Total:", `<a:boostgems:739595657123201125> ${message.guild.premiumSubscriptionCount}`, true)
        .addField("Channels | Roles | Emojis:", `${message.guild.channels.cache.size} | ${message.guild.roles.cache.size} | ${message.guild.emojis.cache.size}`, true)
        .addField("Total | Humans | Bots:", `${message.guild.members.cache.size} | ${message.guild.members.cache.filter(member => !member.user.bot).size} | ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
        .addField("Member Presences:", `<:online:741196747748933682> ${message.guild.members.cache.filter(member => member.presence.status === "online").size} | <:idle:741197218861678644> ${message.guild.members.cache.filter(member => member.presence.status === "idle").size} | <:dnd:741196524238667846> ${message.guild.members.cache.filter(member => member.presence.status === "dnd").size} | <:offline:741197268123648020> ${message.guild.members.cache.filter(member => member.presence.status === "offline").size}`, true)
        .addField("Member in Voice Channels:", `🔊 ${message.guild.voiceStates.cache.size}`, true)
        .addField("Creation Date:", `${moment(message.guild.createdTimestamp).format("llll")}\n(${checkDays(message.guild.createdAt)})`, true)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setFooter(`Requested by: ${message.member.user.username}#${message.member.user.discriminator}`, `${message.member.user.displayAvatarURL({ dynamic: true })}`, true)
        .setTimestamp()
    message.channel.send({embed});
  
};
