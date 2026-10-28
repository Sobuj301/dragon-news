import BreakingNews from '@/components/BreakingNews';
import Header from '@/components/share/Header';
import Navbar from '@/components/share/Navbar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <BreakingNews />
            <Navbar />
            {children}
        </div>
    );
};

export default MainLayout;