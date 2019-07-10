const kick = require('../commands/kick');
const ban = require('../commands/ban');
const summon = require('../commands/summon');
const connect = require('../commands/connect');
const disconnect = require('../commands/disconnect');
const play = require('../commands/play');
const skip = require('../commands/skip');
const stop = require('../commands/stop');
const purge = require('../commands/purge');
const prefix = '~';

module.exports = (client, message) => {
	
	const queue = new Map();
	// needed emojis for the reaction
	const league = client.emojis.get("595323879669366795");
	const hearthstone = client.emojis.get("595701361149214758");
	const pokemon = client.emojis.get("595702626209890334");
	const tft = client.emojis.get("595727327602933770");
	const minecraft = client.emojis.get("596713646609006593");
	const aoe = client.emojis.get("330949650519687169");
	
	// reacts to the role giving message
	if(message.channel.toString() == "<#595315586183987221>")
	{
		message.react(pokemon);
		message.react(hearthstone);
		message.react(league);
		message.react(tft);
		message.react(minecraft);
		message.react(aoe);
	}
	
	if( message.content == 'ping')
	{
		message.reply('Pong!')
		return;
	}
	
	
	
	if( message.mentions.users.first() == "<@585483518822449214>")
	{
		message.reply('Is this the pussy you are looking for??');
		console.log(`${message.mentions.users.first()}`);
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


