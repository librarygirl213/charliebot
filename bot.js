const Commando = require('discord.js-commando');
const client = new Commando.Client({
  owner: "298940895976226817",
  commandPrefix: "c;"
});
const config = require('./config.json');
const path = require('path');

client.on('ready', () => {
  console.log('I am ready!');
});

client.registry
  //register custom command groups
  .registerGroups([
    ['random','Just for Fun'],
    ['bookish','For Book Club']
  ])
  .registerDefaults()
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('message', msg => {

  //emoji reacting to messages with certain contents
  if (msg.content.toLowerCase().includes('i see you')) {
    msg.react('👀');
    }
  if (msg.content.toLowerCase().includes(' hug')) {
  	const koalahug = client.emojis.find('name','koalahug');
  	msg.react(koalahug);
   }

});

client.login(config.token);
