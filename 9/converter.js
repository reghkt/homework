function convertCurrency() {
    // Отримуємо значення з полів вводу
    const amountInput = document.getElementById("amount");
    const amount = parseFloat(amountInput.value);
    const currencySelect = document.getElementById("currency");
    const targetCurrency = currencySelect.value;

    // Фіксовані курси валют
    const exchangeRates = {
        USD: 1,     // Базова валюта
        EUR: 0.85,  // Курс євро до долара
        UAH: 27     // Курс гривні до долара
    };

    // Перевірка на коректність введених даних
    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerText = "Будь ласка, введіть коректну суму.";
        return;
    }

    // Конвертація
    const convertedAmount = amount * exchangeRates[targetCurrency];

    // Відображення результату
    document.getElementById("result").innerText = 
        `Сума у ${targetCurrency}: ${convertedAmount.toFixed(2)}`;
}
