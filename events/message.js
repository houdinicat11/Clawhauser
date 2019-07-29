const kick = require('../commands/kick');
const ban = require('../commands/ban');
const summon = require('../commands/summon');
const connect = require('../commands/connect');
const disconnect = require('../commands/disconnect');
const play = require('../commands/play');
const skip = require('../commands/skip');
const stop = require('../commands/stop');
const purge = require('../commands/purge');
const help = require('../commands/help');

module.exports = (client, message, prefix) => {
	
	const trebuchet = client.emojis.get("601064767431639040");
	const clawhauser = "<@585483518822449214>"
	var splitMess = message.content.toLowerCase().split(' ');
	var found = false;
	var i = 0;
	
	while(splitMess[i] && !found)
	{
		if(splitMess[i] == "artillery")
		{
			message.channel.send("*Mortars rain down from the sky*");
			found = true;
		}
		else if(splitMess[i] == "trebuchet")
		{
			message.react("601064767431639040");
			message.channel.send("*Launches 90kg stones 300 meters*");
			found = true;
		}
		i++;
	}
	
	if( message.content == 'ping')
	{
		message.reply('Pong!')
		return;
	}
	else if(message.content == "side chest")
	{
		message.channel.send("https://tenor.com/view/muscles-popping-body-building-dumbbell-nan-kilo-moteru-anime-gif-14489924");
		return;
	}
	else if(message.content == "cherry" || message.content == "letoleto")
	{
		message.channel.send("https://cdn.weeb.sh/images/HJq3TuQw-.gif");
		return;
	}
	else if(message.content == "dodge")
	{
		message.channel.send("https://tenor.com/view/dodge-anime-gif-9449699");
		return;
	}
	
	if( message.mentions.users.first() == clawhauser && message.author != clawhauser)
	{
		var randomNum = Math.floor(Math.random() * 10);
		if(randomNum < 5)
		{
			message.reply('Deus Vult');
		}
		else
		{
			message.reply('Is this the pussy you\'re looking for??');
		}
		return;
	}
	
	if(message.isMentioned("304765038273495040") && message.author != clawhauser)
	{
		var randomNum = Math.floor(Math.random() * 1000);
		if(randomNum > 550 && randomNum < 565)
		{
			message.reply("You dare summon the overlord like some common whore!!!!");
		}
	}
  
	if(message.content === 'here kitty')
	{
		message.reply('Meow, I am here now Prrrrrr...')
		return;
	}
  
	// ban a member
	if (message.content.startsWith(`${prefix}ban`)) 
	{
		return ban(message);
	}
  
	// kick a member
	if (message.content.startsWith(`${prefix}kick`)) 
	{
		return kick(message);
	}
  
	// disconnects from a voice channel
	if( message.content.startsWith(`${prefix}fuckoff`)) 
	{
		return disconnect(message);
	}
  
	// disconnects from a voice channel
	if( message.content.startsWith(`${prefix}disconnect`)) 
	{
		return disconnect(message);
	}
  
	// spam pings a user till they get fed up and check discord
	if( message.content.startsWith(`${prefix}summon`)) 
	{
		return summon(message);
	}
  
	// connect to a voice channel
	if( message.content.startsWith(`${prefix}connect`)) 
	{
		return connect(message);
	}
	
	// play a song by url
	if( message.content.startsWith(`${prefix}play`)) 
	{
		play.execute(message);
		return;
	}
	
	// skip a song
	if( message.content.startsWith(`${prefix}skip`))
	{
		skip.execute(message);
		return;
	}

	// stops playing music
	if( message.content.startsWith(`${prefix}stop`))
	{
		stop.execute(message);
		return;
	}
	
	// displays the current song
	if( message.content.startsWith(`${prefix}nowplaying`))
	{
		nowplaying.execute(message);
		return;
	}
	
	// help command
	if( message.content.startsWith(`${prefix}help`))
	{
		return help(message, prefix);
	}
			
	
	if( message.content.startsWith(`${prefix}purge`))
	{
		purge.execute(message);
		return;
	}
	else if( message.content.startsWith(`${prefix}`))
	{
		message.reply("Please enter a valid command");
		return;
	}
	
	
};


