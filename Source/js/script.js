import {typeWritterEffectHandler} from './EventHandlers/typeWritterHandlers.js';
import { showUserInfo } from './InfoPresenters/showUserInfo.js';

document.addEventListener('DOMContentLoaded', () => {
    typeWritterEffectHandler();
    showUserInfo();
})

