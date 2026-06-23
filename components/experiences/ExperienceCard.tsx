import Image from "next/image";
import { MdWork } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ExperienceProps {
  index: number;
  company: string;
  logo?: string;
  position: string;
  desc: string[];
  startDate: string;
  endDate: string;
}

const ExperienceCard = ({
  index,
  company,
  logo,
  position,
  desc,
  startDate,
  endDate,
}: ExperienceProps) => {
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
          ? "md:flex-row-reverse left-timeline"
          : "right-timeline"
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
        <MdWork className="text-xl text-violet-600" />
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
          transition-all
        "
      >
        <div className="flex items-start gap-4 mb-3">
          {logo && (
            <Image
              src={logo}
              alt={company}
              width={56}
              height={56}
              className="rounded-lg object-contain flex-shrink-0"
            />
          )}

          <div className="flex flex-col">
            <h3 className="font-bold text-lg text-violet-700 dark:text-violet-400">
              {company}
            </h3>

            <p className="text-sm font-semibold text-black dark:text-gray-200">
              {position}
            </p>

            <p className="text-sm text-violet-500">
              {startDate} - {endDate}
            </p>
          </div>
        </div>

        <ul className="text-sm text-gray-700 dark:text-gray-200 ml-5 list-disc space-y-2">
          {desc.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default ExperienceCard;