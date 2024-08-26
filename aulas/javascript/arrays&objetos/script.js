// aula 1 - arrays
// const lista = [1, 2, 3, 4, 5]

// console.log(lista)

// console.log(typeof(lista))

// const itens = ["Nomes", true, 2, 4.12, []] // pode ter vários tipos de dados

// console.log(itens)

// OBS:
const arr = ["a", "b", "c"]; // 0 based
//            0    1    2

console.log(arr[0]); // -> saída: a

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
