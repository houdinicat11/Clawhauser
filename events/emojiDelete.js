module.exports = (client, emoji) => {
	name = emoji.name;
	guild = emoji.guild.name;
	
	console.log(`The emoji ${name} was deleated in ${guild}`);
}