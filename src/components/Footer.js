import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeContainer, opacityVariant, popup } from '@/content/framerMotionVariants';
import { navigationRoutes } from '@/utils/utils';
import socialMedia from '@/content/socialMedia';
import { HiOutlineQrcode } from 'react-icons/hi';

export default function Footer({ setShowQR, showQR }) {
    return (
        <footer className="text-gray-600 dark:text-gray-400/50 w-screen font-inter mb-20 print:hidden">
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeContainer}
                viewport={{ once: true }}
                className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl px-5 py-9 border-t-2 border-gray-200  dark:border-gray-400/10 mx-auto text-sm sm:text-base flex flex-col gap-5"
            >
                <section className="grid grid-cols-3 gap-10">
                    <div className="flex flex-col gap-4 capitalize">
                        {navigationRoutes.slice(0, 4).map((text, index) => {
                            return <FooterLink key={index} route={text} text={text} />;
                        })}
                    </div>
                    <div className="flex flex-col gap-4 capitalize">
                        {navigationRoutes.slice(4, navigationRoutes.length).map((route, index) => {
                            let text = route;
                            if (route === 'rss') text = 'RSS';
                            return <FooterLink key={index} route={route} text={text} />;
                        })}
                    </div>
                    <div className="flex flex-col gap-4 capitalize">
                        {socialMedia.map((platform, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={platform.url}
                                    passHref
                                    className="hover:text-black dark:hover:text-white w-fit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <motion.p variants={popup}>{platform.title}</motion.p>
                                </Link>
                            );
                        })}
                    </div>
                </section>

                <div className="w-full flex justify-end">
                    <div
                        className="bg-gray-700 text-white p-3 rounded-full cursor-pointer transition-all active:scale-90 hover:scale-105"
                        onClick={() => setShowQR(!showQR)}
                    >
                        <HiOutlineQrcode className="w-6 h-6" />
                    </div>
                </div>

                <motion.div
                    variants={opacityVariant}
                    className="flex items-center justify-center gap-2 mt-5 text-black dark:text-white"
                >
                    <span>Powered by</span>

                    <Link
                        target="_blank"
                        aria-label="Next.js"
                        rel="noreferrer"
                        href="https://nextjs.org"
                        className="font-semibold hover:underline"
                    >
                        Next.js
                    </Link>
                    <span>and</span>
                    <Link
                        target="_blank"
                        aria-label="Vercel"
                        rel="noreferrer"
                        href="https://vercel.com"
                        className="font-semibold hover:underline"
                    >
                        Vercel
                    </Link>
                </motion.div>
            </motion.div>
        </footer>
    );
}

function FooterLink({ route, text }) {
    let path = route;

    if (route === 'rss') path = 'feed.xml';
    else if (route === 'home') path = '';

    return (
        <Link href={`/${path}`} passHref className="hover:text-black dark:hover:text-white w-fit">
            <motion.p variants={popup}>{text}</motion.p>
        </Link>
    );
}
