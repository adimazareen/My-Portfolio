import { experience } from "@/types/main";
import SectionWrapper from "../SectionWrapper";
import ExperienceCard from "./ExperienceCard";

interface Props {
  experienceData: experience[];
}

const Experiences = ({ experienceData }: Props) => {
  const experiences = [...experienceData].reverse();

  return (
    <SectionWrapper
      id="experience"
      className="min-h-[50vh] mt-24"
    >
      <h2 className="text-4xl font-bold text-center mb-8">
        Experience
      </h2>

      <div className="lg:w-5/6 2xl:w-3/4 mx-auto">
        <div className="relative overflow-hidden py-4">
          <div className="left-6 md:left-1/2 absolute h-full border border-gray-300 dark:border-grey-800"></div>

          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              index={index}
              {...exp}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experiences;