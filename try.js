// Задача 1

// Напишите пример кода к ситуации: необходимо выполнить что-то в любом случае, независимо от результата выполнения try-catch.

try {
  console.log("Результат");
} catch (error) {
  console.error("Ошибка");
} finally {
  console.log("Код выполнится в любом случае.");
}

// ------------------------------------------

// Задача 2

// Создайте собственную ошибку. Вы можете использовать любой тип и текст ошибки.

const customError = (message) => {
  const error = new Error(message || "Моя ошибка");
  error.name = "CustomError";
  return error;
};

// ------------------------------------------

// Задача 3

// Напишите пример кода к ситуации: если неизвестно, как обработать ошибку, то она пробрасывается.

const divide = (a, b) => {
  try {
    if (b === 0) {
      throw new Error("Делить на ноль нельзя");
    }
    console.log("Результат:", a / b);
  } catch (error) {
    throw error;
  }
};

try {
  divide(10, 0);
} catch (error) {
  console.error("Произошла ошибка:", error.message);
}
