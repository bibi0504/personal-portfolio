import MDXContent from '@/lib/mdxContent';
import StaticPage from '@/components/StaticPage';
import pageMeta from '@/content/meta';

export default function About({ about }) {
    return <StaticPage meta={pageMeta.about} page={about} />;
}

export async function getStaticProps() {
    const { post: about } = await new MDXContent('static').getPostFromSlug('about');

    return {
        props: {
            about,
        },
    };
}
