'use strict';

//SELECCIÓN DE ELEMENTOS/////////////////////////////////////////////////

//inputs
const inputs = document.querySelectorAll('input');
const passLength = document.getElementById('passLength');
const numberCharacters = document.getElementsByClassName('numberCharacters');
const passGenerated = document.getElementById('passGenerated');

//buttons
const generatePass = document.getElementsByClassName('generatePass');
const copyPass = document.getElementsByClassName('copyPass');

//CHECK DE ELEMENTOS/////////////////////////////////////////////////////
generatePass[0].addEventListener('click', (e) => {
  e.preventDefault();

  let letters = [];
  let numbers = [];
  let characters = [];

  for (const input of inputs) {
    if (input.id === 'lowercaseLetters' && input.checked) {
      letters = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
      ];
    } else if (input.id === 'uppercaseLetters' && input.checked) {
      letters = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
      ];
    } else if (input.id === 'bothLetters' && input.checked) {
      letters = [
        'A',
        'a',
        'B',
        'b',
        'C',
        'c',
        'D',
        'd',
        'E',
        'e',
        'F',
        'f',
        'G',
        'g',
        'H',
        'h',
        'I',
        'i',
        'J',
        'j',
        'K',
        'k',
        'L',
        'l',
        'M',
        'm',
        'N',
        'n',
        'O',
        'o',
        'P',
        'p',
        'Q',
        'q',
        'R',
        'r',
        'S',
        's',
        'T',
        't',
        'U',
        'u',
        'V',
        'v',
        'W',
        'w',
        'X',
        'x',
        'Y',
        'y',
        'Z',
        'z',
      ];
    } else if (input.id === 'numbers' && input.checked) {
      numbers = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4,
        5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8,
        9, 0, 1, 2,
      ];
    } else if (input.id === 'characters' && input.checked) {
      characters = [
        '?',
        '¿',
        '@',
        '#',
        '$',
        '&',
        '!',
        '*',
        '/',
        '+',
        '?',
        '¿',
        '@',
        '#',
        '$',
        '&',
        '!',
        '*',
        '/',
        '+',
        '?',
        '¿',
        '@',
        '#',
        '$',
        '&',
        '!',
        '*',
        '/',
        '+',
        '?',
        '¿',
        '@',
        '#',
        '$',
        '&',
        '!',
        '*',
        '/',
        '+',
        '?',
        '¿',
        '@',
        '#',
        '$',
        '&',
        '!',
        '*',
        '/',
        '+',
        '$',
        '%',
      ];
    }
  }
  keynerator(letters, numbers, characters);
});

//FUNCIÓN GENERADORA DE PASS////////////////////////////////////////////
const keynerator = (letters, numbers, characters) => {
  const completeArray = letters.concat(numbers, characters);

  //randomize array
  completeArray.sort(() => Math.random() - 0.5);

  //longitud de pass y nuevo array de pass generado
  const lengthSelected = passLength.value;
  const arrayPass = [];

  for (let i = 1; i <= lengthSelected; i++) {
    const randomPosition = Math.floor(Math.random() * 52);
    arrayPass.push(completeArray[randomPosition]);
  }

  //display de input passGenerated
  let pass = '';
  for (const element of arrayPass) {
    pass = pass + element;
  }

  passGenerated.value = pass;

  //si no se selecciona ninguna opción
  if (letters.length === 0 && numbers.length === 0 && characters.length === 0) {
    alert('Please chose some options to generate a valid key');
    passGenerated.value = '';
  }
};

//PASWORD LENGTH DISPLAY////////////////////////////////////////////////
passLength.addEventListener('change', () => {
  const long = passLength.value;
  numberCharacters[0].innerHTML = `Actual length: ${long}`;
});

//COPY PASS/////////////////////////////////////////////////////////////
// copyPass[0].addEventListener('click', (e) => {
//   e.preventDefault();

//   //funcion de copiado asincrona
//   const copyContent = async () => {
//     try {
//       const selection = passGenerated.value;
//       await navigator.clipboard.writeText(selection);

//       //alerts por si no existe una password generada
//       if (!passGenerated.value) {
//         alert('Please chose some options to generate a valid key');
//       } else {
//         alert('Your new Key has been copied to clipboard');
//       }
//     } catch (err) {
//       console.error('err');
//     }
//   };
//   copyContent();
// });

copyPass[0].addEventListener('click', (e) => {
  e.preventDefault();

  if (!passGenerated.value) {
    alert('Please chose some options to generate a valid key');
  } else {
    passGenerated.select();
    passGenerated.setSelectionRange(0, 99999);

    document.execCommand('copy'); //for mobile
    // navigator.clipboard.writeText(passGenerated.value);

    //para evitar que se active teclado en mobile desactivamos y volvemos a activar
    //el input
    passGenerated.disabled = true;
    alert('Your new KEY has been copied to clipboard');
    passGenerated.disabled = false;
  }
});
