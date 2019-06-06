require("dotenv").config();
const Discord = require("discord.js");
// start music bot const
/*const Client = require('./client/Client');
const 
{
	prefix,
	token,
} = require('./config.json');
const ytdl = require('ytdl-core'); */
// end music bot const
const fs = require("fs");
const client = new Discord.Client();

fs.readdir("./events/", (err, files) => 
{
  files.forEach(file => 
  {
    const eventHandler = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventHandler(client, ...args));
  });
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!')
  }
})

client.on('message', msg =>
{
	if(msg.content === 'here kitty')
	{
		msg.reply('Meow, I am here now Prrrrrr...')
	}
})

// music bot lines
/*client.commands = new Discord.Collection();


const queue = new Map();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) 
{
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

console.log(client.commands); */
// end music bot lines


// music bot stuff
/*client.once('ready', () => 
{
 console.log('Ready!');
});
client.once('reconnecting', () => 
{
 console.log('Reconnecting!');
});
client.once('disconnect', () => 
{
 console.log('Disconnect!');
});

client.on('message', async message => {
	const args = message.content.slice(1).split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName);

	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	try {
		command.execute(message);
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}
});*/
// end music bot stuff



client.login(process.env.BOT_TOKEN);