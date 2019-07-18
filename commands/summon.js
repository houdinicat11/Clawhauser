module.exports = message => {
	// gets the channel #summoning-channel
	const channel = message.guild.channels.get("418286557330669581");
	
	// gets the user mentioned in the command
	const member = message.mentions.members.first();
	
	// gets the role mentioned in the command
	const role = message.mentions.roles.first();
	
	const full = message.content.split(' ');
	
	
	// sets the number of pings per message and then the number of pings default: 100 / pingsPerMessage minimum 1 message of 10 pings
	const pingsPerMessage = 10;
	var numPings = full[2];
	if( numPings == undefined ) 
	{
		numPings = 100;
	}
	else
	{
		numPings = parseInt(numPings);
	}
	
	
	// trash vars
	var i = 10;
	var j = 1;
	
	// role or member
	if(member != undefined)
	{
		// member in text form
		var text = member.user.toString();
	
		// make string
		while(j < pingsPerMessage)
		{
			text += member.user.toString();
			j++;
		}
		
		// ping
		while(i < numPings)
		{
			channel.send(`${text}`);
			i +=10;
		}
		
		i -= 10
		text = member.user.toString();
		while(i < numPings - 1)
		{
			text += member.user.toString();
			i++;
		}
		
		channel.send(`${text}`);
	}
	else if(role != undefined)
	{
		// role in text form
		var text = role.toString();
		
		// make string
		while(j < pingsPerMessage)
		{
			text += role.toString();
			j++;
		}
	
		// ping
		while(i < numPings)
		{
			channel.send(`${text}`);
			i += 10;
		}
		
		i -= 10;
		text = role.toString();
		while(i < numPings - 1)
		{
			text += role.toString();
			i++;
		}
		
		channel.send(`${text}`);
	}
	else
	{
		message.reply("You did not entry a valid person or role");
	}
   
}