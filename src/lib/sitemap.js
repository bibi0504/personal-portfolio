import path from 'path';
import { writeFileSync, readdirSync } from 'fs';
import MDXContent from './mdxContent';

export default async function generateSitemap() {
    const PAGE_PATH = path.join(process.cwd(), 'src', 'pages');

    const pages = readdirSync(PAGE_PATH)
        .filter((page) => page.endsWith('.jsx') && page.charAt(0) !== '_' && page !== '404.jsx')
        .map((page) => page.replace('.jsx', '').replace('index', ''));

    const blogs = await new MDXContent('posts').getSlugs().map((slug) => `blogs/${slug}`);

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${[...pages, ...blogs]
        .map((page) => {
            return `
    <url>
        <loc>${`https://minatohayashi.com/${page}`}</loc>
    </url>`;
        })
        .join('')}
</urlset>`;

    writeFileSync('./public/sitemap.xml', sitemap);
}
