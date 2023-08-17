// Задача 1
// Создайте пустой Map и добавьте несколько элементов с
// различными ключами и значениями.
// - проверь, содержит ли Map определенный ключ
// - получи значение по ключу из Map
// - удали элемент из Map
// - очисти всю Map

const map = new Map();

map.set("name", "Adrian");
map.set("age", 26);
map.set("city", "Brest");

const hasAge = map.has("age");
console.log(`Ключ: ${hasAge}`);

const age = map.get("age");
console.log(`Значение: ${age}`);

map.delete("city");

map.clear();

console.log(`Пусто?: ${map.size === 0}`);

//--------------------------------------------------------------------

// Задача 2
// Создай пустой Set и добавьте несколько значений.
// - проверьте, содержит ли Set определенное значение
// - удалите значение из Set
// - очистите весь Set

const set = new Set();

set.add(10);
set.add("Egor");
set.add(true);

const hasName = set.has("Egor");
console.log(`Значение name: ${hasName}`);

set.delete(10);
set.clear();

//--------------------------------------------------------------------

// Задача 3

// Создайте Set с несколькими именами животных.
// - используя метод filter(), создай новый Set, содержащий только
// имена животных, начинающиеся с определенной буквы

const animal = new Set(["Lion", "Tiger", "Leopard", "Kangaroo"]);

const filteredAnimal = new Set(
  [...animal].filter((name) => name.startsWith("L"))
);

console.log(filteredAnimal);

//--------------------------------------------------------------------

// Задачи 4

// Создайте Map, где ключами будут имена пользователей, а значениями - их
// любимые фрукты (можно представить в виде Map<string, Set<string>>).
// - добавьте несколько пользователей и их любимые фрукты в Map
// - получите любимые фрукты определенного пользователя
// - проверьте, содержится ли определенный фрукт в списке любимых фруктов пользователя
// - удалите пользователя из Map

const user = new Map();

user.set("Egor", new Set(["apple", "banana"]));
user.set("Alina", new Set(["orange", "grape"]));
user.set("Charlie", new Set(["kiwi", "strawberry"]));

const favoriteEgor = user.get("Egor");
console.log("Фрукты Егора:", favoriteEgor);

const favoriteAlina = user.get("Alina").has("orange");
console.log("Любит апельсин?:", favoriteAlina);

user.delete("Charlie");

console.log(user);

//--------------------------------------------------------------------

// Задачи сложного уровня

// Задача 1
// Есть массив arr = [1, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]. Достаньте из
// него уникальные значения максимально быстрым способом.

arr = [1, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5];

const uniqueValues = new Set(arr);
const result = Array.from(uniqueValues);
console.log(result);

//--------------------------------------------------------------------

// Задача 2

// Создайте функцию, которая принимает строку, представляющую последовательность
// ДНК, и возвращает двумерный массив, где каждая внутренняя подмассива
// представляет собой пару оснований ДНК (нуклеотидов).

// Основание ДНК может быть одним из четырех: "A" (аденин), "T" (тимин),
// "C" (цитозин) и "G" (гуанин). В паре оснований ДНК "A" всегда парное
// "T", а "C" всегда парное "G".

// Например, если дана последовательность ДНК "ATCGA", функция должна
// вернуть следующий массив: [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]].

const dna = (value) => {
  const result = [];

  for (let i = 0; i < value.length; i++) {
    let first = value[i];
    let second = null;

    switch (first) {
      case "A":
        second = "T";
        break;
      case "T":
        second = "A";
        break;
      case "C":
        second = "G";
        break;
      case "G":
        second = "C";
        break;
      default:
        throw new Error("Ошибка");
    }
    result.push([first, second]);
  }
  return result;
};

console.log(dna("ATCGA"));
