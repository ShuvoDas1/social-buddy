import React from 'react';
import './Header.css'


const Header = () => {

    return (
        <div>
             <h1>Social Buddy</h1>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order review</a>
                <a href="/inventory">Manage inventory here</a>
            </nav>
        </div>


    );
};

export default Header;