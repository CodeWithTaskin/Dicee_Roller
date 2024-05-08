let diceroll1 = Math.floor(Math.random() * 6 + 1);
let diceroll2 = Math.floor(Math.random() * 6 + 1);

function codeAddress() {
  document
    .querySelector('.dice .img1')
    .setAttribute('src', `./images/dice${diceroll1}.png`);
  document
    .querySelector('.dice .img2')
    .setAttribute('src', `./images/dice${diceroll2}.png`);

  if (diceroll1 > diceroll2) {
    document.querySelector('h1').innerHTML = '🚩Player 1 Wins! ';
  } else if (diceroll1 === diceroll2) {
    document.querySelector('h1').innerHTML = 'Draw 😯 Match ';
  } else {
    document.querySelector('h1').innerHTML = 'Player 2 Wins! 🚩';
  }
}

window.onload = codeAddress;
