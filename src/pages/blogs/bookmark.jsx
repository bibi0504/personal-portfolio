import { AnimatePresence } from 'framer-motion';
import { fadeContainer } from '@/content/framerMotionVariants';
import Blog from '@/components/Blog';
import MetaData from '@/components/MetaData';
import AnimatedDiv from '@/components/FramerMotion/AnimatedDiv';
import PageTop from '@/components/PageTop';
import useBookmarkedBlogs from '@/hooks/useBookmarkBlogs';
import pageMeta from '@/content/meta';

export default function Blogs() {
    const { bookmarkedBlogs } = useBookmarkedBlogs('blogs', []);

    return (
        <>
            <MetaData
                title={pageMeta.bookmark.title}
                description={pageMeta.bookmark.description}
                keywords={pageMeta.bookmark.keywords}
            />

            <section className="flex flex-col gap-2 pageTop text-neutral-900 dark:text-neutral-200">
                <PageTop pageTitle="Bookmarks">
                    Here you can find articles bookmarked by you for later use.
                </PageTop>

                <section className="relative py-5 px-2 flex flex-col gap-2 min-h-[60vh]">
                    <AnimatePresence>
                        {bookmarkedBlogs.length > 0 ? (
                            <AnimatedDiv
                                variants={fadeContainer}
                                className="grid grid-cols-1 gap-4 mx-auto"
                            >
                                {bookmarkedBlogs.map((blog) => (
                                    <Blog key={blog.id} blog={blog} />
                                ))}
                            </AnimatedDiv>
                        ) : (
                            <div className="mt-10 font-medium text-center font-inter dark:text-gray-400">
                                Nothing to see here.
                            </div>
                        )}
                    </AnimatePresence>
                </section>
            </section>
        </>
    );
}
