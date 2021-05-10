const units = ["Militia", "Man-At-Arms", "Long Swordsman", "Two-Handed Swordsman", "Champion", "Spearman", "Pikeman", "Halberdier", "Eagle Scout", "Eagle Warrior", "Elite Eagle Warrior", "Scout Cavalry", "Light Cavalry", "Hussar", "Knight", "Cavalier", "Paladin", "Camel", "Heavy Camel", "Imperial Camel", "Battle Elephant", "Elite Battle Elephant", "Steppe Lancer", "Elite Steppe Lancer", "Xolotl Warrior", "Archer", "Crossbowman", "Arbalest", "Skirmisher", "Elite Skirmisher", "Imperial Skirmisher", "Cavalry Archer", "Heavy Cavalry Archer", "Hand Cannoneer", "Slinger", "Genitour", "Elite Genitour", "Battering Ram", "Capped Ram", "Seige Ram", "Mangonel", "Onager", "Seige Onager", "Scorpion", "Heavy Scorpion", "Bombard Cannon", "Seige Tower", "Fishing Ship", "Transport Ship", "Fire Galley", "Fire Ship", "Fast Fire Ship", "Demolition Raft", "Demolition Ship", "Heavy Demolition Ship", "Galley", "War Galley", "Galleon", "Cannon Galleon", "Elite Cannon Galleon", "Turtle Ship", "Elite Turtle Ship", "Longboat", "Elite Longboat", "Caravel", "Elite Caravel", "Trade Cog", "Trade Cart", "Monk", "Missionary", "Villager", "Petard", "Trebuchet", "Longbowman", "Elite Longbowman", "Cataphract", "Elite Cataphract", "Woad Raider", "Elite Woad Raider", "Chu Ko Nu", "Elite Chu Ko Nu", "Throwing Axeman", "Elite Throwing Axeman", "Huskarl", "Elite Huskarl", "Samurai", "Elite Samurai", "Mangudai", "Elite Mangudai", "War Elephant", "Elite War Elephant", "Mameluke", "Elite Mameluke", "Teutonic Knight", "Elite Teutonic Knight", "Janissary", "Elite Janissary", "Berserk", "Elite Berserk", "Jaguar Warrior", "Elite Jaguar Warrior", "Tarkan", "Elite Tarkan", "War Wagon", "Elite War Wagon", "Plumed Archer", "Elite Plumed Archer", "Conquistador", "Elite Conquistador", "Kamayuk", "Elite Kamayuk", "Elephant Archer", "Elite Elephant Archer", "Genoese Crossbowman", "Elite Genoese Crossbowman", "Magyar Huszar", "Elite Magyar Huszar", "Boyar", "Elite Boyar", "Camel Archer", "Elite Camel Archer", "Shotel Warrior", "Elite Shotel Warrior", "Gbeto", "Elite Gbeto", "Organ Gun", "Elite Organ Gun", "Arambai", "Elite Arambai", "Ballista Elephant", "Elite Ballista Elephant", "Karambit Warrior", "Elite Karambit Warrior", "Rattan Archer", "Elite Rattan Archer", "Konnik", "Elite Konnik", "Kipchak Archer", "Elite Kipchak Archer", "Leitis", "Elite Leitis", "Keshik", "Elite Keshik", "Flaming Camel", "Coustillier", "Elite Coustillier", "Serjeant", "Elite Serjeant", "Flemish Militia", "King"];
const unitBuild = {
	buildings: ["Barracks", "Archery Range", "Stable", "Seige Workshop", "Dock", "Monastery", "Town Center", "Castle", "Market"],
	imageLoc: ["../pictures/buildings/barracks.png", "../pictures/buildings/archery_range.png", "../pictures/buildings/stable.png", "../pictures/buildings/siege_workshop.png", "../pictures/buildings/dock.png", "../pictures/buildings/monastery.png", "../pictures/buildings/town_center.png", "../pictures/buildings/castle.png", "../pictures/buildings/market.png"],
	imageName: ["barracks.png", "archery_range.png", "stable.png", "siege_workshop.png", "dock.png", "monastery.png", "town_center.png", "castle.png", "market.png"]
};
const unitData = require('../units.json');
module.exports = message => {
	
	message.delete(5000);
	const Discord = require("discord.js");
	const file = new Discord.Attachment('../pictures/test.png');
	var splitMess = message.content.toLowerCase().split(' ');
	var i = 0;
	
	if(splitMess[1] == "help" || !splitMess[1])
    {
		sendHelp(message, splitMess[0]);
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
	if(splitMess[1] == "elite")
	{
		i++;
	}
	
	if(i != units.length)
	{
		outputEmbed(message, i);
	}
	else
	{
        sendHelp(message, splitMess[0]);
	}	
		return;
	
}


// checks if there is a blast radius associated with the unit
function blastCheck(i)
{
	if(unitData[units[i]].blast)
	{
		return `Blast Radius: ${unitData[units[i]].blast} \n`;
	}
	return "";
}

// checks if the unit is ranged
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
	//const Discord = require("discord.js");
	//const file = new Discord.Attachment('../pictures/test.png');
	message.channel.send({embed: {
			color: 0x00AE86,
			author: {
			name: `${units[i]}`,
			icon_url: `${unitData[units[i]].image}`
			},
			title: "General Info",
			description: (`Building: ${unitData[units[i]].building} \nLine: ${unitData[units[i]].line} \nUpgrade From: ${unitData[units[i]].upgradeFrom} \nUpgrade To: ${unitData[units[i]].upgrade} \nCost: ${unitData[units[i]].cost} \nTraining Time: ${unitData[units[i]].tt} \n HP: ${unitData[units[i]].hp} \nSpeed: ${unitData[units[i]].speed} \nLine of Sight: ${unitData[units[i]].los}`),
			fields: [{
				name: "Attack Info",
				value: `Range: ${unitData[units[i]].range} \nAttack: ${unitData[units[i]].attack} \n${accCheck(i)}${blastCheck(i)}Rate of Fire: ${unitData[units[i]].rof} \nAttack Bonus: \n${unitData[units[i]].attackBonus}`,
				inline: "true"
			},
			{
				name: "Defense Info",
				value: `Armor Class: ${unitData[units[i]].armorClass} \nMelee Armor: ${unitData[units[i]].meleeArmor} \nPierce Armor: ${unitData[units[i]].pierceArmor}`
				,
				inline: "true"
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
		});
		
		
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
	
	// finds the right building
	while(i != 9 && (unitBuild.buildings[i].toLowerCase() != keyWord[1] && message.content.toLowerCase().indexOf(unitBuild.buildings[i].toLowerCase()) == -1))
	{
		i++;
	}
	
	// checks if the building was found
	if(i != 9)
	{
		// loads upt he picture accosiated with that building
		const file = new Discord.Attachment(`${unitBuild.imageLoc[i]}`);
	
		// creates a message embed 
		const embed = new Discord.RichEmbed()
			.setTitle(`${unitBuild.buildings[i]} units`)
			.setColor(0x00AE86)
			.setFooter(`Clawhauser`, `${message.guild.client.user.avatarURL}`)
			.setImage(`attachment://${unitBuild.imageName[i]}`)
			.setTimestamp()
		
		// sends the embed
		message.channel.send({files: [file], embed});
		return true;
	}
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
			tmp = tmp + units[i] + "`, `";
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
	for(i=25;i<37;i++)
	{
		if(i<36)
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
function stableUnits()
{
	var tmp = "`";
	var i;
	for(i=11;i<25;i++)
	{
		if(i<24)
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
function castleAOKUnits()
{
	var tmp = "`";
	var i;
	for(i=71;i<99;i++)
	{
		if(i<98)
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
	for(i=99;i<109;i++)
	{
		if(i<108)
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
	for(i=109;i<119;i++)
	{
		if(i<118)
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
	for(i=119;i<127;i++)
	{
		if(i<126)
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
	for(i=127;i<135;i++)
	{
		if(i<134)
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
	for(i=135;i<144;i++)
	{
		if(i<143)
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

function castleLOWUnits()
{
	var tmp = "`";
	var i;
	for(i=144;i<148;i++)
	{
		if(i<147)
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
	for(i=47;i<67;i++)
	{
		if(i<66)
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
	for(i=37;i<47;i++)
	{
		if(i<46)
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


function sendHelp(message, prefix)
{
	message.channel.send({embed: {
			color: 0x00AE86,
			author: {
			name: `${prefix} command options`
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
				value: `\`${units[67]}\``
			},
			{
				name: "Monastery",
				value: `\`${units[68]}\`, \`${units[69]}\``
			},
			{
				name: "Town Center",
				value: `\`${units[70]}\`, \`${units[148]}\``
			},
			{
				name: "Castle - The Age of Kings",
				value: `${castleAOKUnits()}`
			},
			{
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
				name: "Castle - Lords of the West",
				value: `${castleLOWUnits()}`
			},
			{
				name: "Buildings",
				value: `${buildings()}`
			},
			{
				name: "Other",
				value: "`Random`, `Help`, `King`"
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