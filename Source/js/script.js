import { addNoteToSlideHandlerAsync } from './EventHandlers/AddNoteToSliderHandler.js';
import { addProjectHandlerAsync } from './EventHandlers/addProjectHandler.js';
import { showUserInfoHandler } from './EventHandlers/showUserInfoHandler.js';
import { typeWritterEffectHandler } from './EventHandlers/typeWritterHandlers.js';
import { contactMeFormHandler } from './FormHandlers/contactMeFormHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    typeWritterEffectHandler();
    showUserInfoHandler();
    addProjectHandlerAsync();
    addNoteToSlideHandlerAsync();
});

document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Запобігає перезавантаженню сторінки

    // Отримуємо дані з форми
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const question = document.getElementById("comment").value;
    const consent = document.getElementById("consent").checked; // Перевірка прапорця згоди
    
    // Формуємо об'єкт з даними
    const formData = {
        name: name,
        email: email,
        question: question,
        consent: consent
    };

    // Відправляємо POST-запит на сервер
    axios.post("/api/submit", formData)
        .then(response => {
            console.log(response.data);
            alert('Дані надіслано успішно!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Сталася помилка при відправці даних.');
        });
});
