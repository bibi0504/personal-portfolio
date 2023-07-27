import { useState, useEffect } from 'react';

const useBookmarkedBlogs = (key, defaultValue) => {
    const [bookmarkedBlogs, setBookmarkedBlogs] = useState(() => {
        let currentValue;

        try {
            currentValue = JSON.parse(localStorage.getItem(key)) || defaultValue;
        } catch (error) {
            currentValue = defaultValue;
        }

        return currentValue;
    });

    // try to get the data from local storage
    const getValue = () => {
        const data = JSON.parse(localStorage.getItem(key));
        if (data === null) {
            localStorage.setItem(key, JSON.stringify([]));
            return JSON.parse(localStorage.getItem(key));
        }

        return data;
    };

    // add blog as bookmark
    const addToBookmark = (blogToBookmark) => {
        const data = getValue();
        if (data.filter((blog) => blog.slug === blogToBookmark.slug).length === 0) {
            data.unshift(blogToBookmark);
            setBookmarkedBlogs(data);
        }
    };

    // remove blog from bookmark
    const removeFromBookmark = (blogToRemove) => {
        const data = getValue();
        setBookmarkedBlogs(data.filter((blog) => blog.slug !== blogToRemove.slug));
    };

    const isAlreadyBookmarked = (searchBySlug) => {
        return bookmarkedBlogs.map((blog) => blog.slug === searchBySlug).includes(true);
    };

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(bookmarkedBlogs));
    }, [key, bookmarkedBlogs]);

    return {
        bookmarkedBlogs,
        addToBookmark,
        removeFromBookmark,
        isAlreadyBookmarked,
    };
};

export default useBookmarkedBlogs;
