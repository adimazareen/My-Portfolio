'use client';
import { data } from "@/types/main";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Socials from "@/components/Socials";
import Experiences from "@/components/experiences/Experiences";
import Education from "@/components/education/Education";
import Contact from "@/components/Contact";
// import CallToAction from "@/components/CallToAction";
import Header from "./Header";
import Footer from "./Footer";
import Certifications from "@/components/certifications/Certifications";
import Services from "@/components/services/Services";

interface Props {
    data: data,
}

const HomePage = ({ data }: Props) => {
    return (
        <>
            <Header/>
            <Hero mainData={data.main} />
            <Socials socials={data.socials} />
            <About aboutData={data.about} name={data.main.name} />
            <Skills skillData={data.skills} />
            <Projects projectsData={data.projects} />
            <Certifications certificationsData={data.certifications} />
            <Experiences experienceData={data.experiences} />
            <Education educationData={data.educations} />
            <Services servicesData={data.services} />
            <Contact />
            {/* <CallToAction /> */}
            <Footer socials={data.socials} name={data.main.name} />
        </>
    )
}

export default HomePage