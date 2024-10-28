import { addNoteToSlideHandlerAsync } from './EventHandlers/AddNoteToSliderHandler.js';
import { addProjectHandlerAsync } from './EventHandlers/addProjectHandler.js';
import { showUserInfoHandler } from './EventHandlers/showUserInfoHandler.js';
import { typeWritterEffectHandler } from './EventHandlers/typeWritterHandlers.js';
import { contactMeFormHandler } from './FormHandlers/contactMeFormHandler.js';

window.onload = function () {
    Particles.init({
      selector: ".background"
    });
  };

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
