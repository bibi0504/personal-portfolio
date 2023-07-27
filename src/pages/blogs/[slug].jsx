import BlogLayout from '@/layout/BlogLayout';
import MetaData from '@/components/MetaData';
import PageNotFound from '@/pages/404';
import MDXContent from '@/lib/mdxContents';
import { MDXRemote } from 'next-mdx-remote';
import 'highlight.js/styles/atom-one-dark.css';

export default function BlogPost({ post, error }) {
    if (error) {
        return <PageNotFound />;
    }

    return (
        <>
            <MetaData
                title={post.meta.title}
                description={post.meta.description}
                keywords={post.meta.keywords}
            />
            <BlogLayout post={post}>
                <MDXRemote {...post.content} frontmatter={post.meta} />
            </BlogLayout>
        </>
    );
}

// generating the page for each post
export async function getStaticProps({ params }) {
    const { slug } = params;
    const { post } = await new MDXContent('posts').getPostFromSlug(slug);

    if (post != null) {
        return {
            props: {
                error: false,
                post: {
                    meta: post.meta,
                    content: post.content,
                },
            },
        };
    } else {
        return {
            props: {
                error: true,
                post: null,
            },
        };
    }
}

// generating all possible paths for the slug
export async function getStaticPaths() {
    const paths = new MDXContent('posts').getSlugs().map((slug) => ({
        params: {
            slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}
