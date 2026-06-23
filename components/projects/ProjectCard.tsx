import { project } from "@/types/main"
import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaVideo } from "react-icons/fa"
import { BiLinkExternal } from "react-icons/bi"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } }
};

const Project = ({ name, image, techstack, description, links }: project) => {

    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            className="
            flex flex-col gap-3
            bg-white dark:bg-grey-800
            rounded-2xl
            p-5
            shadow-lg
            border-2 border-violet-400
            hover:border-violet-500
            hover:-translate-y-2
            hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
            transition-all duration-300
            overflow-hidden
            "
            style={{
            backgroundImage:
            "linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px"
            }}>
            

            {/* <div className="h-1 w-full bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-full mb-2"></div> */}

            <div className="relative group rounded-lg bg-violet-50">
                <Image alt={name} width={1000} height={1000} className="max-w-full h-48 max-h-full object-cover object-top rounded-lg" src={image} />
                {(links.visit.trim() || links.code.trim() || links.video.trim()) &&
                    <div className="absolute top-0 scale-x-0 group-hover:scale-100 transition-transform origin-left duration-200 ease-linear bg-gray-800 bg-opacity-60 w-full h-full rounded-lg flex items-center gap-4 justify-center">
                        {links.visit.trim() &&
                            <Link href={links.visit} target="_blank" className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all">
                                <BiLinkExternal size={20} />
                            </Link>
                        }
                        {links.code.trim() &&
                            <Link href={links.code} target="_blank" className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all">
                                <FaGithub size={20} />
                            </Link>
                        }
                        {links.video.trim() &&
                            <Link href={links.video} target="_blank" className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all">
                                <FaVideo size={20} />
                            </Link>
                        }
                    </div>
                }
            </div>

            <div className="my-2 flex flex-col gap-3">
                <h3 className="text-xl font-bold text-violet-600 leading-tight">
                    {name}
                </h3>

                {/* <p className="text-sm text-gray-500">
                    <span className="font-semibold">
                        Skills Used:{" "}
                    </span>{" "}
                    {techstack}
                </p> */}

                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    {description?.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-start gap-2"
                        >
                            <span className="text-violet-600 mt-1">▸</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="flex flex-wrap gap-2">
                {techstack.split(',').map((skill, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300"
                    >
                        {skill.trim()}
                    </span>
                ))}
            </div>
        </motion.div>
    )
}

export default Project