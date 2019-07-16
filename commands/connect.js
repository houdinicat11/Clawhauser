module.exports = message => {
	const voiceChannel = message.member.voiceChannel;
	
    if(!voiceChannel.joinable)
    {
        return message.reply('I cannot join that voice channel');
    }
    
		voiceChannel.join()
        .then(connection => console.log('Connected!'))
		.then(() => message.reply(`\`Connected to ${voiceChannel.name}\``))
        .catch(console.error);
		
		message.delete(5000);
}