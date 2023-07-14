import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeContainer, popup } from '@/content/framerMotionVariants';
import { navigationRoutes } from '@/utils/utils';
import socialMedia from '@/content/socialMedia';
import { HiOutlineQrcode } from 'react-icons/hi';

export default function Footer({ setShowQR, showQR }) {
    return (
        <footer className="text-gray-600 dark:text-gray-400/50 w-screen font-inter mb-20 print:hidden">
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={FadeContainer}
                viewport={{ once: true }}
                className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl px-5 py-7 border-t-2 border-gray-200  dark:border-gray-400/10 mx-auto text-sm sm:text-base flex flex-col gap-5"
            >
                <section className="grid grid-cols-3 gap-10">
                    <div className="flex flex-col gap-4 capitalize">
                        {navigationRoutes.slice(0, 3).map((text, index) => {
                            return <FooterLink key={index} route={text} text={text} />;
                        })}
                    </div>
                    <div className="flex flex-col gap-4 capitalize">
                        {navigationRoutes.slice(3, navigationRoutes.length).map((route, index) => {
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
            </motion.div>
        </footer>
    );
}

function FooterLink({ route, text }) {
    return (
        <Link href={`/${route}`} passHref className="hover:text-black dark:hover:text-white w-fit">
            <motion.p variants={popup}>{text}</motion.p>
        </Link>
    );
}
