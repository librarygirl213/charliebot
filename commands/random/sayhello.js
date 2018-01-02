const commando = require('discord.js-commando');

class SayHelloCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'sayhello',
      group: 'random',
      memberName: 'sayhello',
      description: 'Sends you a friendly greeting.',
    });
  }

  async run(msg) {
    const greeting = ['Hello, friend!', 'Howdy!', 'Hi there!', 'Salutations!'];
    msg.reply(greeting[Math.floor(Math.random() * greeting.length)]);
  }
}

module.exports = SayHelloCommand;
