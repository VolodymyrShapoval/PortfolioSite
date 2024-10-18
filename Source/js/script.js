import {typeWritterEffect} from './TextAnimations/typeWritter.js';

document.addEventListener('DOMContentLoaded', () => {
    let nameTitleElement = document.getElementById('name-title');
    let devTitleElement = document.getElementById('developer-title');
    devTitleElement.style.opacity = 0;
    let speed = 150; // Швидкість виведення літер

    typeWritterEffect(nameTitleElement, speed);
    setTimeout(() => {
        devTitleElement.style.opacity = 1;
        typeWritterEffect(devTitleElement, speed)
    }, 3000);
})

