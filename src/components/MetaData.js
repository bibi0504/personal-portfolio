import Head from 'next/head';

export default function MetaData({ title, description, keywords, suffix }) {
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
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link>
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="author" content="Minato Hayashi"></meta>
            <meta name="robots" content="index,follow" />
            <meta
                name="keywords"
                content={`${keywords || ''} Minato, Minato Hayashi, minato, minato_`}
            />
        </Head>
    );
}
