import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Project from '@/components/Project';
import MetaData from '@/components/MetaData';
import PageTop from '@/components/PageTop';
import AnimatedDiv from '@/components/FramerMotion/AnimatedDiv';
import { fadeContainer } from '@/content/framerMotionVariants';
import projects from '@/content/projects';
import pageMeta from '@/content/meta';

export default function Projects() {
    return (
        <>
            <MetaData
                title={pageMeta.projects.title}
                description={pageMeta.projects.description}
                keywords={pageMeta.projects.keywords}
            />

            <section className="pageTop">
                <PageTop pageTitle="Projects">
                    I've been making various types of projects some of them were basics and some of
                    them were complicated. <br />
                    So far I've made&nbsp;
                    <span className="font-bold text-gray-600 dark:text-gray-200">
                        {projects.length}
                    </span>
                    &nbsp;projects.
                </PageTop>

                <AnimatedDiv
                    variants={fadeContainer}
                    className="grid grid-cols-1 gap-4 mx-auto md:ml-[20%] xl:ml-[24%]"
                >
                    <AnimatePresence>
                        {projects &&
                            projects.map((project, index) => {
                                if (project.name === '' && project.githubURL === '') return null;
                                return <Project key={index} project={project} />;
                            })}
                    </AnimatePresence>
                </AnimatedDiv>
            </section>
        </>
    );
}
