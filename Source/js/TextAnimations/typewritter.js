export function typeWritterEffect(element, speed) {
    let fullText = element.innerHTML;  // Отримуємо повний текст
    element.innerHTML = '';            // Очищуємо елемент для початку анімації
    let i = 0;                         // Індекс для виведення літер

    function showChar() {
        if (i < fullText.length) {      // Перевіряємо змінну fullText, а не text
            element.innerHTML += fullText[i];  // Додаємо наступну літеру
            i++;
            setTimeout(showChar, speed);       // Встановлюємо затримку
        }
    }

    showChar();  // Запускаємо анімацію
}
