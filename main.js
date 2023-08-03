// Задача 1

// Напишите код, который проверяет, является ли введённое пользователем число чётным.

const num = prompt("Введит число");
+num % 2 ? console.log("Число не честное") : console.log("Число честное");

// ------------------------------------------

// Задача 2

// Напишите код, который просит пользователя ввести язык программирования, на котором он работает, и определяет, кто этот пользователь: backend-разработчик или frontend-разработчик.
// В этой задаче предположим, что фронтендеры работают только на JS, а бэкендеры - только на Python, Java или C++.

const lang = prompt("Введите язык программирования:");

if (lang.toLowerCase() === "js") {
  alert("Вы frontend-разработчик");
} else if (["python", "java", "c++"].includes(lang.toLowerCase())) {
  alert("Вы backend-разработчик");
} else {
  alert("Неизвестный язык");
}

// ------------------------------------------

// Задача 3

// Напишите код, который просит пользователя на английском языке (в любом регистре) ввести название языка, на котором он говорит и выводит через alert или console.log “Привет” на его языке. Ваша программа знает только русский, английский, испанский, итальянский, французский.

// Russian - Привет
// English - Hello
// Italian - Ciao
// Spanish - Hola
// French - Salut

// Обратите внимание, что пользователь может ввести другой язык. В таком случае программа должна выводить: “Sorry, I don’t know this language” (Извините, я не знаю этого языка).

// Решите эту задачу двумя способами: через if-конструкции и через switch.

// if-конструкция

const lang = prompt("Please enter the language you speak:");

const lowLang = lang.toLowerCase();

if (lowLang === "russian") {
  alert("Привет");
} else if (lowLang === "english") {
  alert("Hello");
} else if (lowLang === "italian") {
  alert("Ciao");
} else if (lowLang === "spanish") {
  alert("Hola");
} else if (lowLang === "french") {
  alert("Salut");
} else {
  alert("Sorry, I don't know this language");
}

// switch

const lang = prompt("Please enter the language you speak:");

switch (lang.toLowerCase()) {
  case "russian":
    alert("Привет");
    break;
  case "english":
    alert("Hello");
    break;
  case "italian":
    alert("Ciao");
    break;
  case "spanish":
    alert("Hola");
    break;
  case "french":
    alert("Salut");
    break;
  default:
    alert("Sorry, I don't know this language");
    break;
}

// ------------------------------------------

// Задача 4

// Напишите программу “Диалоговая система Клава”, которая отвечает на следующие вопросы:
// - Как тебя зовут? - Клава
// - Как у тебя дела? - Хорошо, а у тебя?
// - Сколько тебе лет? - Много-много
// На другие вопросы она отвечает: “Я еще не знаю таких слов”.

const quest = prompt("Задайте вопрос:");

switch (quest.toLowerCase()) {
  case "как тебя зовут?":
    alert("Клава");
    break;
  case "как у тебя дела?":
    alert("Хорошо, а у тебя?");
    break;
  case "сколько тебе лет?":
    alert("Много-много");
    break;
  default:
    alert("Я еще не знаю таких слов");
    break;
}
