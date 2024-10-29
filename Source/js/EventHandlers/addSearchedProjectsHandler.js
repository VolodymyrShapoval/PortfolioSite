export function addSearchedProjectsHandler(projects){
    for (let project of projects) {
        addProjectInfoToTable(project);
    }
}