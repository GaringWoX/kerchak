const Discord = require('discord.js');
exports.run = async (client, message) => {
  
  const args = message.content.split(' ').slice(1);
  const status = {'online': '<:online:741196747748933682>', 'idle': '<:idle:741197218861678644>', 
                  'dnd': '<:dnd:741196524238667846>', 'offline': '<:offline:741197268123648020>'};
  const color = {'online': '#45b481', 'idle': '#fca61b', 'dnd': '#f14647', 'offline': '#75808e'};
  
  let User = message.mentions.users.first();
  if (!User && args.slice().length === 0) {
      User = message.author;
    }
  
  if (User) {
    const embed = new Discord.MessageEmbed()
    .setColor(color[User.presence.status])
    .addField(`${status[User.presence.status]} ${User.tag}`, `\`ID: ${User.id}\``, true)
    .setImage(User.displayAvatarURL({format: 'png', dynamic: true, size: 2048}))
    .setFooter(`Requested by: ${message.author.tag}`, `${message.author.displayAvatarURL()}`)
    .setTimestamp();
    return message.channel.send(embed);
  }
  
  else {
     try {
        const fetchedMember = await message.guild.members.fetch(args.slice().join(' '));
        if (!fetchedMember) new Error('User not found!');
        User = fetchedMember;
        User = User.user;
        
        const embed = new Discord.MessageEmbed()
        .setColor(color[User.presence.status])
        .addField(`${status[User.presence.status]} ${User.tag}`, `\`ID: ${User.id}\``, true)
        .setImage(User.displayAvatarURL({format: 'png', dynamic: true, size: 2048}))
        .setFooter(`Requested by: ${message.author.tag}`, `${message.author.displayAvatarURL()}`)
        .setTimestamp();
        return message.channel.send(embed);
      }
      catch (error) {
        console.error(error);
      }
  }
};
