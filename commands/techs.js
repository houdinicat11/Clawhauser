const techs = ["Town Watch", "Town Patrol", "Wheelbarrow", "Hand Cart", "Loom", "Feudal Age", "Castle Age", "Imperial Age", "Treadmill Crane", "Masonry", "Architecture", "Ballistics", "Heated Shot", "Murder Holes", "Fortified Wall", "Guard Tower", "Keep", "Bombard Tower", "Arrowslits", "Chemistry", "Siege Engineers", "Double-Bit Axe", "Bow Saw", "Two-Man Saw", "Horse Collar", "Heavy Plow", "Crop Rotation", "Gold Mining", "Gold Shaft Mining", "Stone Mining", "Stone Shaft Mining", "Cartography", "Caravan", "Coinage", "Banking", "Guilds", "Gillnets", "Careening", "Dry Dock", "Shipwright", "Redemption", "Atonement", "Herbal Medicine", "Heresy", "Sanctity", "Fervor", "Faith", "Illumination", "Block Printing", "Theocracy", "Tracking", "Squires", "Arson", "Forging", "Iron Casting", "Blast Furnace", "Scale Mail Armor", "Chain Mail Armor", "Plate Mail Armor", "Scale Barding Armor", "Chain Barding Armor", "Plate Barding Armor", "Fletching", "Bodkin Arrow", "Bracer", "Padded Archer Armor", "Leather Archer Armor", "Ring Archer Armor", "Thumb Ring", "Parthian Tactics", "Bloodlines", "Husbandry", "Hoardings", "Conscription", "Sappers", "Spies", "Treason", "Atlatl", "Garland Wars", "Kasbah", "Maghrabi Camels", "Yeomen", "Warwolf", "Howdah", "Manipur Cavalry", "Greek Fire", "Logistica", "Stronghold", "Furor Celtica", "Great Wall", "Rocketry", "Royal Heirs", "Torsion Engines", "Chivalry", "Bearded Axe", "Anarchy", "Perfusion", "Marauders", "Atheism", "Andean Sling", "Couriers", "Sultans", "Shatagni", "Pavise", "Silk Road", "Yasama", "Kataparuto", "Tusk Swords", "Double Crossbow", "Panokseon", "Shinkichon", "Mercenaries", "Recurve Bow", "Thalassocracy", "Forced Levy", "Tigui", "Farimba", "Obsidian Arrows", "El Dorado", "Nomads", "Drill", "Boiling Oil", "Mahouts", "Carrack", "Arquebus", "Madrasah", "Zealotry", "Orthodoxy", "Druzhina", "Inquisition", "Supremacy", "Ironclad", "Crenellations", "Sipahi", "Artillery", "Chatras", "Paper Money", "Chieftains", "Berserkergang", "Stirrups", "Bagians", "Steppe Husbandry", "Cuman Mercenaries", "Hill Forts", "Tower Shields", "Silk Armor", "Timurid Siegecraft"];

const techBuild = {
	buildings: ["Barracks", "Archery Range", "Stable", "Seige Workshop", "Dock", "Monastery", "Town Center", "Castle", "Market"],
	imageLoc: ["../pictures/barracks.png", "../pictures/archery_range.png", "../pictures/stable.png", "../pictures/siege_workshop.png", "../pictures/dock.png", "../pictures/monastery.png", "../pictures/town_center.png", "../pictures/castle.png", "../pictures/market.png"],
	imageName: ["barracks.png", "archery_range.png", "stable.png", "siege_workshop.png", "dock.png", "monastery.png", "town_center.png", "castle.png", "market.png"]
};


const techData = require('../techs.json');

module.exports = message => {
	
	var splitMess = message.content.toLowerCase().split(' ');
	var  i = 0;
	
	if(splitMess[1] == "help" || !splitMess[1])
    {
		sendHelp(message, splitMess[0]);
		return;
    }
	
	if(splitMess[1] == "random")
	{
		
		var random = Math.floor(Math.random()*techs.length);
		console.log(`${random}`);
		outputEmbed(message,random);
		return true;
	}
	
	
	
	while(i != techs.length && message.content.toLowerCase().indexOf(techs[i].toLowerCase()) == -1)
	{
		i++;
	}
	
	
	if(i != techs.length)
	{
		outputEmbed(message, i);
	}
	else
	{
        sendHelp(message, splitMess[0]);
	}	
		return;
	
	
}



function uniqueTechs()
{
	var i = 76;
	var tmp = "`";
	while(techs[i])
	{
		if(i == (techs.length - 1))
		{
			tmp = tmp + techs[i] + "`";
		}
		else
		{
			tmp = tmp + techs[i] + "`, `";
		}
		i++;
	}
	
	return tmp;
}


function genericTechs()
{
	
	var i = 0;
	var tmp = "`";
	
	while(i<76)
	{
		if(i<75)
		{
			tmp = tmp + techs[i] + "`, `";
		}
		else
		{
			tmp = tmp + techs[i] + "`";
		}
		i++;
	}
	
	return tmp;
	
}


function sendHelp(message, prefix)
{
	message.channel.send({embed: {
			color: 0x00AE86,
			author: {
			name: `${prefix} Command Options`
			},
			title: "Generic Techs",
			description: (`${genericTechs()}`),
			fields: [{
				name: "Unique Techs",
				value: `${uniqueTechs()}`
			},
			{
				name: "Usage",
				value: `${prefix} {tech}`
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


function outputEmbed(message, i)
{
	//fixme
	const Discord = require("discord.js");
	if(techData[techs[i]].notes != "")
	{
		const embed = new Discord.RichEmbed()
			.setTitle(`${techs[i]}`)
			/*
			* Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
			**/
			.setColor(0x00AE86)
			.setDescription(`Age: ${techData[techs[i]].age} \nBuilding: ${techData[techs[i]].building} \nCost: ${techData[techs[i]].cost} \nEffect: ${techData[techs[i]].effect}`)
			.setFooter(`Clawhauser`, `${message.guild.client.user.avatarURL}`)
			.setThumbnail(`${techData[techs[i]].image}`)
			/*
			* Takes a Date object, defaults to current date.
			*/
			.setTimestamp()
			.addField("Notes", 
			`${techData[techs[i]].notes}`);
 
		message.channel.send({embed});
	}
	else
	{
		const embed = new Discord.RichEmbed()
                        .setTitle(`${techs[i]}`)
                        /*
                        * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
                        **/
                        .setColor(0x00AE86)
                        .setDescription(`Age: ${techData[techs[i]].age} \nBuilding: ${techData[techs[i]].building} \nCost: ${techData[techs[i]].cost} \nEffect: ${techData[techs[i]].effect}`)
                        .setFooter(`Clawhauser`, `${message.guild.client.user.avatarURL}`)
                        .setThumbnail(`${techData[techs[i]].image}`)
                        /*
                        * Takes a Date object, defaults to current date.
                        */
                        .setTimestamp()

                message.channel.send({embed});

	}
		
		return;
}
