import MetaData from '@/components/MetaData';
import PageTop from '@/components/PageTop';
import utilities from '@/content/utilities';
import Link from 'next/link';
import AnimatedText from '@/components/FramerMotion/AnimatedText';
import AnimatedDiv from '@/components/FramerMotion/AnimatedDiv';
import {
    fadeContainer,
    opacityVariant,
    popup,
    popupFromBottomForText,
} from '@/content/framerMotionVariants';
import { motion } from 'framer-motion';
import pageMeta from '@/content/meta';

export default function Utilities() {
    return (
        <>
            <MetaData
                title={pageMeta.utilities.title}
                description={pageMeta.utilities.description}
                keywords={pageMeta.utilities.keywords}
            />

            <section className="pageTop font-inter">
                <PageTop pageTitle="Utilities">
                    In case you are wondering What tech I use, Here's the list of what tech I'm
                    currently using for coding on the daily basis. This list is always changing.
                </PageTop>

                <div className="flex flex-col gap-14">
                    <UtilitySection utility={utilities.system} />
                    <UtilitySection utility={utilities.software} />
                </div>

                <AnimatedText variants={opacityVariant} className="mt-12 -mb-10">
                    Last Update on&nbsp;
                    <span className="font-semibold">May 4, 2023</span>
                </AnimatedText>
            </section>
        </>
    );
}

function UtilitySection({ utility }) {
    return (
        <AnimatedDiv
            variants={fadeContainer}
            className="!w-full selection:bg-blue-300 dark:selection:bg-blue-900 dark:selection:text-gray-400 dark:text-neutral-200 font-medium"
        >
            <motion.h2
                variants={popupFromBottomForText}
                className="font-bold text-2xl sm:text-3xl mb-4"
            >
                {utility.title}
            </motion.h2>

            <AnimatedDiv
                variants={fadeContainer}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 mt-5"
            >
                {utility.data.map((item) => {
                    return (
                        <motion.div variants={popup} key={item.name}>
                            <Link
                                href={item.link}
                                title={item.name + ' - ' + item.description}
                                passHref
                                rel="noopener noreferrer"
                                target="_blank"
                                className="relative flex flex-col gap-3 items-center justify-center bg-white dark:bg-darkSecondary shadow dark:shadow-md p-8 border border-transparent hover:border-gray-400 dark:hover:border-neutral-600 rounded-md transition-all lg:hover:!scale-125 active:!scale-90 hover:z-10 hover:shadow-lg hover:origin-center text-gray-700 hover:text-black dark:text-gray-300/80 dark:hover:text-white"
                            >
                                <item.icon className="utilities-svg" />
                                <span className="absolute bottom-3 text-[10px] select-none">
                                    {item.name}
                                </span>
                            </Link>
                        </motion.div>
                    );
                })}
            </AnimatedDiv>
        </AnimatedDiv>
    );
}
