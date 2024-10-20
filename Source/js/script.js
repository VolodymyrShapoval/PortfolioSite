import { addProjectHandlerAsync } from './EventHandlers/addProjectHandler.js';
import { showUserInfoHandler } from './EventHandlers/showUserInfoHandler.js';
import { typeWritterEffectHandler } from './EventHandlers/typeWritterHandlers.js';

document.addEventListener('DOMContentLoaded', () => {
    typeWritterEffectHandler();
    showUserInfoHandler();
    addProjectHandlerAsync();
})

