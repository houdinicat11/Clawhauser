module.exports = (client, channel) => {
    console.log(`Channel Created: ${channel.name} \nBy: ${channel.client.user.username} \nAt: ${channel.createdAt} \nType: = ${channel.type}`);
}