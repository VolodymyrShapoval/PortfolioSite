import { addNoteToSlider } from "../InfoPresenters/addNoteToSlider.js";
import { Article } from "../Models/article.js";

export async function addNoteToSlideHandlerAsync() {
    try {
        const response = await fetch('./data/myArticles.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const articlesData = await response.json();
        const articles = articlesData.map(data => 
            new Article(data.title, data.img_url, data.article_url, data.description, data.date)
        );

        for (let article of articles) {
            addNoteToSlider(article);
        }
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}