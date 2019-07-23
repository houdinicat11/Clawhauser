module.exports = (client, channel) => {
	
	if (channel.type != "dm" && channel.type != "group")
	{
		if(channel.type == "text")
		{
			channel.send("New channel Poggers!!!");
		}
		console.log(`Channel Created: ${channel.name} \nAt: ${channel.createdAt} \nType: = ${channel.type}`);
	}
}