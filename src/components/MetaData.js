import Head from 'next/head';

export default function MetaData({ title, description, keywords }) {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="description" content={description || 'Minato Hayashi'} />
            <title>{title || 'Minato Hayashi'}</title>
            <meta name="theme-color" content="#000" />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/images/icons/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/images/icons/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/images/icons/favicon-16x16.png"
            />
            <link rel="manifest" href="/manifest.json" />
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="author" content="Minato Hayashi"></meta>
            <meta name="robots" content="index,follow" />
            <meta name="keywords" content={`${keywords || ''}Minato Hayashi,Minato,minato`} />
        </Head>
    );
}
