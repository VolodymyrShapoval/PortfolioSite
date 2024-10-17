import {typeWritterEffect} from './TextAnimations/typewritter.js';

document.addEventListener('DOMContentLoaded', () => {
    let nameTitleElement = document.getElementById('name-title');
    let devTitleElement = document.getElementById('developer-title');
    let speed = 150; // Швидкість виведення літер
    

    typeWritterEffect(nameTitleElement, speed);
    typeWritterEffect(devTitleElement, speed);
})

