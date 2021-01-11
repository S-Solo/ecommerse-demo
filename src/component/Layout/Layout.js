import React from 'react';
import Footer from '../Footer/Footer';

import './Layout.scss';

const Layout = ({ children }) => {
    return (
        <div className="app-layout">
            <main className="app-layout-content">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;