import { Link } from 'gatsby';
import React from 'react';

export const Header = () => {
    return (
        <nav className="flex justify-center gap-6 p-4 font-bold text-lg">
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
            <Link to="/сurrency">Currency</Link>
        </nav>
    );
};
