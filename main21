// Задача 1

// Создайте объект, представляющий информацию о планетах солнечной
// системы в следующем формате: {название, диаметр, расстояние}.
// Используя цикл, переберите свойства объекта и выведите информацию
// о каждой планете на экран.

const solarSystem = {
  mercury: { name: "Меркурий", diameter: 4879, distance: 57.91 },
  venus: { name: "Венера", diameter: 12104, distance: 108.2 },
  earth: { name: "Земля", diameter: 12742, distance: 149.6 },
  mars: { name: "Марс", diameter: 6779, distance: 227.9 },
  jupiter: { name: "Юпитер", diameter: 139820, distance: 778.5 },
};

for (const key in solarSystem) {
  console.log(`Планета: ${solarSystem[key].name}`);
  console.log(`Диаметр: ${solarSystem[key].diameter} км`);
  console.log(`Расстояние от Солнца: ${solarSystem[key].distance} млн км`);
}

//--------------------------------------------------------------------

// Задача 2

// Создайте объект, представляющий информацию о книге в следующем формате:
// {название, автор, год}. Добавьте новое свойство "жанр" и присвойте ему
// значение. Затем измените значение свойства "год".

const book = {
  title: "Война и мир",
  author: "Лев Толстой",
  year: 1869,
};

book.genre = "Драмма";

book.year = 2022;

console.log(book.title);
console.log(book.author);
console.log(book.year);
console.log(book.genre);

//--------------------------------------------------------------------

// Задача 3

// Создайте объект, представляющий информацию о покупке в интернет-магазине в
// следующем формате: {название, цена, количество}. Проверьте, есть ли у
// объекта свойство "скидка" и выведи соответствующее сообщение на экран.

const item = {
  name: "Ноутбук",
  price: 1000,
  quantity: 2,
};

if ("discount" in item) {
  console.log("Есть скидка");
} else {
  console.log("Нет скидки.");
}

//--------------------------------------------------------------------

// Задача 4

// Напишите функцию calculateTotal, которая принимает объект, представляющий
// информацию о товаре в следующем формате: {название, цена, количество}.
// Функция должна вычислить общую стоимость товара (цена * количество) и вернуть её.

const product = {
  name: "Телефон",
  price: 20,
  quantity: 3,
};

const calculateTotal = (product) => product.price * product.quantity;

console.log(calculateTotal(product));

//--------------------------------------------------------------------

// Задача 5*

// Создайте объект, представляющий статистику посещений веб-сайта, в следующем
// формате: {посетители, просмотры}.
// Пример объекта (советуем не повторять точь-в-точь для понимания):

let obj = {
  movies: {
    guests: 500,
    views: 200,
  },
  pictures: {
    guests: 200,
    views: 50,
  },
};

const calculateTotal = (stats, days) => {
  let totalGuests = 0;
  let totalViews = 0;

  for (let key in stats) {
    totalGuests += stats[key].guests;
    totalViews += stats[key].views * days;
  }

  return { totalGuests, totalViews };
};

const result = calculateTotal(obj, 3);
console.log(`Посетители: ${result.totalGuests}`);
console.log(`Просмотры: ${result.totalViews}`);

//--------------------------------------------------------------------

// Задача 6*

// Создайте объект, представляющий данные о продажах в разных регионах,
// в следующем формате: {регион1, регион2, ...}. Каждый регион должен
// содержать информацию о названии и общей сумме продаж. Напишите
// функцию, которая преобразует данные о продажах в процентное
// соотношение от общей суммы и возвращает новый объект с
// обновлёнными данными.

let salesData = {
  region1: {
    name: "Регион 1",
    totalSales: 130,
  },
  region2: {
    name: "Регион 2",
    totalSales: 150,
  },
  region3: {
    name: "Регион 3",
    totalSales: 111,
  },
};

const calculateSales = (salesData) => {
  const totalSales = Object.values(salesData).reduce((item, region) => {
    return item + region.totalSales;
  }, 0);

  const result = {};
  for (let key in salesData) {
    const region = salesData[key];
    const salesPercentage = (region.totalSales / totalSales) * 100;
    result[key] = {
      name: region.name,
      totalSales: region.totalSales,
      salesPercentage: salesPercentage.toFixed(2),
    };
  }

  return result;
};

console.log(calculateSales(salesData));

//--------------------------------------------------------------------

