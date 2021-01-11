import React, { useState } from 'react';

import './Header.scss';

const Header = () => {
    const [userState, setUserState] = useState(null);


    return (
        <div className="app-header">
            Header
        </div>
    )
}

export default Header;
