const kick = require("../commands/kick");
const ban = require("../commands/ban");

module.exports = (client, message) => {
  if (message.content.startsWith("${prefix}kick")) {
    return kick(message);
  }
};

module.exports = (client, message) => {
	if(message.content.startsWith("${prefix}ban")) {
		return ban(message);
	}
};