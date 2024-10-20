import { addProjectInfoToTable } from "../InfoPresenters/addProjectInfoToTable.js";
import { Project } from "../Models/project.js";

export async function addProjectHandlerAsync() {
    try {
        const response = await fetch('./data/myProjects.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const projectsData = await response.json();
        const projects = projectsData.map(data => 
            new Project(data.name, data.startDate, data.durationMonths, data.country, data.description)
        );

        for (let project of projects) {
            addProjectInfoToTable(project);
        }
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}