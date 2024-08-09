// Aula 01 - variáveis
// let nome = 'Matheus';
// console.log(nome);

// nome = 'Maria';
// console.log(nome);
// com o let é possível mudar a variável do inicio ao fim do programa.

// const idade = 44;
// console.log(idade);
// com o const não é possível mudar a variável do inicio ao fim do programa, 
// logo que vc declara ela como CONSTante.

// Aula 02 - Mais sobre variáveis
// let 2teste = 'inválido';
// let @teste = 'inválido';
// let a = 10, b = 20, c = 30;
// console.log(a, b, c);

// const nomecompleto = 'Khoi';

// const nomeCompleto = 'Meriel';

// console.log(nomecompleto);
// console.log(nomeCompleto);

// let _test = 'ok';
// let $test = 'ok';
// console.log(_test, $test);

// Aula 03 - Prompt
// const age = prompt("Digite a sua idade:"); //semelhante ao input() do python.
// console.log(`Você tem ${age} anos.`);

// Aula 04 - Alert
// alert("Testando.");

// const z = 10
// alert(`O número é ${z}.`)

// Aula 05 - Math
// console.log(Math.max(5, 2, 1, 10));

// console.log(Math.floor(5.14)); arredonda pra baixo

// console.log(Math.ceil(5.14)); arredonda pra cima

// Aula 06 - Console
// console.log("Teste!");

// console.error("Erro.");

// console.warn("Aviso!");

// Aula 07 - if
// const m = 10;
// if(m > 5) {
//     console.log("M é maior que 5!");
// }

// const user = "João";
// if(user == "João") { // para assegurar que seja "João", coloque mais um = 
//     console.log("Seu nome é João.");
// }

// Aula 08 - else
// const loggedIn = false;
// if(loggedIn === true) {
//     console.log("Está autenticado.");
// }

// else {
//     console.log("Não está autenticado.");
// }

// const x = 10;
// const y = 15;
// if(x > 10 && w > 20) {
// // True  AND  False
//     console.log("Números mais altos.");
// }

// else {
//     console.log("Números não são altos.");
// }

// Aula 09 - else if
// if(1 > 2) {
//     console.log("Um é maior que dois.");
// }
// else if(2 > 3) {
//     console.log("Dois é maior que três.");
// }
// else if(3 === 3) {
//     console.log("Três é igual a três.")
// }

// const userName = "Matheus";
// const userAge = 45;
// if(userName === "José") {
//     console.log("Bem-vindo José.");
// }
// else if(userName === "Matheus") {
//     console.log("Bem-vindo Matheus.")
//     console.log(`Você tem ${userAge} anos.`)
// }

// else{
//     console.log("Inválido.")
// }

// Aula 10 - while
// let p = 0 // incrementador

// while(p < 5) {
//     console.log(p);
//     // p = p + 1
//     p += 1; // somando o incrementador
// }

// Aula 11 - do while
// let o = 10;

// do {
//     console.log(o);
//     o--;
// } while(0 > 1);

// Aula 12 - for
// for(let t = 0; t < 10; t++) {
//     // variável de referência; a condição; incrementador
//     console.log("Repetindo algo 10x.");
// }

// let r = 10;
// for(r; r > 0; r -= 1) {
//     console.log(r);
// }

// Aula 13 - identação
// for(u = 0; u < 10; u++) {
//     if(u * 2 > 10) {
//         console.log("Maior que 10.")
//     }
//     else {
//         if(u / 2 === 0) {
//             console.log("Deu 0.")
//         }
//     }
// }
// Importante a utilização do tab para a organizar e limpeza do código.

// Aula 14 - forçando o loop (break)
// for(let g = 20; g > 10; g--) {
//     console.log(`O valor de g é: ${g}`);

//     if(g === 12) {
//         console.log("Para!");
//         break;
//     }
// }

// Aula 15 - continue
// for(let s = 1; s < 10; s += 1) {
//     // operador de resto = %
//     if(s % 2 === 0) {
//         console.log("O número é par!");
//         continue
//     }

//     console.log(s);
// }

// Aula 16 - switch
// const job = "Adovagado";

// switch(job) {
//     // avaliar a variável
//     case "Programador":
//     // qual valor preciso comparar com o valor passado ao `switch`
//     // e o que o `case` vai executar
//         console.log("Você é um programador!");
//         break;
//     case "Adovagado":
//         console.log("Você é um Advogado!");
//         break;
//         // finalizar a instrução/bloco
//     case "Engenheiro civil":
//         console.log("Você é Engenheiro Civil!");
//         break;
//     default:
//         // semelhante ao else
//         console.log("Profissão não encontrada.");
// }