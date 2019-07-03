module.exports = (client, emoji) => {
	const channel = emoji.guild.systemChannel;
	const name = emoji.name;
	const guild = emoji.guild.name;
	
	if(channel)
	{
		channel.send(`A new emoji has been created, ${emoji} Check it out!`);
	}
	
	console.log(`A new emoji has been created in ${guild} called: ${name}`);
}