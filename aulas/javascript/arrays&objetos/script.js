// aula 1 - arrays
// const lista = [1, 2, 3, 4, 5]

// console.log(lista)

// console.log(typeof(lista))

// const itens = ["Nomes", true, 2, 4.12, []] // pode ter vários tipos de dados

// console.log(itens)

// OBS:
// const arr = ["a", "b", "c"]; // 0 based
//               0    1    2

// console.log(arr[0]); // -> saída: a

// aula 2 - propriedades
// const numbers = [5, 4, 3];
// console.log(numbers.length);

// console.log(numbers["length"]);

// const myName = "Matheus";
// console.log(myName.length);

// aula 3 - métodos
// const otherNumbers = [1, 2, 3];

// const allNumbers = [4, 5, 6].concat(otherNumbers);

// console.log(allNumbers);

// const text = "algum texto";
// console.log(text.toUpperCase());

// console.log(typeof text.toUpperCase);

// console.log(text.indexOf("g"));

// aula 4 - object literals
// const person = {
//   name: "Matheus",
//   age: 40,
//   job: "programador",
// };

// console.log(person);
// console.log(person.name);
// console.log(person.name.length);

// aula 5 - criando e deletando propriedades
// const car = {
//   engine: 2.0,
//   brand: "W",
//   model: "Tiguan",
//   km: 20000,
// };

// console.log(car);

// car.doors = 4; // adicionando propriedade

// console.log(car);

// delete car.km; // deletando propriedades

// console.log(car);

// aula 6 - mais sobre objetos
// const obj = {
//   a: "teste",
//   b: true,
// };

// console.log(obj instanceof Object);

// const obj2 = {
//   c: [],
// };

// Object.assign(obj2, obj); // Object.assign(segundo objeto, primeiro objeto)
// console.log(obj2);

// // aula 7 - conhecendo melhor os objetos
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));

// console.log(Object.entries(obj2));

// aula 8 - mutação
// const a = {
//   name: "matheus",
// };

// const b = a;

// console.log(a);
// console.log(b);

// console.log(a==b)

// a.age = 31
// console.log(a);
// console.log(b);

// delete b.age
// console.log(a);
// console.log(b);

// 9 - loop em array
// const users = ["Matheus", "João", "Pedro", "Miguel"];

// for (let i = 0; i < users.length; i++) {
//   console.log(`Listando o usuário: ${users[i]}`);
// }

// 10 - push e pop
const array = ["a", "b", "c"];

// array.push("d");

// console.log(array);

// array.pop();

// console.log(array);

// const itemRemovido = array.pop();

// console.log(itemRemovido);

// console.log(array);

// array.push("s", "c", "j");

// console.log(array);

// 11 - shift e unshift
// const letter = array.shift();

// console.log(array);

// array.unshift("f", "w", "p");

// console.log(array);

// 12 - indexOf e lastIndexOf
// const frutas = ["morango", "maça", "abacate", "pera", "laranja"];
// //             [    0         1       2          3         4   ]

// console.log(frutas.indexOf("maça"));
// console.log(frutas.indexOf("abacate"));

// console.log(frutas[2]);
// console.log(frutas[frutas.indexOf("abacate")]);

// console.log(frutas.lastIndexOf("laranja"))

// console.log(frutas.lastIndexOf("uva"))

// 13 - método slice
// const testeSlice = ["a", "b", "c", "d", "e", "f", "g"];

// const subArray = testeSlice.slice(2, 4);

// console.log(testeSlice);
// console.log(subArray);

// const subArray02 = testeSlice.slice(2, 4 + 1);
// console.log(subArray02);

// const soUmIndice = testeSlice.slice(2);
// console.log(soUmIndice);

// 14 - forEach
// const numInt = [1, 2, 3, 4, 5];

// numInt.forEach((numero) => {
//   console.log(`O número é ${numero}`);
// });

// const posts = [
//   { title: "Primeiro post", category: "PHP" },
//   { title: "Segundo post", category: "JS" },
//   { title: "Terceiro post", category: "Python" },
// ];

// posts.forEach((post) => {
//   console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}.`);
// });

// 15 - includes
// const brands = ["BMW", "VW", "Fiat"];

// console.log(brands.includes("Fiat"));
// console.log(brands.includes("Não sei marcas de carro :)"));

// let brands01 = [];
// function addBrand() {
//   let newBRand = prompt("Digite uma marca de carro: ");
//   if (newBRand) {
//     brands01.push(newBRand);
//   }
// }

// addBrand();

// let existeMarca = prompt("Qual marca gostaria de procurar: ");

// if (brands01.includes(existeMarca)) {
//   console.log(`Há carros da marca ${existeMarca} na loja!`);
// } else {
//   console.log("Não há essa marca na loja.");
// }

// 16 - reverse
// const reverseTest = [1, 2, 3, 4, 5];

// reverseTest.reverse();

// console.log(reverseTest);

// 17 - Trim
// const trimTest = " \n   teste de string com espaços   \n";

// console.log(trimTest);

// console.log(trimTest.trim());

// console.log(trimTest.length);
// console.log(trimTest.trim().length);

//  18 - padStart e padEnd

// const testePadStart = "1";

// let newNumber = testePadStart.padStart(4, "0");

// console.log(testePadStart);
// console.log(newNumber);

// const testePadEnd = "1";

// newNumber = testePadEnd.padEnd(4, "0");

// console.log(newNumber);

// 19 - split
// const venda = "Maria Carla, 5, 450.00, 12/09/2006";

// let vendaArray = venda.split(",");

// console.log(vendaArray);

// console.log("Nome: " + vendaArray[0]);
// console.log("Itens Vendidos: " + vendaArray[1] + " itens");
// console.log("R$: " + vendaArray[2]);
// console.log("Data: " + vendaArray[3]);

// 20 - join

// const joinTeste = vendaArray.join(" - ");

// console.log(joinTeste);

// // 21 - repeat

// const palavra = "teste ";

// console.log(palavra.repeat(3));

// 22 - rest operator

// const somaInfinita = (...args) => {
//   let total = 0;

//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }

//   return total;
// };

// console.log(somaInfinita(1, 2, 3));

// console.log(somaInfinita(32, 565, 345, 5654));

// 23 - for off

// const somaInfinita = (...args) => {

//   let total = 0;

//   for (num of args) {
//     total += num;
//   }

//   return total;
// };

// console.log(somaInfinita(1, 2, 3));

// 24 - destructuring em objetos
// const userDetails = {
//     firstName: "João",
//     lastName: "Silva",
//     job: "carniceiro"
// };

// const {firstName, lastName, job} = userDetails;

// console.log(firstName, lastName, job);

// renomear variáveis

// const {firstName: primeiroNome} = userDetails;

// console.log(primeiroNome);
// console.log(firstName);

// 25 - destructuring em arrays
// const myList = ["arroz", "feijão", "macarrão", "carne"];

// const [itemA, itemB, itemC] = myList;

// console.log(itemA, itemB, itemC);

// 26 - JSON
const myJSON =
  '{"name": "Matheus", "age": 31, "job": "programador", "skills": ["PHP", "JS", "Python"]}';

// JSON para objeto e objeto para JSON
const myObject = JSON.parse(myJSON);

console.log(myObject);

console.log(myObject.name);

const myNewJSON = JSON.stringify(myObject);

console.log(myNewJSON);