// Лёгкий уровень

// Задача

// Создайте класс "Student" с публичными свойствами name, age и major.
// Добавьте метод getInfo, который будет выводить информацию о
// студенте (например, "Имя: John, Возраст: 20, Специальность:
// Информатика") в консоль.

class Student {
  constructor(name, age, major) {
    this.name = name;
    this.age = age;
    this.major = major;
  }

  getInfo() {
    console.log(
      `Имя: ${this.name}, Возраст: ${this.age}, Специальность: ${this.major}`
    );
  }
}

const student = new Student("John", 20, "Информатика");

student.getInfo();

//-------------------------------------------------

// Средний уровень

// Задача 1

// Создайте класс "Shape" с публичным методом getName, который
// возвращает имя фигуры. Затем создайте класс "Rectangle", который
// наследует от "Shape" и добавляет приватные свойства width и height,
// а также публичные методы getArea и getPerimeter. Убедитесь, что
// метод getName доступен из экземпляров класса "Rectangle".

class Shape {
  getName() {
    return "Фигура";
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this._width = width;
    this._height = height;
  }

  getArea() {
    return this._width * this._height;
  }

  getPerimeter() {
    return 2 * (this._width + this._height);
  }
}

const rectangle = new Rectangle(10, 5);

console.log(rectangle.getName());
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());

//-------------------------------------------------

// Задача 2

// Создайте функцию hasProperty(obj, prop), которая проверяет,
// содержит ли объект obj свойство с именем prop. Функция должна
// проверять свойства как самого объекта, так и его прототипов.
// Если свойство присутствует, функция должна вернуть true, иначе
// false. Проверьте работу функции на различных объектах с
// прототипами.

const hasProperty = (obj, prop) => {
  if (obj.hasOwnProperty(prop)) {
    return true;
  }

  const proto = Object.getPrototypeOf(obj);

  if (!proto || proto === null) {
    return false;
  }
  return hasProperty(proto, prop);
};

//-------------------------------------------------

// Лёгкий уровень

// Задача 1

// Требуется создать объект Person с прототипом Human. У Human
// должен быть метод greet(), который выводит приветствие в консоль.
// Создайте новый объект person на основе прототипа Person и
// вызови метод greet().

const Human = {
  greet() {
    console.log("Привет");
  },
};

const person = Object.create(Human);

person.greet();

//-------------------------------------------------

// Задача 2

// Создайте класс "Car" с публичными свойствами make, model и
// year. Добавьте методы start и stop, которые будут выводить
// соответствующие сообщения в консоль. Затем создайте экземпляр
// класса "Car" и вызовите методы start и stop.

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`Старт ${this.year} ${this.make} ${this.model}`);
  }

  stop() {
    console.log(`Стоп ${this.year} ${this.make} ${this.model}`);
  }
}

const car = new Car("Audi", "a7", 2020);

car.start();
car.stop();

//-------------------------------------------------

// Средний уровень

// Задача 1

// Создайте класс "MathUtils" со статическим методом sum, который
// будет возвращать сумму всех переданных аргументов. Добавьте
// статическое свойство PI, которое будет содержать значение
// числа π. Продемонстрируйте использование метода sum и
// свойства PI.

class MathUtils {
  static sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  }

  static PI = Math.PI;
}

console.log(MathUtils.sum(3, 4, 22, 34));

console.log(MathUtils.PI);

//-------------------------------------------------

// Задача 2

// Создайте объект-прототип Animal с методом speak(), который
// выводит звук животного в консоль. Создайте объект-прототип
// Cat, который наследует прототип Animal и имеет свойство sound,
// содержащее звук "Мяу". Создайте новый объект cat на основе
// прототипа Cat и вызовите метод speak().

class Animal {
  speak() {
    console.log("Звук животного");
  }
}

class Cat extends Animal {
  constructor() {
    super();
    this.sound = "Мяу";
  }
}

const cat = new Cat();
cat.speak();

console.log(cat.sound);
