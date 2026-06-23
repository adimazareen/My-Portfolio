import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  name: string;
  date: string;
  issuer: string;
  logo: string;
  credentialUrl: string;
}

const CertificationCard = ({
  name,
  date,
  issuer,
  logo,
  credentialUrl,
}: Props) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="
        bg-white dark:bg-grey-800
        rounded-2xl
        p-3
        border-2 border-violet-400
        hover:border-violet-500
        shadow-lg
        transition-all
      "
    >
      {/* Top Row */}
      <div className="flex justify-between items-start gap-4">

        <div className="flex-1">

          <div className="flex items-center justify-between gap-3">

            <h3 className="font-bold text-lg leading-tight">
              {name}
            </h3>

            <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm whitespace-nowrap">
              {date}
            </span>

          </div>

          <p className="text-violet-600 text-sm font-medium mt-2">
            {issuer}
          </p>

        </div>

        <Image
          src={logo}
          alt={issuer}
          width={42}
          height={42}
          className="object-contain shrink-0"
        />

      </div>

      {/* Button */}
      <Link
        href={credentialUrl}
        target="_blank"
        className="
          inline-block
          mt-4
          text-sm
          bg-violet-600
          text-white
          px-3
          py-2
          rounded-lg
          hover:bg-violet-700
          transition
        "
      >
        Verify Certificate
      </Link>
    </motion.div>
  );
};

export default CertificationCard;