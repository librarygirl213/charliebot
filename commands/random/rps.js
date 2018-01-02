const commando = require('discord.js-commando');

class RockPaperScissorsCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'rps',
      group: 'random',
      memberName: 'rps',
      aliases: ['rockpaperscissors','rpsgame'],
      description: 'Play rock/paper/scissors with Charlie.',
      args: [{
        key: 'playerMove',
        prompt: 'What\'s your move?',
        type: 'string',
        validate: playerMove => {
          if (playerMove !== 'rock' && playerMove !== 'paper' && playerMove !== 'scissors') return 'That isn\'t a valid move! Try again.';
          return true;
        }
      }]
    });
  }

  async run(msg, { playerMove } ) {
    const options = ['rock', 'paper', 'scissors'];
    let botMove = options[Math.floor(Math.random() * options.length)];

    if (botMove === playerMove) {
      msg.reply('You and Charlie both threw '+botMove+'! It\'s a tie!');
    } else if (botMove === 'rock') {
      if (playerMove === 'paper') {
        msg.reply('You threw paper and Charlie threw rock. You win!');
      } else {
        msg.reply('You threw scissors and Charlie threw rock. You lose!');
      }
    } else if (botMove === 'paper') {
      if (playerMove === 'scissors') {
        msg.reply('You threw scissors and Charlie threw paper. You win!');
      } else {
        msg.reply('You threw rock and Charlie threw paper. You lose!');
      }
    } else if (botMove === 'scissors') {
      if (playerMove === 'rock') {
        msg.reply('You threw rock and Charlie threw scissors. You win!');
      } else {
        msg.reply('You threw paper and Charlie threw scissors. You lose!');
      }
    }
  }

///  msg.reply(`You threw ${playerMove} and Charlie threw ${botMove}!`);
///}
}

module.exports = RockPaperScissorsCommand;
