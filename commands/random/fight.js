const commando = require('discord.js-commando');

class FightCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'fight',
      group: 'random',
      memberName: 'fight',
      patterns: [/fight me/i],
      aliases: ['fightme'],
      description: 'Challenges Charlie to a fight.'
    });
  }

  async run(msg) {
    msg.reply('LET\'S FUCKIN GO!');
  }
}

module.exports = FightCommand;
