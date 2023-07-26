import { writeFileSync } from 'fs';
import MDXContent from '@/lib/mdxContent';
import RSS from 'rss';

export default async function getRSS() {
    const siteURL = 'https://minatohayashi.com';
    const allBlogs = new MDXContent('posts').getAllPosts();

    // create a new RSS feed object
    const feed = new RSS({
        title: 'Minato Hayashi',
        description: `I've been writing online since 2021, mostly about web development and tech careers. In total, I've written ${allBlogs.length} articles till now.`,
        site_url: siteURL,
        feed_url: `${siteURL}/feed.xml`,
        language: 'en',
        pubDate: new Date(),
        copyright: `All rights reserved ${new Date().getFullYear()}, Minato Hayashi`,
    });

    // add all blog posts to the RSS feed
    allBlogs?.map((post) => {
        feed.item({
            title: post.title,
            url: `${siteURL}/blogs/${post.slug}`,
            date: post.date,
            description: post.description,
        });
    });

    // write the RSS feed to a file
    writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}
