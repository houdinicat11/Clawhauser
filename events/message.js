const kick = require("../commands/kick");
const ban = require("../commands/ban");

module.exports = (client, message) => {
  if (message.content.startsWith("!kick")) {
    return kick(message);
  }
};

module.exports = (client, message) => {
	if(message.content.startsWith("!ban")) {
		return kick(message);
	}
};