// Aula 1 - criando uma função
// function minhaFuncao() {
//     console.log("Testando.");
// }

// minhaFuncao(); // aqui você declara a função para se tornar vísivel.
// minhaFuncao();

// const minhaFuncaoEmVariavel = function () {
//     console.log("Função em variável.");
// }

// minhaFuncaoEmVariavel();

// function funcaoComParametro(txt) {
//     console.log(`Imprimindo: ${txt}`);
// }

// funcaoComParametro("Imprimindo algo.");
// funcaoComParametro("Outra função.");

// Aula 2 - return
// const a = 10;
// const b = 20;
// const c = 30;
// const d = 40;

// function soma(n1, n2) {
//     return n1 + n2;
// } // usado, nornalmente, quando é necessário utilizar e reutilizar o valor que foi processado dentro da função.

// const resultado = soma(a, b);

// console.log(resultado);
// console.log(soma(c, d));

// Aula 3 - escopo da função
// let y = 45;

// function testandoEscopo() {
//     let y = 20;
//     console.log(`Y dentro da função é ${y}.`);
// }

// testandoEscopo();

// console.log(`Y fora da função é ${y}.`);

// testandoEscopo();

// Aula 4 - escopo aninhado
// let m = 10;

// function escopoAninhado() {
//     let m = 20;

//     if(true) {
//         let m = 30;

//         if(true) {
//             let m = 40;

//             console.log(m);
//         }

//         console.log(m);
//     }
//     console.log(m);
// }

// escopoAninhado();

// console.log(m);

// Aula 5 - arrow function
// const testearrow = () => {
//   console.log("Está é uma arrow function.");
// };

// testearrow();

// const parouImpar = (n) => {
//   if (n % 2 === 0) {
//     console.log("Par.");
//     return;
//   }

//   console.log("Ímpar.");
// };

// parouImpar(5);

// parouImpar(10);

// Aula 6 - mais sobre arrow function
// const raizQuadrada = (x) => {
//   return x * x;
// };

// console.log(raizQuadrada(4));

// const raizQuadrada2 = (x) => x * x;
// console.log(raizQuadrada2(5));
// console.log(raizQuadrada2(12));

// const helloWorld = () => console.log("Hello World!");
// helloWorld();

// Aula 7 - argumentos opcionais
// const multiplication = function (m, n) {
//   if (n === undefined) {
//     return m * 2;
//   } else {
//     return m * n;
//   }
// };

// console.log(multiplication(5));
// console.log(multiplication(2, 4));

// const greeting = (name) => {
//   if (!name) {
//     console.log("Olá!");
//     return;
//   }

//   console.log(`Olá, ${name}!`);
// };

// greeting();
// greeting("Khoi");

// Aula 8 - default
// const customGreeting = (name, greet = "Olá") => {
//   return `${greet}, ${name}!`;
// };

// console.log(customGreeting("Khoi"));
// console.log(customGreeting("Khoi", "Bom dia"));

// const repeatText = (text, repeat = 2) => {
//   for (let i = 0; i < repeat; i++) {
//     console.log(text);
//   }
// };

// repeatText("Testando.")
// repeatText("5 vezes.", 5)