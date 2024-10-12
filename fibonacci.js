const readline = require('readline');

function pertenceFibonacci(numero) {

    let a = 0, b = 1, temp;
  
    if (numero === 0 || numero === 1) {
      return `O número ${numero} pertence à sequência de Fibonacci.`;
    }
  
    while (b < numero) {
      temp = a + b;
      a = b;
      b = temp;
    }
  
   
    if (b === numero) {
      return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
      return `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
    }
  }
  
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (entrada) => {
  let numero = parseFloat(entrada);
  if (isNaN(numero)) {
    console.log("Valor digitado não é um número válido.");
    rl.close();
    return
  }
  console.log(pertenceFibonacci(numero));
  rl.close();
});



