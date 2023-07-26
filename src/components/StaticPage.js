import { MDXRemote } from 'next-mdx-remote';
import MetaData from '@/components/MetaData';
import PageTop from '@/components/PageTop';
import AnimatedDiv from '@/components/FramerMotion/AnimatedDiv';
import { opacityVariant } from '@/content/framerMotionVariants';

export default function StaticPage({ meta, page }) {
    return (
        <>
            <MetaData title={meta.title} description={meta.description} keywords={meta.keywords} />

            <section className="pageTop">
                <PageTop pageTitle={page.meta.title} />
                <AnimatedDiv
                    variants={opacityVariant}
                    className="max-w-full prose dark:prose-invert"
                >
                    <MDXRemote {...page.content} frontmatter={page.meta} />
                </AnimatedDiv>
            </section>
        </>
    );
}
