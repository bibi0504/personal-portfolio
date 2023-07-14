import React, { useState, useEffect, useContext, createContext } from 'react';

const DarkModeContext = createContext(undefined);

export function DarkModeProvider({ children }) {
    const [isDarkMode, setDarkMode] = useState(false);

    const updateTheme = () => {
        const currentTheme = localStorage.getItem('isDarkMode') || 'false';

        if (currentTheme === 'true') {
            document.body.classList.add('dark');
            setDarkMode(true);
        } else {
            document.body.classList.remove('dark');
            setDarkMode(false);
        }
    };

    useEffect(() => {
        updateTheme();
    }, []);

    const changeDarkMode = (value) => {
        localStorage.setItem('isDarkMode', value.toString());
        updateTheme();
    };

    return (
        <DarkModeContext.Provider value={{ isDarkMode, changeDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);

    if (context === undefined) {
        throw new Error('dark mode context error');
    }

    return context;
};
