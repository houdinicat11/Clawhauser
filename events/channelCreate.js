module.exports = (client, channel) => {
	if(channel.type == "text")
	{
		channel.send("New channel Poggers!!!");
	}
    console.log(`Channel Created: ${channel.name} \nBy: ${channel.client.user.username} \nAt: ${channel.createdAt} \nType: = ${channel.type}`);
}