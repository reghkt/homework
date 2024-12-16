// Створюємо об'єкт person
const person = {
    firstName: "Єгор",
    lastName: "Рагулін",
    age: 18
};

// Додаємо властивість email
person.email = "yehorrahulin@college.udhtu.edu.ua";

// Видаляємо властивість age
delete person.age;

// Виводимо оновлений об'єкт у консоль
console.log(person);


