// Завдання 1: Оголошення змінних для примітивних типів
let stringVar = "Hello, world!"; // рядок
let numberVar = 42; // число
let booleanVar = true; // буль
let nullVar = null; // null
let undefinedVar; // undefined

console.log("String:", stringVar);
console.log("Number:", numberVar);
console.log("Boolean:", booleanVar);
console.log("Null:", nullVar);
console.log("Undefined:", undefinedVar);

// Завдання 2: Конкатенація рядків та шаблонний рядок
let firstName = "Іван";
let secondName = "Марія";

// Конкатенація рядків
let greetingConcat = "Привіт, " + firstName + " та " + secondName + "!";
console.log(greetingConcat);

// Шаблонний рядок
let greetingTemplate = `Привіт, ${firstName} та ${secondName}!`;
console.log(greetingTemplate);

// Завдання 3: Числа та булі
let age = 18; // вік особи
let isAdult = age >= 18; // перевірка на повноліття

console.log("Вік:", age);
console.log("Повнолітній:", isAdult);

// Завдання 4: Обчислення площі та об'єму

// Завдання 4.1: Площа кола
let radius = 5;
let circleArea = Math.PI * Math.pow(radius, 2);
console.log("Площа кола:", circleArea.toFixed(2));

// Завдання 4.2: Площа прямокутника
let length = 10;
let width = 4;
let rectangleArea = length * width;
console.log("Площа прямокутника:", rectangleArea.toFixed(2));

// Завдання 4.3: Об'єм циліндра
let cylinderRadius = 3;
let cylinderHeight = 7;
let cylinderVolume = Math.PI * Math.pow(cylinderRadius, 2) * cylinderHeight;
console.log("Об'єм циліндра:", cylinderVolume.toFixed(2));