	const civs = ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burmese", "Byzantines", "Celts", "Chinese", "Cumans", "Ethiopians", "Franks", "Goths", "Huns", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Koreans", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Mongols", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars", "Teutons", "Turks", "Vietnamese", "Vikings"];
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
	if( i == 35 )
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
	message.channel.send(`${civs[i]}: ${civData[civs[i]].civType} \nCivilization Bonuses \`\`\`${civData[civs[i]].civBonus} \`\`\`Team Bonus \`\`\`${civData[civs[i]].teamBonus} \`\`\`Unique Techs \`\`\`${civData[civs[i]].techs} \`\`\`Unique Units \`\`\`${civData[civs[i]].units}\`\`\``);
    
    return;
}



/*

    
	"civType": "",
    "civBonus": "",
    "teamBonus": "",
	"Tech": "",
	"Units": ""


*/