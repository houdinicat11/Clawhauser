require("dotenv").config();
const Discord = require("discord.js");

const Client = require('./client/Client');

const prefix = '~';


const fs = require("fs");
const ytdl = require('ytdl-core');
//const client = new Discord.Client();
const client = new Client();

const queue = new Map();


fs.readdir("./events/", (err, files) => 
{
  files.forEach(file => 
  {
    const eventHandler = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventHandler(client, ...args, prefix, queue));
  });
});


client.login(process.env.BOT_TOKEN);