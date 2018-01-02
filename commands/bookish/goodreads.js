const commando = require('discord.js-commando');

class GoodreadsCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'goodreads',
      group: 'bookish',
      memberName: 'goodreads',
      description: 'Provides links to Goodreads.'
    });
  }

  async run(msg) {
    msg.channel.send('Share books on Goodreads! <https://www.goodreads.com/>');
  }
}

module.exports = GoodreadsCommand;
