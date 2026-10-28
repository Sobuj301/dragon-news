"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Suspense } from 'react';

const NavLinks = ({ href, children }) => {
    const pathName = usePathname()
    const isActive = pathName === href;
    return (
            <Link className={`${isActive ? "border-b-4" : ""}`} href={href}>{children}</Link>
    );
};

export default NavLinks;