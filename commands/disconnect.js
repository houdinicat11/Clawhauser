module.exports = message => {
    const voiceChannel = message.member.voiceChannel;
	const txtChannel = message.channel;
    
		voiceChannel.leave()
        console.log('Disconnected!');
		txtChannel.send('`See Ya Later, Meow!`');
		
		message.delete(5000);
		
		return;
}