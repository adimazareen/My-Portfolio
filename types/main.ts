type skill = {
    name: string,
    image: string,
}

type project ={
    name: string,
    image: string,
    techstack: string,
    description: string[],
    links: {
        visit: string,
        code: string,
        video: string
    }
}

type experience = {
    company: string,
    logo?: string,
    position: string,
    startDate: string,
    endDate: string,
    desc: string[]
}

type education = {
    institute: string,
    logo?: string,
    degree: string,
    startDate: string,
    endDate: string,
    CGPA?: string
}

type main = {
    name: string,
    titles: string[],
    heroImage: string,
    shortDesc: string,
    techStackImages: string[],
}

type about = {
    aboutImage: string,
    aboutImageCaption: string,
    title: string,
    about: string,
    resumeUrl: string,
    callUrl: string
}

type social = {
    name: string,
    icon: string,
    link: string
}

type certification = {
    name: string,
    issuer: string,
    date: string,
    credentialUrl: string
}

type service = {
    title: string,
    description: string,
    image: string
    sampleLink: string
}

type data = {
    main: main,
    about: about,
    skills: skill[],
    projects: project[],
    experiences: experience[],
    educations: education[]
    socials: social[]
    certifications: certification[]
    services: service[]
}

export type { data, main, about, skill, project, experience, education, social, certification, service };