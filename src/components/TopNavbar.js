import React, { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import {
    fadeContainer,
    hamFastFadeContainer,
    mobileNavItemSideways,
    popup,
} from '@/content/framerMotionVariants';
import { useDarkMode } from '@/context/darkMode';
import { navigationRoutes } from '@/utils/utils';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function TobNavbar() {
    const router = useRouter();
    const navRef = useRef(null);

    const control = useAnimation();
    const [navOpen, setNavOpen] = useState(false);
    const { isDarkMode, changeDarkMode } = useDarkMode();

    // adding shadow, backdrop to the navbar as user scroll the screen
    const addShadowToNavbar = useCallback(() => {
        if (window.pageYOffset > 10) {
            navRef.current.classList.add(
                ...['shadow', 'backdrop-blur-xl', 'bg-white/70', 'dark:bg-darkSecondary']
            );

            control.start('visible');
        } else {
            navRef.current.classList.remove(
                ...['shadow', 'backdrop-blur-xl', 'bg-white/70', 'dark:bg-darkSecondary']
            );

            control.start('hidden');
        }
    }, [control]);

    useEffect(() => {
        window.addEventListener('scroll', addShadowToNavbar);

        return () => {
            window.removeEventListener('scroll', addShadowToNavbar);
        };
    });

    // to lock the scroll when mobile is open
    const lockScroll = () => {
        const root = document.getElementsByTagName('html')[0];
        root.classList.toggle('lock-scroll'); // class is define in the global.css
    };

    // to lock the scroll when user visit the mobile nav page
    const handleClick = () => {
        lockScroll();
        setNavOpen(!navOpen);
    };

    return (
        <div
            className="fixed w-full dark:text-white top-0 flex items-center justify-between px-4 py-[10px] sm:p-4 sm:px-6 z-50 print:hidden"
            ref={navRef}
        >
            {/* mobile navigation hamburger and mobile menu */}
            <Hamburger open={navOpen} handleClick={handleClick} />
            <AnimatePresence>
                {navOpen && <MobileMenu links={navigationRoutes} handleClick={handleClick} />}
            </AnimatePresence>

            <Link href="/" passHref>
                <div className="flex gap-2 items-center cursor-pointer z-50">
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={popup}
                        className="relative hidden sm:inline-flex mr-3"
                    >
                        <span className="font-sarina text-xl">MH</span>
                    </motion.p>
                    <motion.p
                        initial="hidden"
                        animate={control}
                        variants={{
                            hidden: { opacity: 0, scale: 1, display: 'none' },
                            visible: { opacity: 1, scale: 1, display: 'inline-flex' },
                        }}
                        className="absolute sm:!hidden w-fit left-0 right-0 mx-auto flex justify-center text-base font-sarina"
                    >
                        Minato Hayashi
                    </motion.p>
                </div>
            </Link>

            {/* top nav list */}
            <motion.nav className="hidden sm:flex z-10 md:absolute md:inset-0 md:justify-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeContainer}
                    className="flex items-center md:gap-2"
                >
                    {navigationRoutes.slice(0, 5).map((link, index) => {
                        return (
                            <NavItem key={index} href={`/${link}`} text={link} router={router} />
                        );
                    })}
                </motion.div>
            </motion.nav>

            {/* dark mode container */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={popup}
                className="cursor-pointer rounded-full z-30 transition active:scale-75"
                title="Toggle Theme"
                onClick={() => changeDarkMode(!isDarkMode)}
            >
                {isDarkMode ? (
                    <FiMoon className="h-6 w-6 sm:h-7 sm:w-7 select-none transition active:scale-75" />
                ) : (
                    <FiSun className="h-6 w-6 sm:h-7 sm:w-7 select-none transition active:scale-75" />
                )}
            </motion.div>
        </div>
    );
}

// NavItem container
function NavItem({ href, text, router }) {
    const isActive = router.asPath === (href === '/home' ? '/' : href);
    return (
        <Link
            href={href === '/home' ? '/' : href}
            passHref
            className={`${
                isActive
                    ? 'font-bold text-gray-800 dark:text-gray-100'
                    : ' text-gray-600 dark:text-gray-300'
            } sm:inline-block transition-all text-[17px] hidden px-2 md:px-3 py-[3px] hover:bg-gray-100 dark:hover:bg-neutral-700/50 rounded-md`}
        >
            <motion.p variants={popup} className="capitalize">
                {text}
            </motion.p>
        </Link>
    );
}

// hamburger button
function Hamburger({ open, handleClick }) {
    return (
        <motion.div
            style={{ zIndex: 1000 }}
            initial="hidden"
            animate="visible"
            variants={popup}
            className="sm:hidden"
        >
            {!open ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer select-none transform duration-300 rounded-md active:scale-50"
                    onClick={handleClick}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer select-none transform duration-300  rounded-md active:scale-50"
                    onClick={handleClick}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            )}
        </motion.div>
    );
}

function MobileMenu({ links, handleClick }) {
    return (
        <motion.div
            className="absolute font-normal bg-white dark:bg-darkPrimary w-screen h-screen top-0 left-0 z-10 sm:hidden"
            variants={hamFastFadeContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <motion.nav className="mt-28 mx-8 flex flex-col">
                {links.map((link, index) => {
                    const navLink = link.toLowerCase() === 'home' ? '/' : `/${link.toLowerCase()}`;
                    return (
                        <Link
                            href={navLink}
                            key={`mobileNav-${index}`}
                            passHref
                            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 font-semibold flex w-auto py-4 capitalize text-base cursor-pointer"
                            onClick={handleClick}
                        >
                            <motion.p variants={mobileNavItemSideways}>
                                {link === 'rss' ? link.toUpperCase() : link}
                            </motion.p>
                        </Link>
                    );
                })}
            </motion.nav>
        </motion.div>
    );
}
