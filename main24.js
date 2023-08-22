// Лёгкий уровень

// Задача 1

// Напишите функцию, которая выводит текущее время в
// формате "часы:минуты:секунды".

const getTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

console.log(getTime());

//------------------------------------------------------------

// Задача 2

// Напишите функцию, которая принимает две даты в формате "день.месяц.год"
// и возвращает разницу между ними в днях.

const getDays = (dateFirst, dateSecond) => {
  const [dayFirst, monthFirst, yearFirst] = dateFirst.split(".").map(Number);
  const [daySecond, monthSecond, yearSecond] = dateSecond
    .split(".")
    .map(Number);

  const timeDifference = Math.abs(
    Date.UTC(yearSecond, monthSecond - 1, daySecond) -
      Date.UTC(yearFirst, monthFirst - 1, dayFirst)
  );
  const result = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return result;
};

console.log(getDays("20.08.2023", "28.08.2023"));

//------------------------------------------------------------

// Задача 3

// Напишите функцию, которая принимает массив чисел и возвращает
// минимальное значение из этого массива, используя методы объекта Math.

const findMinNumber = (arr) => Math.min(...arr);

console.log(findMinNumber([2, 4, 6, 7, 1]));

//------------------------------------------------------------

// Средний уровень

// Задача 1

// Напишите функцию, которая принимает дату в формате "день.месяц.год" и
// возвращает её в формате "год-месяц-день".

const formatDate = (date) => {
  const [day, month, year] = date.split(".");
  return `${year}-${month}-${day}`;
};

console.log(formatDate("23.03.2023"));

//------------------------------------------------------------

// Задача 2

// Напишите функцию, которая генерирует случайное число с плавающей точкой
// в заданном диапазоне, используя методы объекта Math.

const randomFloat = (min, max) => Math.random() * (max - min) + min;

console.log(randomFloat(2, 6.4));

//------------------------------------------------------------

// Сложный уровень

// Задача 1

// Напишите функцию, которая принимает радиус окружности и возвращает её длину,
// используя значение числа Пи из объекта Math.

const calculateLength = (radius) => 2 * Math.PI * radius;

console.log(calculateLength(7));

//------------------------------------------------------------

// Лёгкий уровень

// Задача 1

// Напишите функцию, которая возвращает значение числа e, используя
// свойства объекта Math.

const getE = () => Math.E;

console.log(getE());

//------------------------------------------------------------

// Задача 2

// Напишите функцию, которая принимает число с плавающей точкой и округляет
// его вниз до ближайшего меньшего целого числа, используя
// методы объекта Math.

const floorNumber = (number) => Math.floor(number);

//------------------------------------------------------------

// Средний уровень

// Задача 1

// Напишите функцию, которая принимает дату в формате "день.месяц.год" и
// проверяет, является ли эта дата корректной

const isValidDate = (dateStr) => {
  const item = dateStr.split(".");
  if (item.length !== 3) {
    return false;
  }

  const day = parseInt(item[0], 10);
  const month = parseInt(item[1], 10);
  const year = parseInt(item[2], 10);

  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
};

console.log(isValidDate("23.08.2023"));

//------------------------------------------------------------

// Задача 2

// Напишите функцию, которая принимает дату в формате "день.месяц.год" и
// добавляет к ней определенное количество лет.

const addYears = (dateStr, yearsToAdd) => {
  const [day, month, year] = dateStr.split(".").map(Number);
  const newYear = year + yearsToAdd;

  const date = new Date(newYear, month - 1, day);

  const newDay = date.getDate();
  const newMonth = date.getMonth() + 1;

  return `${newDay < 10 ? "0" : ""}${newDay}.${
    newMonth < 10 ? "0" : ""
  }${newMonth}.${newYear}`;
};

console.log(addYears("01.01.2022", 3));

//------------------------------------------------------------

// Задача 3

// Напишите функцию, которая принимает угол в радианах и возвращает
// косинус этого угла, используя методы объекта Math.

const calculateCosine = (radians) => Math.cos(radians);

//------------------------------------------------------------

// Сложный уровень

// Задача 1

// Напишите функцию, которая принимает строку математического выражения
// (например, "2 + 3 * 5 - 8 / 2") и вычисляет его значение, используя
// методы объекта Math. Учтите приоритет операций и правила ассоциативности.

const сalculation = (str) => eval(str);

console.log(сalculation("2 + 3 * 5 - 8 / 2"));
