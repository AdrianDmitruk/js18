// Задача 1

// Дан массив [1, 2, 3, 4, 5]. Сделайте из него массив
// [5, 4, 3, 2, 1] одной командой.
// После чего отфильтруйте массив так, чтобы остались только
// чётные числа. К полученному массиву добавьте массив [2,4].
// Найдите сумму элементов финального массива.

const array = [1, 2, 3, 4, 5];

const result = array
  .reverse()
  .filter((num) => num % 2 === 0)
  .concat([2, 4])
  .reduce((acc, num) => acc + num, 0);

console.log(result);

//--------------------------------------------------------------------

// Задача 2*

// Проверьте, содержит ли массив fruits = ['apple', 'orange', 'banana', 'grape']
// значение banana.

fruits = ["apple", "orange", "banana", "grape"];

const result = fruits.includes("banana");

console.log(result);

//--------------------------------------------------------------------

// Задача 3*

// Сделайте из массива numbers = [1, 1, 1, 2, 2, 3, 4, 4, 4, 3, 9, 5, 9, 5]
// массив уникальных значений с помощью filter

const numbers = [1, 1, 1, 2, 2, 3, 4, 4, 4, 3, 9, 5, 9, 5];

const uniqueNumbers = numbers.filter(
  (elem, index, arr) => arr.indexOf(elem) === index
);

console.log(uniqueNumbers);

//--------------------------------------------------------------------

// Задача 4**

// Реализуйте функцию, которая преобразует двумерный массив (матрицу) в
// одномерный массив без метода flat.

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrix = (arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result.push(arr[i][j]);
    }
  }

  return result;
};

console.log(matrix(array));

//--------------------------------------------------------------------

// Задача 5**

// Реализуйте функцию, которая принимает два массива чисел и возвращает
// новый массив, содержащий элементы, которые есть только в одном из
// массивов. (Дано: [1,2,3,4],[1,5,6,3]; Результат :[2,4,5,6])

const array1 = [1, 2, 3, 4];
const array2 = [1, 5, 6, 3];

const uniqueElements = (arr1, arr2) => {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i]) && !result.includes(arr2[i])) {
      result.push(arr2[i]);
    }
  }

  return result;
};

console.log(uniqueElements(array1, array2));
