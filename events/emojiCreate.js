module.exports = (client, emoji) => {
	channel = emoji.guild.systemChannel;
	name = emoji.name;
	
	if(channel)
	{
		channel.send(`A new emoji has been created, ${emoji} Check it out!`);
	}
	
	console.log(`A new emoji has been created called: ${name}`);
}