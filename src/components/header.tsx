import { Link } from 'gatsby';
import React from 'react';

export const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
        </nav>
    );
};
