import Image from 'next/image';
import {
    fadeContainer,
    popup,
    opacityVariant,
    fromLeftVariant,
} from '@/content/framerMotionVariants';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import MetaData from '@/components/MetaData';
import pageMeta from '@/content/meta';
import Link from 'next/link';
import SkillSection from '@/components/Home/SkillSection';
import Contact from '@/components/Contact/Contact';

export default function Home() {
    return (
        <>
            <MetaData description={pageMeta.home.description} keywords={pageMeta.home.keywords} />

            <div className="relative dark:bg-darkPrimary dark:text-gray-100 max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl mx-auto">
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeContainer}
                    viewport={{ once: true }}
                    className="grid place-content-center py-20 min-h-screen"
                >
                    <div className="w-full relative mx-auto flex flex-col items-center gap-10">
                        <motion.div
                            variants={popup}
                            className="relative w-44 h-44 xs:w-52 xs:h-52 flex justify-center items-center rounded-full p-3 before:absolute before:inset-0 before:border-t-4 before:border-b-4 before:border-black before:dark:border-white before:rounded-full before:animate-photo-spin"
                        >
                            <Image
                                src="/images/profile.jpg"
                                className="rounded-full filter saturate-0"
                                width={400}
                                height={400}
                                alt="cover Profile Image"
                                quality={75}
                                priority={true}
                            />
                        </motion.div>

                        <div className="w-full flex flex-col p-5 gap-3 select-none text-center">
                            <div className="flex flex-col gap-1">
                                <motion.h1
                                    variants={opacityVariant}
                                    className="text-5xl lg:text-6xl font-bold font-sarina"
                                >
                                    Minato Hayashi
                                </motion.h1>
                                <motion.p
                                    variants={opacityVariant}
                                    className="font-medium text-xs md:text-sm lg:text-lg text-gray-500"
                                >
                                    React Developer, Talent and Passionate Programmer
                                </motion.p>
                            </div>
                            <motion.p
                                variants={opacityVariant}
                                className=" text-white-500 dark:text-gray-300 font-medium text-sm md:text-base text-center"
                            >
                                I am working as freelancer. And I can code in Javascript,
                                Typescript, Python, C# and etc.
                            </motion.p>
                        </div>

                        <Link
                            className="overflow-hidden flex items-center gap-2 px-5 py-2 border rounded-md border-gray-500 dark:border-gray-400 select-none  hover:bg-gray-100 dark:hover:bg-neutral-800 outline-none"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="/resume.pdf"
                        >
                            <FiDownload />
                            <p>Download</p>
                        </Link>
                    </div>
                </motion.section>

                <SkillSection />
                <Contact />
            </div>
        </>
    );
}
