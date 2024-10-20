export function addProjectInfoToTable(project){
    const tbody = document.querySelector("#projects_table tbody");
    
    // Створюємо новий рядок
    const tr = document.createElement("tr");

    // Створюємо клітинки для кожного стовпця
    const titleCell = document.createElement("td");
    titleCell.textContent = project.title;

    const dateCell = document.createElement("td");
    dateCell.textContent = project.date;

    const rateCell = document.createElement("td");
    rateCell.innerHTML = project.getStars();

    const countryCell = document.createElement("td");
    countryCell.textContent = project.country;

    const aboutCell = document.createElement("td");
    aboutCell.textContent = project.about;

    tr.appendChild(titleCell);
    tr.appendChild(dateCell);
    tr.appendChild(rateCell);
    tr.appendChild(countryCell);
    tr.appendChild(aboutCell);

    tbody.appendChild(tr);
}