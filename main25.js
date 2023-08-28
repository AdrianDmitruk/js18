// Лёгкий уровень

// Задача 1

// Создайте функцию mapAsync, которая принимает массив и колбэк-функцию,
// а возвращает промис, который разрешается в новый массив, содержащий
// результаты асинхронных операций, выполненных с помощью переданного
// колбэка.

const arr = [1, 2, 3, 4, 5];

const mapAsync = async (array, cb) => {
  const results = [];

  await Promise.all(
    array.map(async (item) => {
      const result = await cb(item);
      results.push(result);
    })
  );

  return results;
};

const asyncOperation = async (item) => {
  return item * 2;
};

mapAsync(arr, asyncOperation).then((res) => {
  console.log(res);
});

//----------------------------------------------

// Задача 2

// Напишите функцию forEachAsync, которая принимает массив и
// колбэк-функцию. Функция должна вызывать переданный колбэк для
// каждого элемента массива асинхронно.

const arr = [1, 2, 3, 4, 5];

const forEachAsync = async (array, callback) => {
  await Promise.all(
    array.map(async (item) => {
      await callback(item);
    })
  );
};

//----------------------------------------------

// Задача 3

// Напишите функцию getRandomBoolean, которая возвращает промис,
// разрешающийся случайным булевым значением (true/false) через заданное
// количество миллисекунд. Используйте setTimeout для задержки разрешения
// промиса.

const getRandomBoolean = (delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const random = Math.random() < 0.5;
      resolve(random);
    }, delay);
  });
};

getRandomBoolean(1000).then((result) => {
  console.log(result);
});

//----------------------------------------------

// Средний уровень

// Задача 1

// Напишите функцию parallel, которая принимает массив функций-колбэков
// и вызывает их одновременно. Функция должна возвращать промис, который
// разрешается в массив результатов асинхронных операций, выполненных с
// помощью переданных колбэков.

const parallel = (cb) => {
  const result = cb.map((callback) => callback());

  return Promise.all(result);
};

const func1 = async () => {
  return 1;
};

const func2 = async () => {
  return 2;
};

const asyncFunctions = [func1, func2];

parallel(asyncFunctions).then((results) => {
  console.log(results);
});

//----------------------------------------------

// Задача 2

// Напиши функцию timeout, которая принимает асинхронную функцию
// и время ожидания в миллисекундах. Если асинхронная функция не
// завершится в течение указанного времени, то функция timeout должна
// прервать выполнение и вернуть ошибку.

const timeout = (asyncFunction, time) => {
  return Promise.race([
    asyncFunction(),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), time)
    ),
  ]);
};

const asyncFunction = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return "OK";
};

timeout(asyncFunction, 1500)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });

//----------------------------------------------

// Задача 3

// Напиши функцию checkPrimeNumber, которая принимает число n возвращает
// промис, разрешающийся с булевым значением, указывающим, является ли
// число n простым числом. Используйте цикл и асинхронный await для проверки
// числа на простоту.

const checkPrimeNumber = async (n) => {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    await new Promise((resolve) => setTimeout(resolve, 0));

    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

checkPrimeNumber(18).then((isPrime) => {
  if (isPrime) {
    console.log(`Простое число`);
  } else {
    console.log(`Не простое число`);
  }
});

//----------------------------------------------

// Лёгкий уровень

// Задача 1

// Реализуйте функцию reduceAsync, которая принимает массив, начальное
// значение аккумулятора и колбэк функцию, и возвращает промис, который
// разрешается в конечное значение аккумулятора после асинхронного
// применения колбэка ко всем элементам массива.

const arr = [1, 2, 3, 4, 5];

const reduceAsync = async (array, initialValue, callback) => {
  let accumulator = initialValue;

  for (const item of array) {
    accumulator = await callback(accumulator, item);
  }

  return accumulator;
};

const asyncReducer = async (accumulator, item) => {
  return accumulator + item;
};

reduceAsync(arr, 0, asyncReducer).then((result) => {
  console.log(result);
});
