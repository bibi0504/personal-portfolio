export const fadeContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { delayChildren: 0, staggerChildren: 0.1 },
    },
};

export const hamFastFadeContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0,
            staggerChildren: 0.1,
        },
    },
};

export const mobileNavItemSideways = {
    hidden: { x: -40, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
    },
};

export const popup = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        opacity: 1,
        scale: 1,
    },
    transition: {
        type: 'spring',
    },
};

export const popupFromBottomForText = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 60,
        },
    },
};

export const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2 } },
};

export const fromLeftVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            stiffness: 100,
        },
    },
};
