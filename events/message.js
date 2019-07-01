const kick = require('../commands/kick');
const ban = require('../commands/ban');
const summon = require('../commands/summon');
const disconnect = require('../commands/disconnect');
const play = require('../commands/play');
const skip = require('../commands/skip');
const stop = require('../commands/stop');
const purge = require('../commands/purge');
const prefix = '!';

module.exports = (client, message) => {
	
	const queue = new Map();
	
	if( message.content == 'ping')
	{
		message.reply('Pong!')
		return;
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
  
	// summon to a voice channel
	if( message.content.startsWith(`${prefix}summon`)) 
	{
		return summon(message);
	}
  
	// connect to a voice channel
	if( message.content.startsWith(`${prefix}connect`)) 
	{
		return summon(message);
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


