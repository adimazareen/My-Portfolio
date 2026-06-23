import Image from "next/image";
import { MdSchool } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface EducationProps {
  index: number;
  institute: string;
  logo?: string;
  degree: string;
  startDate: string;
  endDate: string;
  CGPA?: string;
}

const EducationCard = ({
  index,
  institute,
  logo,
  degree,
  startDate,
  endDate,
  CGPA
}: EducationProps) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const cardVariants = {
    hidden: {
      x: index % 2 === 0 ? 30 : -30,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className={`mb-8 flex md:justify-between items-center w-full ${
        index % 2 === 0
          ? "md:flex-row-reverse"
          : ""
      }`}
    >
      <div className="order-1 md:w-5/12"></div>

      <span
        className="
        z-20
        flex
        items-center
        justify-center
        order-1
        w-10
        h-10
        bg-violet-100
        dark:bg-violet-900
        border-2
        border-violet-500
        rounded-full
        ring-8
        ring-white
        dark:ring-grey-900
      "
      >
        <MdSchool className="text-xl text-violet-600" />
      </span>

      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="
          order-1
          w-full
          ml-3
          md:ml-0
          md:w-5/12
          p-4
          bg-white
          dark:bg-grey-800
          rounded-2xl
          border-2
          border-violet-400
          hover:border-violet-500
          shadow-lg
        "
      >
        <div className="flex items-start gap-4">
          {logo && (
                <Image
                src={logo}
                alt={institute}
                width={56}
                height={56}
                className="object-contain flex-shrink-0"
                />
            )}

          <div className="flex flex-col">
            <h3 className="font-bold text-lg text-violet-700 dark:text-violet-400">
              {institute}
            </h3>

            <p className="text-sm font-semibold text-black dark:text-gray-200">
              {degree}
            </p>

            <p className="text-sm text-violet-500">
              {startDate} - {endDate}
            </p>

            {CGPA && (
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                CGPA: {CGPA}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EducationCard;