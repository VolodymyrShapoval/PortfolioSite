import { addNoteToSlideHandlerAsync } from './EventHandlers/AddNoteToSliderHandler.js';
import { addProjectHandlerAsync } from './EventHandlers/addProjectHandler.js';
import { showUserInfoHandler } from './EventHandlers/showUserInfoHandler.js';
import { typeWritterEffectHandler } from './EventHandlers/typeWritterHandlers.js';
import { contactMeFormHandler } from './FormHandlers/contactMeFormHandler.js';
import { searchProjectsHandler } from './EventHandlers/searchProjectsHandler.js';


document.addEventListener('DOMContentLoaded', () => {
    typeWritterEffectHandler();
    showUserInfoHandler();
    addProjectHandlerAsync();
    addNoteToSlideHandlerAsync();
});

document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault();
    contactMeFormHandler();
});

document.getElementById('search-btn').addEventListener('click', function () {
    searchProjectsHandler();
});

document.getElementById('advanced-settings-btn').addEventListener('click', (event) => {
    event.preventDefault();
    const additionalInputContainer = document.getElementById('additional-info-container');
    const button = document.getElementById('advanced-settings-btn');
    
    if (additionalInputContainer.style.display === 'block') {
        additionalInputContainer.style.display = 'none';
        button.textContent = 'Show advanced settings';
    } else {
        additionalInputContainer.style.display = 'block';
        button.textContent = 'Hide advanced settings';
    }
});

