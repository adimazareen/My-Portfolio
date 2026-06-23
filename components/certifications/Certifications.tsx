import SectionWrapper from "../SectionWrapper";
import CertificationCard from "./CertificationCard";

interface Props {
  certificationsData: any[];
}

const Certifications = ({ certificationsData }: Props) => {
  return (
    <SectionWrapper id="certifications" className="min-h-[50vh] mt-24">
      <h2 className="text-4xl font-bold text-center mb-12">
        Certifications
      </h2>

      <div className="mx-auto lg:w-5/6 2xl:w-3/4 mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {certificationsData.map((cert, index) => (
          <CertificationCard
            key={index}
            {...cert}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;