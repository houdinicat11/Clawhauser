module.exports = (client, messageReaction, user) => {
	const channel = messageReaction.message.channel;
	const emoji = messageReaction.emoji;
	const member = messageReaction.message.guild.members.get(`${user.id}`);
	
	if(channel.toString() == "<#595315586183987221>")
	{
		if(emoji.name == "league")
		{
			member.addRole("595326694458654721");
			console.log(`Added the role "League of Legends" to ${member.user.tag}.`);
		}
		else if(emoji.name == "hearthstone")
		{
			member.addRole("595701628867444756");
			console.log(`Added the role "Hearthstone" to ${member.user.tag}.`);
		}
		else if(emoji.name == "pokemon")
		{
			member.addRole("595157418535813169");
			console.log(`Added the role "Pokemon Battle" to ${member.user.tag}.`);
		}
		else if(emoji.name == "TFT")
		{
			member.addRole("595727355956428816");
			console.log(`Added the role "TFT" to ${member.user.tag}.`);
		}
		else if(emoji.name == "minecraft")
		{
			member.addRole("596714835077627926");
			console.log(`Added the role "Minecraft" to ${member.user.tag}.`);
		}
		else if(emoji.name == "wololo")
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