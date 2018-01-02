const commando = require('discord.js-commando');

class RandomQuoteCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'quote',
      group: 'bookish',
      memberName: 'quote',
      description: 'Offers a random literary quote.'
    });
  }

  async run(msg) {
    const quotes = require('./lists.json').quotes;
    msg.channel.send(quotes[Math.floor(Math.random() * quotes.length)]);
  }
}

module.exports = RandomQuoteCommand;
