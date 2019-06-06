module.exports = message => {
	const member = message.mentions.members.first();
	const reason = "No reason provided";
	
	if (!member) 
	{
		return message.reply('You need to mention the member you want to ban him');
	}

	if (!member.banable) {
		return message.reply('I can\'t ban this user.');
	}
		
	return member
		.ban(reason)
		.then(() => message.reply(`${member.user.tag} was banned.`))
		.catch(error => message.reply('Sorry, an error occured.'));
};