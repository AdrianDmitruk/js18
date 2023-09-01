// Задача на примеси

// Создайте примесь "LoggerMixin", которая добавляет функциональность
// логирования в классы. При каждом вызове метода класса должно
// выводиться сообщение с названием метода и переданными аргументами.

const LoggerMixin = {
  log(methodName, ...args) {
    console.log(methodName);
    console.log(args.join(", "));
  },
};

class TestClass {
  constructor() {
    Object.assign(this, LoggerMixin);
  }

  firstMetod(arg1, arg2) {
    this.log(arg1, arg2);
  }

  secondMetod(arg1) {
    this.log(arg1);
  }
}

const obj = new TestClass();
obj.firstMetod(1, 2);
obj.secondMetod("hello");

//--------------------------------------------------

// Задача на композицию

// Создайте класс "Car" со свойствами "engine" и "body". Создайте
// класс "Engine" с методом "start()", и класс "Body" с методом
// "open()". Используйте композицию, чтобы связать объекты классов
// "Car", "Engine" и "Body" вместе и вызывать их методы.

class Engine {
  start() {
    console.log("Старт движения");
  }
}

class Body {
  open() {
    console.log("Двери открыты");
  }
}

class Car {
  constructor() {
    this.engine = new Engine();
    this.body = new Body();
  }

  startCar() {
    this.engine.start();
  }

  openDoors() {
    this.body.open();
  }
}

const myCar = new Car();

myCar.startCar();
myCar.openDoors();
