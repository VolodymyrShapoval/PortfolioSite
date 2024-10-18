export function typeWritterEffect(element, speed) {
    let fullText = element.innerHTML;
    element.innerHTML = '';
    let i = 0;

    function showChar() {
        if (i < fullText.length) {
            element.innerHTML += fullText[i];
            i++;
            setTimeout(showChar, speed);
        }
    }

    showChar();  // Запускаємо анімацію
}
