module.exports = message => {
	const member = message.mentions.members.first();
	
	if (!member) 
	{
		return message.reply('You need to mention the member you want to kick him');
	}

	if (!member.kickable) {
		return message.reply('I can\'t kick this user.');
	}
		
	return member
		.kick()
		.then(() => message.reply('\n LEAVE THIS PLACE!!! \n ${member.user.tag} was kicked.'))
		.catch(error => message.reply('I\'ve encountered an error'));
};

