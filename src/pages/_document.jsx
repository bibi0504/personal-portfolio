import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Inter */}
                <link
                    rel="preload"
                    href="/fonts/Inter-var.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
                {/* Sarina */}
                <link
                    rel="preload"
                    href="/fonts/Sarina/Sarina-400.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />

                {/* Tailwind CSS Typography  */}
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/@tailwindcss/typography@0.4.x/dist/typography.min.css"
                />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
