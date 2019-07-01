require("dotenv").config();
const Discord = require("discord.js");

const Client = require('./client/Client');

const {
	prefix,
	token,
} = require('./config.json');

const fs = require("fs");
//const client = new Discord.Client();
const client = new Client();
client.commands = new Discord.Collection();

const queue = new Map();


fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventHandler(client, ...args));
  });
});



client.login(process.env.BOT_TOKEN);


