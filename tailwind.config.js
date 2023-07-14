/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        // Adding New Fonts
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
            sarina: ['Sarina', 'cursive'],
            barlow: ['Barlow', 'sans-serif'],
            mono: ['monospace'],
        },
        extend: {
            colors: {
                darkPrimary: '#181A1B',
                darkSecondary: '#25282A',
                darkWhite: '#f2f5fa',
            },
            listStyleType: {
                square: 'square',
                roman: 'upper-roman',
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
                'photo-spin': 'photo-spin 2s 1 linear forwards',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                'photo-spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
            screens: {
                // Custom Screen styles
                '3xl': '2000px',
                xs: '480px',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar-hide')],
};
