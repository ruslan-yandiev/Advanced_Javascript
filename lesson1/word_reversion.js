'use strict'

let word = prompt('Введите слово', '');

let reversWord = [];

for (let i = word.length; i != -1 ; i--) reversWord.push(word[i]);

alert(reversWord.join(''))