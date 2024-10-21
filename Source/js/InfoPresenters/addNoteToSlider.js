export function addNoteToSlider(article) {
    // Створюємо контейнер для статті
    const articleBlock = document.createElement('div');
    articleBlock.className = 'article-block';

    // Додаємо зображення
    const imgElement = document.createElement('img');
    imgElement.id = 'image';
    imgElement.src = article.img_url;
    imgElement.alt = `Image for ${article.title}`;
    articleBlock.appendChild(imgElement);

    const articleTag = document.createElement('article');

    // Додаємо заголовок
    const titleElement = document.createElement('h2');
    titleElement.id = 'title';
    titleElement.textContent = article.title;
    if (article.title.length > 30) {
        titleElement.style.fontSize = '18px';
    }
    articleTag.appendChild(titleElement);

    // Додаємо кнопку "Read More"
    const readMoreBtn = document.createElement('a');
    readMoreBtn.id = 'readMoreBtn';
    readMoreBtn.className = 'hiddenBtn';
    readMoreBtn.href = article.article_url;
    readMoreBtn.textContent = 'Read more';

    // Додаємо опис
    const descriptionElement = document.createElement('p');
    descriptionElement.id = 'description';
    descriptionElement.textContent = article.description;
    if (article.description.length > 125) {
        // Відображення тільки перших 125 символів
        descriptionElement.innerText = article.description.substring(0, 125) + '... ';
        readMoreBtn.style.display = 'visible';
    }
    
    descriptionElement.appendChild(readMoreBtn);
    articleTag.appendChild(descriptionElement);

    // Додаємо дату
    const dateElement = document.createElement('span');
    dateElement.className = 'date';
    dateElement.id = 'date';
    dateElement.textContent = article.date;
    articleTag.appendChild(dateElement);

    articleBlock.appendChild(articleTag);

    // Вставляємо статтю в DOM (виберіть контейнер)
    const articlesContainer = document.getElementById('articles'); // Заміна на ваш контейнер
    articlesContainer.appendChild(articleBlock);
}