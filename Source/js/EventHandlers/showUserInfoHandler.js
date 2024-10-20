import { showUserInfo } from "../InfoPresenters/showUserInfo.js"

export function showUserInfoHandler(){
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

    showUserInfo(userInfo);
}

