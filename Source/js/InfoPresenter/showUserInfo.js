// Info about user for "About" page
const userInfo = {
    firstName: 'Volodymyr',
    age: 19,
    gender: 'Male',
    language: ['Ukrainian', 'English'],
    work: '.NET/TypeScript Full-Stack developer',
    status: 'Free-to-work',
    completed_projects_count: 10,
    publications_count: 20,
    experience_years: 4,
    short_description: 'I am an ambitious full-stack developer with a passion for continuous improvement and learning new technologies. I have experience in building efficient web applications, both on the client and server sides, with a focus on clean code and user-friendly interfaces.'
}

document.getElementById("age").innerHTML = `<span>Age: </span>${userInfo.age}`;
document.getElementById("gender").innerHTML = `<span>Gender: </span>${userInfo.gender}`;
document.getElementById("language").innerHTML = `<span>Language: </span>${userInfo.language}`;
document.getElementById("work").innerHTML = `<span>Work: </span>${userInfo.work}`;
document.getElementById("status").innerHTML = `<span>Status: </span>${userInfo.status}`;
document.getElementById("completed-projects-count").innerHTML = `${userInfo.completed_projects_count}+`;
document.getElementById("publications-count").innerHTML = `${userInfo.publications_count}+`;
document.getElementById("experience-years").innerHTML = `${userInfo.experience_years}+`;
document.getElementById("short-description").innerHTML = `${userInfo.short_description}`;



