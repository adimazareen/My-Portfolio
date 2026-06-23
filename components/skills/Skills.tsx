import { skill } from '@/types/main';
import SkillCard from "./SkillCard";
import SectionWrapper from '../SectionWrapper';

interface Props {
    skillData: skill[]
}

const Skills = ({ skillData }: Props) => {

    return (
        <SectionWrapper
            id='skills'
            className="min-h-[50vh] mt-24"
        >
            <h2 className="text-4xl font-bold text-center mb-12">
                Tech Stack
            </h2>

            <div className="mx-auto lg:w-5/6 2xl:w-3/4 my-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 place-items-center gap-6">
                {skillData.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                ))}
            </div>

        </SectionWrapper>
    )
}

export default Skills