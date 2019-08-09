const units = ["Militia", "Man-At-Arms", "Long Swordsman", "Two-Handed Swordsman", "Champion", "Spearman", "Pikeman", "Halberdier", "Eagle Scout", "Eagle Warrior", "Elite Eagle Warrior", "Scout Cavalry", "Light Cavalry", "Hussar", "Knight", "Cavalier", "Paladin", "Camel", "Heavy Camel", "Imperial Camel", "Battle Elephant", "Elite Battle Elephant", "Archer", "Crossbowman", "Arbalest", "Skirmisher", "Elite Skirmisher", "Imperial Skirmisher", "Cavalry Archer", "Heavy Cavalry Archer", "Hand Cannoneer", "Slinger", "Genitour", "Genitour", "Battering Ram", "Capped Ram", "Seige Ram", "Mangonel", "Onager", "Seige Onager", "Scorpion", "Heavy Scorpion", "Bombard Cannon", "Seige Tower", "Fishing Ship", "Transport Ship", "Fire Galley", "Fire Ship", "Fast Fire Ship", "Demolition Raft", "Demolition Ship", "Heavy Demolition Ship", "Galley", "War Galley", "Galleon", "Cannon Galleon", "Elite Cannon Galleon", "Turtle Ship", "Elite Turtle Ship", "Longboat", "Elite Longboat", "Caravel", "Elite Caravel", "Trade Cog", "Trade Cart", "Monk", "Missionary", "Villager", "Petard", "Trebuchet", "Longbowman", "Elite Longbowman", "Cataphract", "Elite Cataphract", "Woad Raider", "Elite Woad Raider", "Chu Ko Nu", "Elite Chu Ko Nu", "Throwing Axeman", "Elite Throwing Axeman", "Huskarl", "Elite Huskarl", "Samurai", "Elite Samurai", "Mangudai", "Elite Mangudai", "War Elephant", "Elite War Elephant", "Mameluke", "Elite Mameluke", "Teutonic Knight", "Elite Teutonic Knight", "Janissary", "Elite Janissary", "Berserk", "Elite Berserk", "Jaguar Warrior", "Elite Jaguar Warrior", "Tarkan", "Elite Tarkan", "War Wagon", "Elite War Wagon", "Plumed Archer", "Elite Plumed Archer", "Conquistador", "Elite Conquistador", "Kamayuk", "Elite Kamayuk", "Elephant Archer", "Elite Elephant Archer", "Genoese Crossbowman", "Elite Genoese Crossbowman", "Magyar Huszar", "Elite Magyar Huszar", "Boyar", "Elite Boyar", "Camel Archer", "Elite Camel Archer", "Shotel Warrior", "Elite Shotel Warrior", "Gbeto", "Elite Gbeto", "Organ Gun", "Elite Organ Gun", "Arambai", "Elite Arambai", "Ballista Elephant", "Elite Ballista Elephant", "Karambit Warrior", "Elite Karambit Warrior", "Rattan Archer", "Elite Rattan Archer", "Konnik", "Elite Konnik", "Kipchak Archer", "Elite Kipchak Archer", "Leitis", "Elite Leitis", "Keshik", "Elite Keshik"];
const unitBuild = {
	buildings: ["Barracks", "Archery Range", "Stable", "Seige Workshop", "Dock", "Monastery", "Town Center", "Castle", "Market"],
	imageLoc: ["../pictures/barracks.png", "../pictures/archery_range.png", "../pictures/stable.png", "../pictures/siege_workshop.png", "../pictures/dock.png", "../pictures/monastery.png", "../pictures/town_center.png", "../pictures/castle.png", "../pictures/market.png"],
	imageName: ["barracks.png", "archery_range.png", "stable.png", "siege_workshop.png", "dock.png", "monastery.png", "town_center.png", "castle.png", "market.png"]
};
const unitData = require('../units.json');
module.exports = message => {
	
	//message.delete(5000);
	const Discord = require("discord.js");
	const file = new Discord.Attachment('../pictures/test.png');
	var splitMess = message.content.toLowerCase().split(' ');
	var i = 0;
	
	if(splitMess[1] == "help" || !splitMess[1])
    {
		message.channel.send({embed: {
			color: 0x00AE86,
			author: {
			name: `${splitMess[0]} command options`
			},
			title: "Barracks",
			description: (`${barracksUnits()}`),
			fields: [{
				name: "Archery Range",
				value: `${archeryRangeUnits()}`
			},
			{
				name: "Stable",
				value: `${stableUnits()}`
			},
			{
				name: "Dock",
				value: `${dockUnits()}`
			},
			{
				name: "Siege Workshop",
				value: `${seigeWorkshopUnits()}`
			},
			{
				name: "Market",
				value: `${units[64]}`
			},
			{
				name: "Monastery",
				value: `${units[65], units[66]}`
			},
			{
				name: "Town Center",
				value: `${units[67]}`
			}
			],
			timestamp: new Date(),
			footer: {
				icon_url: message.guild.client.user.avatarURL,
				text: `Clawhauser`
			}
		}
		});
		
		message.channel.send({embed: {
			color: 0x00AE86,
			author: {
			name: `${splitMess[0]} command options`
			},
			title: "Castle - The Age of Kings",
			description: (`${castleAOKUnits()}`),
			fields: [{
				name: "Castle - The Conquerors",
				value: `${castleCUnits()}`
			},
			{
				name: "Castle - The Forgotten",
				value: `${castleFUnits()}`
			},
			{
				name: "Castle - The African Kingdoms",
				value: `${castleAKUnits()}`
			},
			{
				name: "Castle - The Rise of the Rajas",
				value: `${castleRRUnits()}`
			},
			{
				name: "Castle - Definitive Edition",
				value: `${castleDEUnits()}`
			},
			{
				name: "Buildings",
				value: `${buildings()}`
			},
			{
				name: "Other",
				value: "`Random`, `Help`"
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
	
	if(checkMessage(message, splitMess))
	{
		return;
	}
	
	
	//var cost, tt, building, hp, range, attack, rof, attackBonus, armorClass, meleeArmor, pierceArmor, speed, los, line, upgradeFrom, upgrade, specialNotes
	while(i != units.length && message.content.toLowerCase().indexOf(units[i].toLowerCase()) == -1)
	{
		i++;
	}
	if(i != units.length)
	{
		outputEmbed(message, i);
		return;
	}
		i = 0;
	// string start off
        var text = "Your choices are: ```";
		var text2 = "```";
		// add all the units
        while(units[i] && i < (units.length/2))
        {
            text = text + units[i] + ", ";
			i++;
        }
		while(units[i])
        {
            text2 = text2 + units[i] + ", ";
			i++;
        }
		// remove the last comma
		i = text.lastIndexOf(',');
		text = text.slice(0,i);
		text += "```";
		i = text2.lastIndexOf(',');
		text2 = text2.slice(0,i);
		text2 += "```";
		// send the message while pinging the person who send it
        message.reply(text);
		message.channel.send(text2);
	
		return;
	//}
}

function blastCheck(i)
{
	if(unitData[units[i]].blast)
	{
		return `Blast Radius: ${unitData[units[i]].blast} \n`;
	}
	return "";
}

function accCheck(i)
{
	if(unitData[units[i]].accuracy)
	{
		return `Accuracy: ${unitData[units[i]].accuracy} \nProjectile Speed: ${unitData[units[i]].projSpd} \n`;
	}
	return "";
}

function outputEmbed(message, i)
{
	const Discord = require("discord.js");
	const file = new Discord.Attachment('../pictures/test.png');
	/*message.channel.send({files: [file], embed: {
			color: 0x00AE86,
			author: {
			name: `${units[i]}`,
			icon_url: `attachment://test.png`
			},
			title: "General Info",
			description: (`Building: ${unitData[units[i]].building} \nLine: ${unitData[units[i]].line} \nUpgrade From: ${unitData[units[i]].upgradeFrom} \nUpgrade To: ${unitData[units[i]].upgrade} \nCost: ${unitData[units[i]].cost} \nTraining Time: ${unitData[units[i]].tt} \n HP: ${unitData[units[i]].hp} \nSpeed: ${unitData[units[i]].speed} \nLine of Sight: ${unitData[units[i]].los}`),
			fields: [{
				name: "Attack Info",
				value: `Range: ${unitData[units[i]].range} \nAttack: ${unitData[units[i]].attack} \n${accCheck(i)}${blastCheck(i)}Rate of Fire: ${unitData[units[i]].rof} \nAttack Bonus: \n${unitData[units[i]].attackBonus}`
			},
			{
				name: "Defense Info",
				value: `Armor Class: ${unitData[units[i]].armorClass} \nMelee Armor: ${unitData[units[i]].meleeArmor} \nPierce Armor: ${unitData[units[i]].pierceArmor}`
			},
			{
				name: "Notes",
				value: `${unitData[units[i]].notes}`
			}
			],
			timestamp: new Date(),
			footer: {
				icon_url: message.guild.client.user.avatarURL,
				text: `Clawhauser`
			}
		}
		});*/
		
		
		const embed = new Discord.RichEmbed()
			.setTitle("General Info")
			.setAuthor(`${units[i]}`)
			/*
			* Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
			*/
			.setColor(0x00AE86)
			.setDescription(`Building: ${unitData[units[i]].building} \nLine: ${unitData[units[i]].line} \nUpgrade From: ${unitData[units[i]].upgradeFrom} \nUpgrade To: ${unitData[units[i]].upgrade} \nCost: ${unitData[units[i]].cost} \nTraining Time: ${unitData[units[i]].tt} \n HP: ${unitData[units[i]].hp} \nSpeed: ${unitData[units[i]].speed} \nLine of Sight: ${unitData[units[i]].los}`)
			.setFooter(`Clawhauser`, `${message.guild.client.user.avatarURL}`)
			.setThumbnail(`${unitData[units[i]].image}`)
			/*
			* Takes a Date object, defaults to current date.
			**/
			.setTimestamp()
			.addField("Attack Info",
			`Range: ${unitData[units[i]].range} \nAttack: ${unitData[units[i]].attack} \n${accCheck(i)}${blastCheck(i)}Rate of Fire: ${unitData[units[i]].rof} \nAttack Bonus: \n${unitData[units[i]].attackBonus}`)
			/*
			* Inline fields may not display as inline if the thumbnail and/or image is too big.
			**/
			.addField("Defense Info", 
			`Armor Class: ${unitData[units[i]].armorClass} \nMelee Armor: ${unitData[units[i]].meleeArmor} \nPierce Armor: ${unitData[units[i]].pierceArmor}`)
			/*
			Blank field, useful to create some space.
			**/
			.addField("Notes", 
			`${unitData[units[i]].notes}`);
 
		message.channel.send({embed});
		
		return;
}

function checkMessage(message, keyWord)
{
	var i = 0;
	const Discord = require("discord.js");
	if(keyWord[1] == "random")
	{
		// random number 0 <= random < 34
		var random = Math.floor(Math.random()*units.length);
		console.log(`${random}`);
		outputEmbed(message,random);
		return true;
	}
	// fixme
	while(unitBuild.buildings[i].toLowerCase() != keyWord[1] && message.content.toLowerCase().indexOf(unitBuild.buildings[i].toLowerCase()) == -1)
	{
		i++;
	}
	
	if(i != 9)
	{
		const file = new Discord.Attachment(`${unitBuild.imageLoc[i]}`);
	
		const embed = new Discord.RichEmbed()
			.setTitle(`${unitBuild.buildings[i]} units`)
			.setColor(0x00AE86)
			.setFooter(`Clawhauser`, `${message.guild.client.user.avatarURL}`)
			.setImage(`attachment://${unitBuild.imageName[i]}`)
			.setTimestamp()
 
		message.channel.send({files: [file], embed});
		return true;
	}
	//end fixme
	return false;
}

function barracksUnits()
{
	var tmp = "`";
	var i;
	for(i=0;i<11;i++)
	{
		if(i<10)
		{
			tmp = tmp + units[i] + ", ";
		}
		else
		{
			tmp = tmp + units[i] + "`";
		}
	}
	return tmp;
}

function archeryRangeUnits()
{
	var tmp = "`";
	var i;
	for(i=22;i<34;i++)
	{
		if(i<33)
		{
			tmp = tmp + units[i] + ", ";
		}
		else
		{
			tmp = tmp + units[i]+ "`";
		}
	}
	return tmp;
}
function stableUnits()
{
	var tmp = "`";
	var i;
	for(i=11;i<22;i++)
	{
		if(i<21)
		{
			tmp = tmp + units[i] + ", ";
		}
		else
		{
			tmp = tmp + units[i]+ "`";
		}
	}
	return tmp;
}
function castleAOKUnits()
{
	var tmp = "`";
	var i;
	for(i=68;i<96;i++)
	{
		if(i<95)
		{
			tmp = tmp + units[i] + "`, `";
		}
		else
		{
			tmp = tmp + units[i]+ "`";
		}
	}
	return tmp;
}
function castleCUnits()
{
	var tmp = "`";
	var i;
	for(i=96;i<106;i++)
	{
		if(i<105)
		{
			tmp = tmp + units[i] + "`, `";
		}
		else
		{
			tmp = tmp + units[i]+ "`";
		}
	}
	return tmp;
}
function castleFUnits()
{
	var tmp = "`";
	var i;
	for(i=106;i<116;i++)
	{
		if(i<115)
		{
			tmp = tmp + units[i] + "`, `";
		}
		else
		{
			tmp = tmp + units[i]+ "`";
		}
	}
	return tmp;
}
function castleAKUnits()
{
	var tmp = "`";
	var i;
	for(i=116;i<124;i++)
	{
		if(i<123)
		{
			tmp = tmp + units[i] + "`, `";
		}
		else
		{
			tmp = tmp + units[i]+ "`";
		}
	}
	return tmp;
}
function castleRRUnits()
{
	var tmp = "`";
	var i;
	for(i=124;i<132;i++)
	{
		if(i<131)
		{
			tmp = tmp + units[i] + "`, `";
		}
		else
		{
			tmp = tmp + units[i]+ "`";
		}
	}
	return tmp;
}
function castleDEUnits()
{
	var tmp = "`";
	var i;
	for(i=132;i<140;i++)
	{
		if(i<139)
		{
			tmp = tmp + units[i] + "`, `";
		}
		else
		{
			tmp = tmp + units[i]+ "`";
		}
	}
	return tmp;
}
function dockUnits()
{
	var tmp = "`";
	var i;
	for(i=44;i<64;i++)
	{
		if(i<63)
		{
			tmp = tmp + units[i] + "`, `";
		}
		else
		{
			tmp = tmp + units[i]+ "`";
		}
	}
	return tmp;
}
function seigeWorkshopUnits()
{
	var tmp = "`";
	var i;
	for(i=34;i<44;i++)
	{
		if(i<43)
		{
			tmp = tmp + units[i] + "`, `";
		}
		else
		{
			tmp = tmp + units[i]+ "`";
		}
	}
	return tmp;
}
function buildings()
{
	var tmp = "`";
	var i;
	for(i=0;i<9;i++)
	{
		if(i<8)
		{
			tmp = tmp + unitBuild.buildings[i] + "`, `";
		}
		else
		{
			tmp = tmp + unitBuild.buildings[i]+ "`";
		}
	}
	return tmp;
}


/*// string start off
		var tmp;
        var text = "Your choices are: ```";
		var text2 = "```";
		// add all the units
        while(units[i] && i < (units.length/2))
        {
            text = text + units[i] + ", ";
			i++;
        }
		while(units[i])
        {
            text2 = text2 + units[i] + ", ";
			i++;
        }
		// remove the last comma
		i = text.lastIndexOf(',');
		text = text.slice(0,i);
		text += "```";
		i = text2.lastIndexOf(',');
		text2 = text2.slice(0,i);
		text2 += "```";
		// send the message while pinging the person who send it
        message.reply(text);
		message.channel.send(text2);
	
		return;*/