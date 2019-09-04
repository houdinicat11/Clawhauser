module.exports = (message, prefix) => {
	const channel = message.channel;
	
	message.delete(5000);
	
	message.channel.send({embed: {
		color: 0x00AE86,
		author: {
			name: message.guild.client.user.username + " Commands",
			icon_url: message.guild.client.user.avatarURL
		},
		title: "Music Commands",
		description: (`:small_blue_diamond: ${prefix}play {Youtube url} - Plays that song \n:small_blue_diamond: ${prefix}skip - skips the current song \n:small_blue_diamond: ${prefix}stop - stops playing music and disconnects \n:small_blue_diamond: ${prefix}connect - summons the bot to your voice channel \n:small_blue_diamond: ${prefix}nowplaying - displays current song \n:small_blue_diamond: ${prefix}disconnect - disconnects the bot \n:small_blue_diamond: ${prefix}fuckoff - disconnects the bot`),
		fields: [{
				name: "Administrative Commands",
				value: `:small_blue_diamond: ${prefix}help - displays this message \n:small_blue_diamond: ${prefix}kick {@user} - kicks the user if able \n:small_blue_diamond: ${prefix}ban {@user} - band the user if able \n:small_blue_diamond: ${prefix}summon 	{@user|@role} {number}(optional)- pings someone a lot`
			},
			{
				name: "Age of Empires Commands",
				value: `:small_blue_diamond: ${prefix}civ {civ|help}(optional) - Displays the civilization and all it's bonuses \n :small_blue_diamond: ${prefix}unit {Unit Name|Building|Unit LIne} \n:small_blue_diamond: ${prefix}techs {Tech|random}`
			}
		],
		timestamp: new Date(),
		footer: {
			icon_url: message.guild.client.user.avatarURL,
			text: `Clawhauser`
		}
	}
	});
	
	
}