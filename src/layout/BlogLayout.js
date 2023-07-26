import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import AnimatedDiv from '@/components/FramerMotion/AnimatedDiv';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import { getFormattedDate } from '@/utils/date';
import { opacityVariant } from '@/content/framerMotionVariants';
import useBookmarkedBlogs from '@/hooks/useBookmarkBlogs';

export default function BlogLayout({ post, children }) {
    const [alreadyBookmarked, setAlreadyBookmarked] = useState(false);

    const { isAlreadyBookmarked, addToBookmark, removeFromBookmark } = useBookmarkedBlogs(
        'blogs',
        []
    );

    useEffect(() => {
        setAlreadyBookmarked(isAlreadyBookmarked(post.meta.slug));
    }, [isAlreadyBookmarked, post.meta.slug]);

    return (
        <section className="mt-[44px] md:mt-[60px] relative !overflow-hidden">
            <section
                className="p-5 sm:pt-10 relative font-barlow prose dark:prose-invert print:!mx-auto"
                style={{ maxWidth: '800px', margin: 'auto' }}
            >
                <ScrollProgressBar />

                <h1 className="text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                    {post.meta.title}
                </h1>

                <div className="flex items-center !w-full text-gray-700 dark:text-gray-300">
                    <div className="flex items-center gap-2 flex-wrap w-full justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-[40px]">
                                <Image
                                    height={933}
                                    width={933}
                                    alt="Minato Hayashi"
                                    src="/images/profile.jpg"
                                    className="rounded-full !m-0"
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center text-sm gap-1">
                                    <Link
                                        href="/about"
                                        className="text-sm font-medium hover:underline"
                                    >
                                        Minato Hayashi
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="py-1 px-2 text-xs rounded-md bg-white text-black dark:bg-darkSecondary dark:text-gray-400">
                                {getFormattedDate(new Date(post.meta.date))}
                            </div>
                            <div className="py-1 px-2 text-xs rounded-md bg-white text-black dark:bg-darkSecondary dark:text-gray-400">
                                {post.meta.readingTime.text}
                            </div>
                            <div className="py-1 px-2 text-xs rounded-md bg-white text-black dark:bg-darkSecondary dark:text-gray-400">
                                {post.meta.readingTime.words} words
                            </div>
                        </div>
                    </div>

                    <div className="ml-4 sm:place-self-center">
                        <button
                            title="Save for later"
                            className="transition active:scale-75 mt-2 sm:mt-1"
                            onClick={() => {
                                alreadyBookmarked
                                    ? removeFromBookmark(post.meta.slug)
                                    : addToBookmark(post.meta.slug);
                            }}
                        >
                            {alreadyBookmarked ? (
                                <BsBookmarkFill className="w-6 h-6" />
                            ) : (
                                <BsBookmark className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
                <AnimatedDiv
                    variants={opacityVariant}
                    className="max-w-full prose-sm blog-container sm:prose-base prose-pre:bg-white prose-img:mx-auto prose-img:rounded-md dark:prose-pre:bg-darkSecondary prose-pre:saturate-150 dark:prose-pre:saturate-100 marker:text-black dark:marker:text-white prose-h4:!mb-6"
                >
                    {children}
                </AnimatedDiv>
            </section>
        </section>
    );
}
