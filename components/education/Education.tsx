import { education } from "@/types/main";
import SectionWrapper from "../SectionWrapper";
import EducationCard from "./EducationCard";

interface Props {
  educationData: education[];
}

const Education = ({ educationData }: Props) => {
  const educations = [...educationData].reverse();

  return (
    <SectionWrapper
      id="education"
      className="min-h-[50vh] mt-24"
    >
      <h2 className="text-4xl font-bold text-center mb-8">
        Education
      </h2>

      <div className="lg:w-5/6 2xl:w-3/4 mx-auto">
        <div className="relative overflow-hidden py-4">
          <div className="left-6 md:left-1/2 absolute h-full border border-gray-300 dark:border-grey-800"></div>

          {educations.map((edu, index) => (
            <EducationCard
              key={index}
              index={index}
              {...edu}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;