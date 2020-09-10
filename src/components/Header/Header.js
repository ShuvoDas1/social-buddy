import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/posts">Posts</a>
                <a href="/details">Post Details</a>
                
            </nav>
        </div>
    );
};

export default Header;