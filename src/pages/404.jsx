import React from 'react';
import Link from 'next/link';
import MetaData from '@/components/MetaData';

export default function PageNotFound() {
    return (
        <>
            <MetaData title="404 - Page not found" description="Page not found" />

            <section className="pageTop flex flex-col gap-5 md:pt-20">
                <h1 className="font-bold font-barlow text-3xl md:text-5xl uppercase dark:text-white">
                    Stay calm and don't freak out!
                </h1>
                <p className="font-inter text-gray-500 dark:text-gray-400/70">
                    Looks like you've found doorway to the great nothing. You didn't break the
                    internet, but I can't find what you looking for. Please visit my <b>Homepage</b>{' '}
                    to get where you need to go.
                </p>
            </section>
        </>
    );
}
