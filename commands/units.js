const units = ["Militia", "Man-At-Arms", "Long Swordsman", "Two-Handed Swordsman", "Champion", "Spearman", "Pikeman", "Halberdier", "Eagle Scout", "Eagle Warrior", "Elite Eagle Warrior"];
const unitData = require('../units.json');
module.exports = message => {
	
	//message.delete(5000);
	var splitMess = message.content.toLowerCase().split(' ');
	var i = 0;
	
	if(splitMess[1] == "help" || !splitMess[1])
    {
		// string start off
        var text = "Your choices are: ```";
		// add all the units
        while(units[i])
        {
            text = text + units[i] + ", ";
			i++;
        }
		// remove the last comma
		i = text.lastIndexOf(',');
		text = text.slice(0,i);
		text += "```"
		// send the message while pinging the person who send it
        message.reply(text);
		return;
    }
	
	
	//var cost, tt, building, hp, range, attack, rof, attackBonus, armorClass, meleeArmor, pierceArmor, speed, los, line, upgradeFrom, upgrade, specialNotes
	while(i != units.length && message.content.toLowerCase().indexOf(units[i].toLowerCase()) == -1)
	{
		i++;
	}
	if(i != units.length)
	{
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
				value: `Range: ${unitData[units[i]].range} \nAttack: ${unitData[units[i]].attack} \n Rate of Fire: ${unitData[units[i]].rof} \nAttack Bonus: ${unitData[units[i]].attackBonus}`
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
		});
		return;
	}
	i = 0;
	// string start off
        var text = "Your choices are: ```";
		// add all the units
        while(units[i])
        {
            text = text + units[i] + ", ";
			i++;
        }
		// remove the last comma
		i = text.lastIndexOf(',');
		text = text.slice(0,i);
		text += "```"
		// send the message while pinging the person who send it
        message.reply(text);
	
		return;
	//}
}
