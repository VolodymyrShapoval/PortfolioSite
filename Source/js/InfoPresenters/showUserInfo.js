export function showUserInfo(userInfo){
    document.getElementById("age").innerHTML = `<span>Age: </span>${userInfo.age}`;
    document.getElementById("gender").innerHTML = `<span>Gender: </span>${userInfo.gender}`;
    document.getElementById("language").innerHTML = `<span>Language: </span>${userInfo.language}`;
    document.getElementById("work").innerHTML = `<span>Work: </span>${userInfo.work}`;
    document.getElementById("status").innerHTML = `<span>Status: </span>${userInfo.status}`;
    document.getElementById("completed-projects-count").innerHTML = `${userInfo.completed_projects_count}+`;
    document.getElementById("publications-count").innerHTML = `${userInfo.publications_count}+`;
    document.getElementById("experience-years").innerHTML = `${userInfo.experience_years}+`;
    document.getElementById("short-description").innerHTML = `${userInfo.short_description}`;
}


