const prompt = require('prompt-sync')();

// Solicita ao usuário para inserir uma string
let string = prompt('Digite uma string: ');

// Converte a string para minúsculas e depois filtra as ocorrências de 'a'
let quantidadeA = (string.match(/a/gi) || []).length;

if (quantidadeA > 0) {
  console.log(`A letra 'a' aparece ${quantidadeA} vezes na string.`);
} else {
  console.log("A letra 'a' não foi encontrada na string.");
}