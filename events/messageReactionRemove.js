module.exports = (client, messageReaction, user) => {
	const channel = messageReaction.message.channel;
	const emoji = messageReaction.emoji;
	const member = messageReaction.message.guild.members.get(`${user.id}`);
	
	if(channel.toString() == "<#595315586183987221>")
	{
		if(emoji.name == "league")
		{
			member.removeRole("595326694458654721");
			console.log(`Removed the role "League of Legends" from ${member.user.tag}.`);
		}
		else if(emoji.name == "hearthstone")
		{
			member.removeRole("595701628867444756");
			console.log(`Removed the role "Hearthstone" from ${member.user.tag}.`);
		}
		else if(emoji.name == "pokemon")
		{
			member.removeRole("595157418535813169");
			console.log(`Removed the role "Pokemon Battle" from ${member.user.tag}.`);
		}
		else if(emoji.name == "TFT")
		{
			member.removeRole("595727355956428816");
			console.log(`Removed the role "TFT" from ${member.user.tag}.`);
		}
		else if(emoji.name == "minecraft")
		{
			member.removeRole("596714835077627926");
			console.log(`Removed the role "Minecraft" from ${member.user.tag}.`);
		}
	}
	
	
}