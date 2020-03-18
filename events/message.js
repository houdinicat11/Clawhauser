// commands
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
const civ = require('../commands/civ');
const unit = require('../commands/units');
const tech = require('../commands/techs');

module.exports = (client, message, prefix) => {
	
	// emotes
	const trebuchet = client.emojis.get("601064767431639040");
	// people
	const clawhauser = client.user.id;
	const houdinicat11 = "304765038273495040"; // needs changed to config.ownerID
	// message but split up
	var splitMess = message.content.toLowerCase().split(' ');
	
	// error checking to advoid infinite loops
	if(message.author == client.user)
	{
		return;
	}
	
	// message parsing
	if(messageParse(splitMess, message))
	{
		return;
	}
	
	// basicially a connectivity test
	if( message.content == 'ping')
	{
		message.reply('Pong!');
		return;
	}
	
	// message replay for @clawhauser
	if( message.isMentioned(clawhauser))
	{
		var randomNum = Math.floor(Math.random() * 10);
		if(randomNum < 5)
		{
			message.reply("Deus Vult");
		}
		else
		{
			message.reply("Is this the pussy you're looking for??");
		}
		return;
	}
	
	// message reply that happens 5% of the time if I get pinged
	if(message.isMentioned(houdinicat11))
	{
		var randomNum = Math.floor(Math.random() * 1000);
		if(randomNum > 550 && randomNum < 600)
		{
			message.reply("You dare summon the overlord like some common whore!!!!");
		}
	}
  
	if(message.content.startsWith(`${prefix}civ`))
	{
		return civ(message);
	}
	
	if(message.content.startsWith(`${prefix}unit`))
	{
		return unit(message);
	}
	
	if(message.content.startsWith(`${prefix}tech`))
	{
		return tech(message);
	}
  
	// ban a member
	if(message.content.startsWith(`${prefix}ban`)) 
	{
		return ban(message);
	}
  
	// kick a member
	if(message.content.startsWith(`${prefix}kick`)) 
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
			
	// purge command and commadn error
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

function messageParse(splitMess, message)
{
	var i = 0;
	
	
	// loop throught the message
	while(splitMess[i])
	{
		// check and react to key words
		if(splitMess[i] == "artillery")
		{
			message.delete(5000);
			message.channel.send("*Mortars rain down from the sky*");
			return true;
		}
		else if(splitMess[i] == "trebuchet")
		{
			// reacts with trebuchet emoji
			
			message.react("601064767431639040");
			message.channel.send("*Launches 90kg stones 300 meters*");
			return true;
		}
		else if(splitMess[i] == "side" && splitMess[i+1] == "chest")
		{
			message.delete(5000);
			// dumbbell nan kilo gif
			message.channel.send("https://tenor.com/view/muscles-popping-body-building-dumbbell-nan-kilo-moteru-anime-gif-14489924");
			return true;
		}
		else if(splitMess[i] == "cherry" || splitMess[i] == "letoleto")
		{
			message.delete(5000);
			// cherry tongue gif
			message.channel.send("https://cdn.weeb.sh/images/HJq3TuQw-.gif");
			return true;
		}
		else if(splitMess[i] == "dodge" || splitMess[i] == "dodged")
		{
			message.delete(5000);
			// dodge gif
			message.channel.send("https://tenor.com/view/dodge-anime-gif-9449699");
			return true;
		}
		else if(splitMess[i] == "here" && splitMess[i+1] == "kitty")
		{
			message.reply('Meow, I am here now Prrrrrr...')
			return true;
		}
		else if(splitMess[i] == "weeb")
		{
			message.delete(5000);
			message.channel.send("https://tenor.com/view/japan-anime-kawaii-sugoi-gif-4761309");
			return true;
		}
		i++;
	}
	// returns true if those words are found, flase otherwise
	return false;
	
}


