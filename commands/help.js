module.exports = (message, prefix) => {
	const channel = message.channel;
	
	message.delete(5000);
	
	channel.send(`:small_blue_diamond:\` ${prefix}play {Youtube url} - Plays that song \`\n:small_blue_diamond:\` ${prefix}skip - skips the current song \`\n:small_blue_diamond:\` ${prefix}stop - stops playing music and disconnects \`\n:small_blue_diamond:\` ${prefix}connect - summons the bot to your voice channel \`\n:small_blue_diamond:\` ${prefix}nowplaying - displays current song \`\n:small_blue_diamond:\` ${prefix}disconnect - disconnects the bot \`\n:small_blue_diamond:\` ${prefix}fuckoff - disconnects the bot \`\n:small_blue_diamond:\` ${prefix}help - displays this message \`\n:small_blue_diamond:\` ${prefix}kick {@user} - kicks the user if able \`\n:small_blue_diamond:\` ${prefix}ban {@user} - band the user if able \``);
}