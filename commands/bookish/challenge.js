const commando = require('discord.js-commando');

class ReadingChallengeCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'challenge',
      group: 'bookish',
      memberName: 'challenge',
      description: 'Suggests one of the year\'s reading challenges.'
    });
  }

  async run(msg) {
    const challenge = require('./lists.json').challenge;
    msg.channel.send(challenge[Math.floor(Math.random() * challenge.length)]);
  }
}

module.exports = ReadingChallengeCommand;
