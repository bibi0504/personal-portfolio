import MDXContent from '@/lib/mdxContent';
import StaticPage from '@/components/StaticPage';
import pageMeta from '@/content/meta';

export default function Privacy({ privacy }) {
    return <StaticPage meta={pageMeta.privacy} page={privacy} />;
}

export async function getStaticProps() {
    const { post: privacy } = await new MDXContent('static').getPostFromSlug('privacy');

    return {
        props: {
            privacy,
        },
    };
}
