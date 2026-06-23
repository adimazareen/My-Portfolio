import Image from "next/image"
import { about } from "@/types/main";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import { BiLinkExternal } from "react-icons/bi";

interface Props {
    aboutData: about,
    name: string
}

const About = ({ aboutData, name }: Props) => {

    const { aboutImage, aboutImageCaption, title, about, resumeUrl, callUrl } = aboutData

    return (
        <SectionWrapper id="about" className="mx-4 md:mx-0 pt-12 md:pt-20 mb-24 md:mb-32 min-h-screen">
            <h2 className="text-4xl font-bold text-center mb-12">
                About Me
            </h2>

            <div className="w-full lg:w-11/12 2xl:w-4/5 mt-6 lg:mt-5 mx-auto flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
                <div className="p-3 w-72 md:w-[380px] lg:w-[420px] bg-white dark:bg-grey-800 flex flex-col gap-2 items-center rounded-2xl mx-auto lg:mx-8 hover:-translate-y-2 transition-transform duration-300">
                    <Image alt="profile" width={1000} height={1000} loading={'lazy'} className="w-full h-72 md:h-96 rounded-2xl object-contain bg-violet-50 p-2" src={aboutImage} />
                    <span className="font-medium font-sans">{aboutImageCaption || '< I Build Stuff 🚀 />'}</span>
                </div>

                <div className="flex-1 text-left mx-4 mt-4 md:mt-0 md:mx-0 md:p-6">
                    <div className="flex flex-col gap-2.5">
                        {/* <p
                        className="text-3xl md:text-4xl font-bold text-black"
                        style={{ fontFamily: "Lucida Calligraphy, cursive" }}
                        >
                        {name}
                        </p> */}
                        {/* <p className='text-violet-800 w-fit rounded py-1 px-2 text-sm dark:text-violet-600 bg-violet-50 dark:bg-violet-900/10'>{title}</p> */}
                        <div className="mb-3">
                        <p className="text-violet-600 font-semibold text-lg">
                            AI • Machine Learning • Python • RAG Systems • Full Stack Development
                        </p>
                        </div>

                        <p className="text-base leading-8 text-gray-600 dark:text-gray-300">
                        {about}
                        </p>

                        <div className="flex items-center gap-4 md:mt-4">
                            {resumeUrl.trim() && <Link href={resumeUrl} target="_blank" className="text-sm md:text-base bg-violet-600 dark:bg-violet-700 text-white w-fit rounded-md py-2 px-6 hover:shadow-xl transition-shadow">Resume</Link>}
                            {callUrl.trim() && <Link href={callUrl} target="_blank" className="text-violet-600 flex items-center gap-1 hover:bg-violet-50 hover:dark:bg-violet-900/10 py-2 px-4 transition-colors rounded-md">Book a 1:1 call <BiLinkExternal /> </Link>}
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default About