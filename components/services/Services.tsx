import SectionWrapper from "../SectionWrapper";
import ServiceCard from "./ServiceCard";

interface Service {
  title: string;
  description: string;
  image: string;
  sampleLink: string;
}

interface Props {
  servicesData: Service[];
}

const Services = ({ servicesData }: Props) => {
  return (
    <SectionWrapper
      id="services"
      className="min-h-[50vh] mt-24"
    >
      <h2 className="text-4xl font-bold text-center mb-8">
        Services
      </h2>

      <div className="lg:w-5/6 2xl:w-3/4 mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;