// Crea un programa que todos los números de 1 a 1000 qué sean palíndromos

let numbersString = '';

const palíndromos = [];
for (let i = 1; i <= 1000; i += 1) {
  numbersString = i.toString();

  palíndromos.push(numbersString);
}

palíndromos.join(',');
console.log(palíndromos);
