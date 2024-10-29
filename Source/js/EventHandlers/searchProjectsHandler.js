import { searchProjects } from "../Searchers/searchProjects.js";
import { addProjectHandlerAsync } from "./addProjectHandler.js";
import { addSearchedProjectsHandler } from "./addSearchedProjectsHandler.js";

export function searchProjectsHandler(){
    const searchWord = document.getElementById('search-project-field').value;
    document.querySelector("#projects_table tbody").innerHTML = '';
    
    if (searchWord.length > 0) {
        searchProjects(searchWord)
            .then(relevantProjects => {
                addSearchedProjectsHandler(relevantProjects);
            })
            .catch(error => {
                console.error('Error during project search:', error);
            });
    } else{
        addProjectHandlerAsync();
    }
};