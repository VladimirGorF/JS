"use strict";

// Задание 2:
// 1. Создайте переменную `num` и присвойте ей значение `123`. Выведите значение этой переменной в консоль.

// const num = 123;
// console.log(num);

// 2. Создайте переменную `а` и присвойте ей значение `5`, переопределите переменную `а` на значение `7`, выведите переменную `а` в консоль.

// let a = 5;
// a = 7;
// console.log(a);

// 3. Создайте переменную `b`. Запишите в нее сумму чисел `1`, `2` и `3`. С помощью функции `console.log` выведите в консоль содержимое переменной `b`.

/*const b = 1 + 2 + 3;
console.log(b);

const PI = 3.14;*/

// 4. Создайте два вида комментариев в вашем коде, добавьте в них произвольный текст.

/*const b = 1 + 2 + 3;
console.log(b);

const PI = 3.14;*/
// Тайминг: 20 минут.

// Задание 3:
// 1. Создайте две переменные, одна будет хранить ваш возраст (девушкам всегда 18), а другая переменная будет хранить текущий год (все созданные переменные должны быть логично названы).
// - Создайте переменную суммы и присвойте сумму чисел из двух переменных.
// - Создайте переменную разности и присвойте разность текущего года и вашего возраста.
// - Создайте переменную произведения и присвойте произведение чисел двух переменных.
// - Создайте переменную частного и присвойте деление чисел текущего года к вашему возрасту.

// const myAge = 42;
// const year = 2023;
// const sum = myAge + year;
// const diff = year - myAge;
// const multiply = myAge * year;
// const div = year / myAge;

// 2. Выведите в консоль все созданные переменные.
// console.log(myAge, year, sum, diff, div, multiply);

// 3. Сложите все созданные переменные и выведите результат в консоль.

// console.log(myAge + year + sum + diff + div + multiply);
// Тайминг: 20 минут.

// Задание 4:
// Не запуская код, определите, что отобразится в консоли:
// `let a = 5 + 5 * 3 + 3;`     //23
// Не запуская код, определите, что отобразится в консоли:
// `let b = 8 / 2 + 2;`    //6
// Не запуская код, определите, что отобразится в консоли:
// `let c = (2 + 3) * (2 + 3);`   //25
// Не запуская код, определите, что отобразится в консоли:
// `let d = (2 + 3) * 2 + 3;`    //13
// Не запуская код, определите, что отобразится в консоли:
// `let e = (2 * 8) / 4;`    //4
// Не запуская код, определите, что отобразится в консоли:
// `let f = 2 * (8 / 4);`     //4
// Тайминг: 20 минут.

// Задание 5:
// 1. Запишите в переменную `a` число `0.1`, а в переменную `b` - число `0.2`. Найдите сумму значений этих переменных и выведите ее на экран.

// const a = 0.1;
// const b = 0.2;
// console.log((a + b));

// const num = 10.546;
// console.log(num);
// console.log(Math.round(num)); // округляет дробную часть
// console.log(Math.floor(num)); // вниз
// console.log(Math.ceil(num)); // вверх
// console.log(Math.trunc(num)); // отбрасывает дробную часть

// console.log(num.toFixed(2)); // округление до 2 знаков после точки, возвращает строку!!!
// console.log(+num.toFixed(2)); // унарный плюс превращает в число
// console.log(Number(num.toFixed(2))); //

// console.log(Math.round(num * 100)/100);

// 2. Создайте переменную `c`, запишите в нее какое-нибудь положительное или отрицательное число. Выведите на экран это число с обратным знаком.
// Тайминг: 5 минут.

// const c = 5;
// console.log(-c);

// Задание 6:
// 1. Создайте строку с вашем именем и строку с вашей фамилией. Выведите эти данные в консоль.

// const firstName = "Vladimir";
// const lastName = "Горбунов";
// console.log(firstName, lastName);

// 2. Создайте переменную с текстом 'java' и переменную с текстом 'script'. С помощью этих переменных и операции конкатенации строк выведите в консоль строку 'javascript'.

// const java = "java";
// const script = "script";
// console.log(java + script);

// 3. Создайте переменную с текстом 'hello' и переменную с текстом 'world'. С помощью этих переменных и операции конкатенации строк выведите в консоль строку 'hello world', желательно использовать бэктики (обратные кавычки).

// const hello = "hello";
// const world = "world";
// console.log(`${hello} ${world}`);

// const a = 4;
// const b = 5;
// if (a > b) {
//   const num = 2;
// } else {
//   const num = 5;
// }

// console.log(num);

// Тайминг: 15 минут.

// Типы данных:

// String
// Number
// Boolean
// undefined   let num;
// null         let num = null;
// Symbol
// BigInt

// Object

// const symbol = Symbol('hello');
// const symbol2 = Symbol('hello');
// console.log(symbol);
// console.log(symbol2);
// console.log(symbol == symbol2);

// console.log(Number.MAX_SAFE_INTEGER);
// const bigInt = 14324324432432324n;

// prompt("Please input your age", 18);
// alert("Please inform alert", 18);
// confirm("Please confirm", 18);
// let a = 5;
// if (a) console.log(a);
// let b = parseInt()

let x = 5;
let y = 7;
// if (x > y) alert("x больше y");
x > y ? alert("x больше y") : alert("x меньше y");
