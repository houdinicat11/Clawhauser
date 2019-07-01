module.exports = message => {
	const member = message.mentions.members.first();
	
	if (!member) 
	{
		return message.reply('You need to mention the member you want to ban him');
	}

	if (!member.bannable) {
		return message.reply('I can\'t ban this user.');
	}
		
	return member
		.ban()
		.then(() => message.reply("${member.user.tag} was banned. Good Riddence"))
		.catch(error => message.reply('I\'ve encountered an error'));
};