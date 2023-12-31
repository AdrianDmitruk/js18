// Задача на метки и break

// Создайте два вложенных цикла for для прохода по двум числовым последовательностям.
// Используй метку для цикла for и директиву break, чтобы прервать выполнение
// внешнего цикла, когда внутренний цикл достигнет определенного значения.
// Выведите результаты в консоль.

outerLoop: for (let i = 1; i <= 5; i++) {
  console.log(`Внешний цикл ${i}`);

  for (let j = 1; j <= 3; j++) {
    console.log(` Внутренний цикл ${j}`);

    if (i === 3 && j === 2) {
      console.log(" Прерываем внешний");
      break outerLoop;
    }
  }
}

//----------------------------------------------------------

// Задача на метки и continue

// Создайте два вложенных цикла while для прохода по двум числовым последовательностям.
// Используй метку для цикла while и директиву continue, чтобы пропустить
// итерацию внешнего цикла, когда внутренний цикл достигнет определенного условия.
// Выведите результаты в консоль.

let i = 1;

outerLoop: while (i <= 3) {
  console.log(`Внешний цикл ${i}`);

  let j = 1;
  while (j <= 5) {
    console.log(` Внутренний цикл ${j}`);
    if (i === 2 && j === 3) {
      console.log(" Пропуск внешнего цикла");
      i++;
      continue outerLoop;
    }
    j++;
  }
  i++;
}

//----------------------------------------------------------

// Задача на комбинирование обеих директив и меток

// Создайте трехуровневый цикл (for, while или do-while).
// Используйте метки, чтобы управлять потоком выполнения циклов.
// Вставьте директивы break и continue внутри циклов, чтобы прервать
// выполнение цикла или пропустить итерацию в зависимости от определенных условий.
// Выведите результаты в консоль.

outerLoop: for (let i = 1; i <= 3; i++) {
  console.log(`Первый цикл ${i}`);

  let j = 1;
  while (j <= 3) {
    console.log(` Второй цикл ${j}`);
    let k = 1;
    do {
      console.log(`  Третий цикл ${k}`);

      if (i === 2 && j === 2 && k === 2) {
        console.log(" Пропуск второго цикла");
        j++;
        continue;
      }
      if (i === 3 && j === 2 && k === 2) {
        console.log("Прерываем первый цикл");
        break outerLoop;
      }
      k++;
    } while (k <= 3);
    j++;
  }
}
