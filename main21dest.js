// Задача 1

// Создайте объект, представляющий информацию о пользователе в виде
// {имя, возраст, город}. Используя деструктуризацию, извлеките значения
// из объекта и присвойте их переменным с соответствующими именами. Выведи
// эти значения на экран.

const user = {
  name: "Адриан",
  age: 26,
  city: "Брест",
};

const { name, age, city } = user;

console.log(`Имя: ${name}`);
console.log(`Возраст: ${age}`);
console.log(`Город: ${city}`);

//--------------------------------------------------------------------

// Задача 2

// Напишите функцию getFullName, которая принимает объект с информацией
// о пользователе в виде {имя, фамилия}. Используя деструктуризацию,
// извлеки значения имя и фамилия из объекта и объедини их в одну строку
// в формате "Имя Фамилия". Верните полученную строку из функции.

const user = {
  firstName: "Адриан",
  secondName: "Дмитрук",
};

const getFullName = (obj) => {
  const { firstName, secondName } = obj;
  return `${firstName} ${secondName}`;
};

console.log(getFullName(user));

//--------------------------------------------------------------------

// Задача 3

// Создайте массив, содержащий информацию о книге в следующем формате:
// [название, автор, год издания]. Используя деструктуризацию, извлеките
// значения из массива и присвойте их переменным с соответствующими именами.
// Выведите эти значения на экран.

const book = ["Мастер и Маргарита", "Михаил Булгаков", 1967];

const [title, author, year] = book;

console.log(`Название: ${title}`);
console.log(`Автор: ${author}`);
console.log(`Год издания: ${year}`);
