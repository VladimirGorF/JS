// Задание 1:

// 1. Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна
// вывести в консоль строку:
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."

// function personalInformation(userFirstName, userSecondName, userAge) {
//   console.log(
//     `Привет, ${userFirstName} ${userSecondName}. Вы уже большой, вам ${userAge}.`
//   );
// }

// personalInformation('Nikolay', 'Semenov', 25);

// 2. Создайте функцию, которая принимает число, а возвращает квадрат переданного
// ей числа.

// const square = (number) => Math.pow(number, 2);

// const square = (number) => number ** 2;

// console.log(square(8));

// const square = (number) => {
//    return number ** 2;
// };

// 3. Создайте функцию, которая принимает число.
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.

// Тайминг: 20 минут.

// function fn(number) {
//   if (!Number.isFinite(number)) {
//     return;
//   }
//   if (number > 0) {
//     console.log("+++");
//   } else if (number < 0) {
//     console.log("---");
//   }
// }

// fn(-4);
// fn(5);
// fn(0);
// fn(NaN);
// fn(Infinity);
// fn("45");
// fn('gvtrdgvtdr');

// console.log((function(){alert('Privet')})());

// Задание 2:
// 1. Создайте функцию, которая параметрами принимает 3 числа и выводит в
// консоль сумму этих чисел.
// Создайте три переменные, со случайными значениями и продемонстрируйте работу
// данной функции.

// function sum(num1, num2, num3) {
//   console.log(num1 + num2 + num3);
// }
// const num1 = 3;
// const num2 = 5;
// const num3 = 12;

// sum(num1, num2, num3);

// 3. Дан код:

// ```
// func(2);
// func(3);
// func();

// function func(num = 5) {
//   console.log(num * num);
// }
// ```

// Расскажите, каким будет результат каждого из вызовов функции.

// Тайминг: 20 минут.

// Задание 3:

// 1. Создайте функцию, которая принимает число, а возвращает квадратный корень
// переданного числа.
// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную
// сумму в консоль.

// function sqrt(number){
//     return Math.sqrt(number); // number**0.5
// }

// console.log(sqrt(3)+sqrt(4));

// 2. Создайте функцию, которая находит минимальное число из 2х переданных
// аргументов функции и вернет найденное значение.

// Тайминг: 20 минут.

// function min(num1, num2) {
//   //   return Math.min(num1, num2);
//  return num1 < num2 ? num1 : num2;
// }

// console.log(min(8, 7));

// Задание 4:

// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает
// день недели на русском языке.

// function day(number) {
//   //   if (number < 1 || number > 7 || !Number.isInteger(number)) {
//   //     return 'Вы ввели неверное значение!';
//   //   }
//   switch (number) {
//     case 1:
//       return "Понедельник";
//     case 2:
//       return "Вторник";
//     case 3:
//       return "Среда";
//     case 4:
//       return "Четверг";
//     case 5:
//       return "Пятница";
//     case 6:
//       return "Суббота";
//     case 7:
//       return "Воскресение";
//     default:
//       return "Вы ввели неверное значение!";
//   }
// }

// const userDay = Number(prompt("Введите целое число от 1 до 7"));
// console.log(day(userDay));

// 2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в
// зависимости от времени суток (утро, день, вечер, ночь), например:
// "Добрый день, Иван." или "Доброй ночи, Иван.".

// Тайминг: 30 минут.

// function hello(userName) {
//   const date = new Date();
//   const hours = date.getHours();

//   if (hours <= 6) {
//     console.log(`Доброй ночи ${userName}`);
//   } else if (hours <= 12) {
//     console.log(`Доброе утро ${userName}`);
//   } else if (hours <= 18) {
//     console.log(`Добрый день ${userName}`);
//   } else {
//     console.log(`Добрый вечер ${userName}`);
//   }

// }

// hello('Misha');

// /**
//  * функция фозводит число в степень
//  * @param {number} num число
//  * @param {number} degree степень
//  * @returns {number} результат
//  */
// function pow(num, degree) {
//   if (degree === 1) {
//     return num;
//   }
//   return num * pow(num, degree - 1);
// }

// console.log(pow(2, 3));

// const number = 1000;
// console.log(number * 0.2);
