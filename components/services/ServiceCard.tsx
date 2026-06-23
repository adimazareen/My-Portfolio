import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

interface Props {
  title: string;
  description: string;
  image: string;
  sampleLink: string;
}

const ServiceCard = ({
  title,
  description,
  image,
  sampleLink,
}: Props) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="
        bg-white
        dark:bg-grey-800
        border-2
        border-violet-300
        hover:border-violet-500
        rounded-2xl
        overflow-hidden
        shadow-lg
        transition-all
      "
    >
      {/* Service Image */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-3 text-violet-600">
          {title}
        </h3>

        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5">
          {description}
        </p>

        <Link
          href={sampleLink}
          target="_blank"
          className="
            inline-flex
            items-center
            gap-2
            bg-violet-600
            hover:bg-violet-700
            text-white
            px-4
            py-2
            rounded-lg
            transition
          "
        >
          View Sample
          <FiExternalLink />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;