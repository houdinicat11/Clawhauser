module.exports = async function ready(client) 
{
  console.log(`Logged in as ${client.user.tag}!`);
  const league = client.emojis.get("595323879669366795"); // league emoji
  const hearthstone = client.emojis.get("595701361149214758"); // hearthstone emoji
  const pokemon = client.emojis.get("595702626209890334"); // pokemon emoji
  const tft = client.emojis.get("595727327602933770"); // tft emoji
  const minecraft = client.emojis.get("596713646609006593"); // minecraft emoji
  const aoe = client.emojis.get("601065192411103232"); // age of empires emoji
  const channel = client.channels.get("595315586183987221"); // roles channel in "The Unholy Order" Discord
  
  
  client.user.setActivity("Knights Hospitaller"); // online message setting
  
  // deletes the previous role message
  var channelMess = channel.fetchMessage(`${channel.lastMessageID}`)
	.then(message => message.delete())
	.catch(error => console.log(`${error} \nerror deleting the old roles message`))
  // sends a role message
  channelMess = await channel.send(`To unlock the different discussion channels, you’ll need to select the games you want to follow first! This will automatically assign you with a role that expands the Discord channel list.\n\nSelect any (or all) of the games you want to follow by clicking any of the three reactions below this post. Here’s what they represent:\n\n${league} = League of Legends\n${hearthstone} = Hearthstone\n${pokemon} = Pokemon Battle\n${tft} = Team Fight Tactics (TFT)\n${minecraft} = Minecraft\n${aoe} = Age of Empires\n\nNOTE that you can update your choices, add or remove a role at any time by simply updating your reaction(s) to the post.`);
  
  // reacts to the message with the different role emojis
  await channelMess.react(league);
  await channelMess.react(hearthstone);
  await channelMess.react(pokemon);
  await channelMess.react(tft);
  await channelMess.react(minecraft);
  await channelMess.react(aoe);
	
	
};

