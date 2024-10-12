
function contarLetraA(str) {
  let contador = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'a') {
      contador++;
    }
  }

  return contador;
}

// Exemplo de uso
const texto = "A arte de programar é fascinante!";
const resultado = contarLetraA(texto);
console.log(`A letra "a" aparece ${resultado} vezes.`);
