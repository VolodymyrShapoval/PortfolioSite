export function outputProject(project){
    let projectsBody = document.getElementById('projects-table');
    let projectTemplate;
    if(!project.inProcess){       
        projectTemplate = projectsBody.getElementById('project-info').cloneNode(true).getElementsByTagName('tbody')[0];
    } else {
        projectTemplate = projectsBody.getElementById('project-info').cloneNode(true).getElementsByTagName('tfoot')[0];
    }
    // !!!!!!!!!!!!!!!!!!!!!!
    projectTemplate.querySelector('#title').textContent = project.title || 'Test Project';
    projectTemplate.querySelector('#date').textContent = project.date || 'N/A';
    projectTemplate.querySelector('#rate').innerHTML = 'M/N'
    projectTemplate.querySelector('#country').textContent = project.country || 'N/A';
    projectTemplate.querySelector('#about').textContent = project.about || 'No description available';

    // Додаємо новий рядок до таблиці
    projectsBody.appendChild(projectTemplate);
}


let project = new Project(
    "Website Redesign",
    "2024-10-18",
    "5 stars",
    "Ukraine",
    "A full redesign of a client's website",
    true
);