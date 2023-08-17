// Задача 1

// Создайте IIFE (функцию немедленного вызова), которая будет
// принимать три числа и выводить сумму их квадратов в консоль при вызове.

((num1, num2, num3) => {
  const sum = num1 ** 2 + num2 ** 2 + num3 ** 2;
  console.log(sum);
})(2, 3, 4);

// ----------------------------------------------------

// Задача 2

// Создайте IIFE (функцию немедленного вызова), которая будет принимать два
// числа и выводить их произведение в консоль при вызове.

((num1, num2) => {
  console.log(num1 * num2);
})(5, 7);

// ----------------------------------------------------

// Задача 3

// Напишите функцию-генератор, которая будет генерировать все
// числа от 1 до N включительно, где N - число, переданное в
// качестве аргумента.

function* generateNumbers(N) {
  for (let i = 1; i <= N; i++) {
    yield i;
  }
}

// ----------------------------------------------------

// Задача 4

// Создайте функцию-генератор, которая будет принимать число num и
// генерировать только нечётные числа из промежутка от 1 до num.

function* generateOddNumbers(num) {
  for (let i = 1; i <= num; i += 2) {
    yield i;
  }
}

// ----------------------------------------------------