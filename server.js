const Discord = require('discord.js');
const Canvas = require('canvas');
const config = require('./config.json');
const ar = require('./ar.json');
const fs = require('fs');
const db = require('quick.db');

const client = new Discord.Client({
  disableEveryone: true
});

client.config = config;
client.ar = ar;


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});


client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let command = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, command);
  });
});

process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));

client.login(process.env.TOKEN);
