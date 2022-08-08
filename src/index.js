const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
}

function decode(expr) {
  let charsQty = expr.length / 10
  let arr = []

  for (let i = 0; i < charsQty; i++) {
    let char = expr.slice(0, 10)
    expr = expr.slice(10)
    let morse = ''

    while (char.length > 0) {
      if (char.slice(-2) === '10') {
        morse = '.' + morse
      }
      if (char.slice(-2) === '11') {
        morse = '-' + morse
      }
      if (char.slice(-2) === '00') {
        break
      }
      if (char[0] === '*') {
        morse = ' '
        break
      }

      char = char.slice(0, char.length - 2)
    }

    arr.push(morse)
  }
  return arr
    .map(char => {
      if (MORSE_TABLE[char]) return MORSE_TABLE[char]
      return char
    })
    .join('')
}

module.exports = {
  decode,
}
