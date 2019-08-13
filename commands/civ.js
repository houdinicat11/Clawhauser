	const civs = ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burmese", "Byzantines", "Celts", "Chinese", "Cumans", "Ethiopians", "Franks", "Goths", "Huns", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Koreans", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Mongols", "Persians", "Portuguese", "Saracens", "Slavs", "Spanish", "Tatars", "Teutons", "Turks", "Vietnamese", "Vikings"];
	const civData = require('../civs.json');
module.exports = message => {
	
	
	message.delete(5000);
	// split the message
    var splitMess = message.content.toLowerCase().split(' ');
    var i = 0;
	var found = false;
	// if the user needs help
    if(splitMess[1] == "help" || !splitMess[1])
    {
		// string start off
        var text = "`";
		// add all the civs
        while(civs[i])
        {
            text = text + civs[i] + "`, `";
			i++;
        }
		// remove the last comma
		i = text.lastIndexOf(',');
		text = text.slice(0,i);
		// send the message while pinging the person who send it
		
		
		message.channel.send({embed: {
			color: 0x00AE86,
			title: "Civs",
			description: (`${text}`),
			timestamp: new Date(),
			fields: [
			{
				name: "Usage",
				value: `${splitMess[0]} {civ}`
			}
			],
			footer: {
				icon_url: message.guild.client.user.avatarURL,
				text: `Clawhauser`
			}
		}
		});
        //message.reply(text);
		return;
    }
	// random function of this command
	if(splitMess[1] == "random")
	{
		// random number between 0 and 24
		var random = Math.floor(Math.random()*34);
		console.log(`${random}`);
		outputEmbed(message,random);
		return;
	}
	
	// search for the civ
	while(i != 35 && splitMess[1] != civs[i].toLowerCase())
	{
		i++;
	}
	// if civ not found
	if( i == 35 )
	{
		// get the first character of the invalid message
		var firstChar = splitMess[1].charAt(0).toUpperCase();
		// reset i
		i = 0;
		// start off the string
		var text = "Did you mean: ```";
		// loop throught the civs
        while(civs[i])
        {
			// if they begin with the first char add to the string
			if(civs[i].startsWith(firstChar))
			{
				text = text + civs[i] + ", ";
				found = true;
			}
			i++;
        }
		
		
		if(!found)
		{
			// reset i
			i = 0;
			// start of the text string
			text = "Your choices are: ```";
			// add all the civs to tthe string
			while(civs[i])
			{
				text = text + civs[i] + ", ";
				i++;
			}
			
		}
		// cut off the last comma
		i = text.lastIndexOf(',');
		text = text.slice(0,i);
		// finish the block formatting
		text += "```"
		// send the helper message
        message.reply(text);
		return;
	}
	
	// message embed send with civ info
	outputEmbed(message,i);
    
    return;
}


function outputEmbed(message, i)
{
	message.channel.send({embed: {
		color: 0x00AE86,
		author: {
		name: `${civs[i]}: ${civData[civs[i]].civType}`,
		icon_url: "https://benaball.com/wp-content/uploads/2011/01/age-of-empires-2-logo.jpg"
		},
		title: "Civilization Bonuses",
		description: (`${civData[civs[i]].civBonus}`),
		fields: [{
				name: "Team Bonus",
				value: `${civData[civs[i]].teamBonus}`
			},
			{
				name: "Unique Techs",
				value: `${civData[civs[i]].techs}`
			},
			{
				name: "Unique Units",
				value: `${civData[civs[i]].units}`
			}
		],
		timestamp: new Date(),
		footer: {
			icon_url: message.guild.client.user.avatarURL,
			text: `Clawhauser`
		}
	}
	});
    
    return;
	
}

 
/*

    
	"civType": "",
    "civBonus": "",
    "teamBonus": "",
	"Tech": "",
	"Units": ""


*/