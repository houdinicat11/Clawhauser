module.exports = message => {
	const member = message.mentions.members.first();

	if (member) {
        member.ban({
          reason: 'They were bad!',
        })
		.then(() => message.reply(`Successfully banned ${member.user.tag}`));
          // We let the message author know we were able to ban the person
          
        .catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          // Log the error
          console.error(err);
        });
      }
	
	if (!member) 
	{
		return message.reply('You need to mention the member you want to ban him');
	}

	if (!member.banable) {
		return message.reply('I can\'t ban this user.');
	}
		
	return member
		.ban()
		.then(() => message.reply(`${member.user.tag} was banned.`))
		//.catch(error => message.reply('Sorry, an error occured.'));
};