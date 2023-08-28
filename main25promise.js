// Задание 1. Проверить доступность нескольких ресурсов
// Описание: Есть список URL-адресов ресурсов, нужно проверить их
// доступность, отправив HEAD-запрос на каждый из них. Используйте
// Promise.all, чтобы выполнить все HEAD-запросы параллельно и получить
// результаты.

const urls = [
  "https://www.google.com",
  "https://www.twitch.tv/",
  "https://github.com/",
];

Promise.all(
  urls.map(async (url) => {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  })
)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });

// --------------------------------------------------------------

// Задание 2. Ограничение времени выполнения асинхронной операции
// Описание: Есть асинхронная операция, и нужно ограничить максимальное время
// ее выполнения. Используйте Promise.race, чтобы выполнить операцию и отменить
// её, если она занимает слишком много времени

const timeout = (ms) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Ошибка"));
    }, ms);
  });
};

const asyncOperation = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return "Операция завершена";
};

Promise.race([asyncOperation(), timeout(1500)])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
