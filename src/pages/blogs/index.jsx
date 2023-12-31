import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import {
    fadeContainer,
    opacityVariant,
    popup,
    popupFromBottomForText,
} from '@/content/framerMotionVariants';
import { RiCloseCircleLine } from 'react-icons/ri';
import { BiRss } from 'react-icons/bi';
import { BsBookmark } from 'react-icons/bs';
import Blog from '@/components/Blog';
import MetaData from '@/components/MetaData';
import AnimatedDiv from '@/components/FramerMotion/AnimatedDiv';
import PageTop from '@/components/PageTop';
import MDXContent from '@/lib/mdxContent';
import pageMeta from '@/content/meta';

export default function Blogs({ blogs }) {
    const [searchValue, setSearchValue] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([...blogs]);

    useEffect(() => {
        setFilteredBlogs(
            blogs.filter((post) =>
                post.title.toLowerCase().includes(searchValue.trim().toLowerCase())
            )
        );
    }, [searchValue, blogs]);

    return (
        <>
            <MetaData
                title={pageMeta.blogs.title}
                description={pageMeta.blogs.description}
                keywords={pageMeta.blogs.keywords}
            />

            <section className="pageTop flex flex-col gap-2">
                <PageTop pageTitle="Blogs">
                    I've been writing online since 2021, mostly about web development and tech
                    careers. In total, I've written {blogs.length} articles till now.
                </PageTop>

                <AnimatedDiv variants={opacityVariant}>
                    <div className="w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 px-2 py-1.5 shadow-sm hover:ring-slate-400 dark:bg-darkSecondary dark:highlight-white/5 dark:hover:bg-darkSecondary/90 mx-auto flex relative bg-white group">
                        <svg
                            width="24"
                            height="24"
                            fill="none"
                            aria-hidden="true"
                            className="mx-3 flex-none"
                        >
                            <path
                                d="m19 19-3.5-3.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <circle
                                cx="11"
                                cy="11"
                                r="6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></circle>
                        </svg>
                        <input
                            className="px-3 text-slate-400 py-2 w-full outline-none transition duration-200 bg-transparent font-medium font-inter"
                            type="text"
                            value={searchValue}
                            onChange={(e) => {
                                setSearchValue(e.target.value);
                            }}
                            placeholder="Search articles..."
                        />

                        <button
                            type="button"
                            onClick={() => setSearchValue('')}
                            className="hidden group-hover:inline-flex"
                        >
                            <RiCloseCircleLine className="w-4 h-4 mr-3" />
                        </button>
                    </div>
                </AnimatedDiv>

                <section className="relative py-5 flex flex-col gap-2 min-h-[60vh]">
                    <AnimatePresence>
                        {filteredBlogs.length != 0 ? (
                            <>
                                <AnimatedDiv
                                    variants={fadeContainer}
                                    className="flex items-center justify-between"
                                >
                                    <motion.h3
                                        variants={popupFromBottomForText}
                                        className="text-left font-bold text-2xl sm:text-3xl my-5"
                                    >
                                        All Posts ({filteredBlogs.length})
                                    </motion.h3>

                                    <div className="flex items-center gap-2">
                                        <Link href="/blogs/bookmark" passHref>
                                            <motion.p variants={popup}>
                                                <BsBookmark
                                                    title="Bookmark"
                                                    className="text-2xl cursor-pointer"
                                                />
                                            </motion.p>
                                        </Link>
                                        <Link href="/feed.xml" passHref>
                                            <motion.p variants={popup}>
                                                <BiRss
                                                    title="RSS"
                                                    className="text-3xl cursor-pointer"
                                                />
                                            </motion.p>
                                        </Link>
                                    </div>
                                </AnimatedDiv>

                                <AnimatedDiv
                                    variants={fadeContainer}
                                    className="grid grid-cols-1 gap-4 mx-auto"
                                >
                                    {filteredBlogs.map((blog, index) => {
                                        return <Blog key={index} blog={blog} />;
                                    })}
                                </AnimatedDiv>
                            </>
                        ) : (
                            <div className="font-inter text-center font-medium dark:text-gray-400">
                                No Results Found
                            </div>
                        )}
                    </AnimatePresence>
                </section>
            </section>
        </>
    );
}

export async function getStaticProps() {
    const blogs = new MDXContent('posts').getAllPosts();

    return {
        props: {
            blogs,
        },
    };
}
