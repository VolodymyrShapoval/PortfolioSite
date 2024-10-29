import { Project } from "../Models/project.js";
import { addProjectInfoToTable } from "../InfoPresenters/addProjectInfoToTable.js";

export async function searchProjects(searchWord){
    try {
        const response = await fetch('./data/myProjects.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const projectsData = await response.json();
        const relevantProjects = projectsData
            .filter(proj => proj.name.includes(searchWord))
            .map(data => new Project(data.name, data.startDate, data.durationMonths, data.country, data.description));

        for (let project of relevantProjects) {
            addProjectInfoToTable(project);
        }
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
};