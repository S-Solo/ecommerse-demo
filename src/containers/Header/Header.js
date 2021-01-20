import React, { useEffect, useState } from 'react';

import './Header.scss';

const Header = () => {
    const [hasBackround, setHasBackground] = useState(false);

    const handleScroll = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 20) {
            setHasBackground(!hasBackround)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`app-header ${hasBackround ? 'app-header-green' : ''}`}        >
            Header
        </div>
    )
}

export default Header;
