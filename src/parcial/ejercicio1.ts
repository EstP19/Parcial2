// Crea un programa que todos los números de 1 a 1000 qué sean palíndromos

const palíndromos = [];
for (let i = 1; i <= 1000; i += 1) {
  palíndromos.push(i);
}
const reverse = palíndromos.reverse();

console.log(reverse);
