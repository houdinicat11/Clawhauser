const units = ["Militia"];
const unitData = require('../units.json');
module.exports = message => {
	
	var splitMess = message.content.toLowerCase().split(' ');
	
	if(splitMess[1] == units[0].toLowerCase())
	{
		message.channel.send(`Militia: Cost - ${unitData[units[0]].cost}`);
		return;
	}
}
