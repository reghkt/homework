const display = document.getElementById("display");

// Додавання значення на дисплей
function appendValue(value) {
  display.value += value;
}

// Очистка дисплея
function clearDisplay() {
  display.value = '';
}

// Розрахунок результату
function calculate() {
  try {
    // Використовуємо eval для розрахунків
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
