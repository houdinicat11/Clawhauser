module.exports = (client, messageReaction, user) => {
	const channel = messageReaction.message.channel;
	const emoji = messageReaction.emoji;
	const member = messageReaction.message.guild.members.get(`${user.id}`);
	const rolesChannel = client.channels.get('595315586183987221');
	const league = client.emojis.get("595323879669366795");
	const hearthstone = client.emojis.get("595701361149214758");
	const pokemon = client.emojis.get("595702626209890334");
	const tft = client.emojis.get("595727327602933770");
	const minecraft = client.emojis.get("596713646609006593");
	const aoe = client.emojis.get("601065192411103232");
	const f = client.emojis.get("601854957284622345");
	
	if(emoji == f)
	{
		channel.send(`${user.tag} has paid respects to ${messageReaction.message.author.tag}`);
	}
	
	if(channel == rolesChannel)
	{
		if(emoji == league)
		{
			member.addRole("595326694458654721");
			console.log(`Added the role "League of Legends" to ${member.user.tag}.`);
		}
		else if(emoji == hearthstone)
		{
			member.addRole("595701628867444756");
			console.log(`Added the role "Hearthstone" to ${member.user.tag}.`);
		}
		else if(emoji == pokemon)
		{
			member.addRole("595157418535813169");
			console.log(`Added the role "Pokemon Battle" to ${member.user.tag}.`);
		}
		else if(emoji == tft)
		{
			member.addRole("595727355956428816");
			console.log(`Added the role "TFT" to ${member.user.tag}.`);
		}
		else if(emoji == minecraft)
		{
			member.addRole("596714835077627926");
			console.log(`Added the role "Minecraft" to ${member.user.tag}.`);
		}
		else if(emoji == aoe)
		{
			member.addRole("598577349746884635");
			console.log(`Added the role "Age of Empires" to ${member.user.tag}.`);
		}
		else
		{
			console.log(`${emoji.id}`);
		}
	}
}