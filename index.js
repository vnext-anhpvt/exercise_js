//bai1
// const array = [1, 2, 3, 4];
// const index = array.indexOf(3);
// if (index > -1) {
//   array.splice(index, 1);
// }
// console.log(array);


///bai2
// const add = function(one, two) {
// 	return one + two
// };

// const subtract = function(one, two) {
// 	return one-two
// };

// const sum = function(one, two) {
// 	return one + two
// };

// const multiply = function(one, two)  {
//     return one * two
// };

// const power = function(one, two)  {
// 	return  one / two
// };

// const factorial = function(one)  {
//     let giai_thua = 1;
//     for (let i = 1; i <= one; i++)
//         giai_thua *= i;
//     return giai_thua
// };

// console.log(factorial(3))


//bai 3
// var i;
// var fib = [1,2,3,4,56,6]; // Initialize array!

// fib[0] = 0;
// fib[1] = 1;
// const fibonacci = function(num){
//   let a, b, temp
//   a = 0
//   b = 1
//   temp = b
//   for( let i=0; i<num; i++)
//   {
//     // fib[i] = fib[i - 2] + fib[i - 1];
//     document.write(temp+"<br>")
//     temp = a + b
//     a = b
//     b = temp
//   }
// }
// console.log(fibonacci(4))


//bai4
// const people = [{
//     name: 'Carly',
//     yearOfBirth: 1942,
//     yearOfDeath: 1970,
//   },
//   {
//     name: 'Ray',
//     yearOfBirth: 1962,
//     yearOfDeath: 2011
//   },
//   {
//     name: 'Jane',
//     yearOfBirth: 1912,
//     yearOfDeath: 1941
//   },
// ]
// let age = people.map((index)=> {
//     return (index.yearOfDeath - index.yearOfBirth)
// })
// const a = people.filter((index)=> {
//     return ((index.yearOfDeath - index.yearOfBirth) == Math.max(...age))
// })
// console.log(age)
// console.log(a)

// //bai5

const toSnakeCase = str => str.match(/[A-Z][a-z]{1,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.toLowerCase()).join('_')
    console.log(toSnakeCase('SnAkE..CaSe..Is..AwEsOmE'));

const SnakeCase = str => str.toLowerCase().match(/[A-Z][a-z]{1,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).join('_')
    console.log(SnakeCase('SnAkE..CaSe..Is..AwEsOmE'));