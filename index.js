
const Discord = require("discord.js");

const config = require("./config.json");

const Client = require('./client/Client');

const prefix = config.prefix;


const fs = require("fs");
const ytdl = require('ytdl-core');
//const client = new Discord.Client();
const client = new Client();


fs.readdir("./events/", (err, files) => 
{
  files.forEach(file => 
  {
    const eventHandler = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventHandler(client, ...args, prefix));
  });
});


client.login(config.token);