const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'roll',
      group: 'random',
      memberName: 'roll',
      description: 'Rolls a die',
      args: [
        {
          key: 'sides',
          prompt: 'how many sides does your die have?',
          type: 'integer',
          default: 6,
          validate: sides => {
            if (sides <= 1000) return true;
            return 'Please enter a number lower than or equal to 1000.';
          }
        },
        {
          key: 'dicenum',
          prompt: 'how many dice would you like to roll?',
          type: 'integer',
          default: 1,
          validate: dicenum => {
            if (dicenum <= 20) return true;
            return 'You cannot roll more than 20 dice at once.';
          }
        }
      ]
    });
  }

  async run(msg, {sides, dicenum}) {
    let roll = (Math.floor(Math.random() * sides) + 1) * dicenum;
    msg.reply('You rolled a ' + roll + '!');
  }
}

module.exports = DiceRollCommand;
