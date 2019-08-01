	const civs = ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burmese", "Byzantines", "Celts", "Chinese", "Cumans", "Ethiopians", "Franks", "Goths", "Huns", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Koreans", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Mongols", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars", "Teutons", "Turks", "Vietnamese", "Vikings"];
	const civData = require('../civs.json');
module.exports = message => {
	
    var splitMess = message.content.toLowerCase().split(' ');
    var i = 0;
	var found = false;
    if(splitMess[1] == "help" || !splitMess[1])
    {
        var text = "Your choices are: ```";
        while(civs[i])
        {
            text = text + civs[i] + ", ";
			i++;
        }
		i = text.lastIndexOf(',');
		text = text.slice(0,i);
		text += "```"
        message.reply(text);
		return;
    }
	
	i = 0;
	while(i != 35 && splitMess[1] != civs[i].toLowerCase())
	{
		i++;
	}
	if( i == 35 )
	{
		var firstChar = splitMess[1].charAt(0).toUpperCase();
		i = 0;
		var text = "Did you mean: ```";
        while(civs[i])
        {
			if(civs[i].startsWith(firstChar))
			{
				text = text + civs[i] + ", ";
				found = true;
			}
			i++;
        }
		
		
		if(!found)
		{
			i = 0;
			text = "Your choices are: ```";
			while(civs[i])
			{
				text = text + civs[i] + ", ";
				i++;
			}
			
		}
		i = text.lastIndexOf(',');
		text = text.slice(0,i);
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