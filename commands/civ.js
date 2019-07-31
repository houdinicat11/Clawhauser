	const civs = ["Aztecs", "Berbers", "bulgarians", "britons", "burmese", "byzantines", "celts", "chinese", "cumans", "ethiopians", "franks", "goths", "huns", "incas", "indians", "italians", "japanese", "khmer", "koreans", "lithuanians", "magyars", "malay", "malians", "mayans", "mongols", "persians", "portuguese", "saracens", "slavs", "spanish", "tatars", "teutons", "turks", "vietnamese", "vikings"];
	const civData = require('../civs.json');
module.exports = message => {
	
    var splitMess = message.content.toLowerCase().split(' ');
	splitMess[0] = splitMess[0].substr(1);
    var i = 0;
    if(splitMess[1] == "help" || (splitMess[0] == "civ" && !splitMess[1]))
    {
        var text = "Your choices are: ```";
        while(civs[i])
        {
            text = text + civs[i] + ", ";
			i++;
        }
		text += "```"
        message.reply(text);
		return;
    }
	
	i = 0;
	while(splitMess[1] != civs[i].toLowerCase())
	{
		i++;
	}
	if(i == 0 || i == 1)
	{
		message.channel.send(`${civs[i]}: ${civData[civs[i]].civType} \nCivilization Bonuses \`\`\`${civData[civs[i]].civBonus} \`\`\`Team Bonus \`\`\`${civData[civs[i]].teamBonus} \`\`\`Unique Techs \`\`\`${civData[civs[i]].techs} \`\`\`Unique Units \`\`\`${civData[civs[i]].units}\`\`\``);
	}
    
    return;
}



/*

    
	"civType": "",
    "civBonus": "",
    "teamBonus": "",
	"Tech": "",
	"Units": ""


*/