"use client";
import React from 'react';
import { usePathname } from "next/navigation";
import Link from 'next/link';

const links = [
    {
        name: "home",
        path:"/"
    },
    {
        name: "services",
        path:"/services"
    },
    {
        name: "resume",
        path:"/resume"
    },
    {
        name: "work",
        path:"/work"
    },
    {
        name: "contact",
        path:"/contact"
    },
]

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return <Link key={index} href={link.path} className={`${link.path === pathname && "text-blue-500 border-b-2 border-blue-500 hover:text-blue-500 transition-all"} uppercase font-medium`}>
                    {link.name}
                </Link>; 
            })}
        </nav>
    );
};


export default Nav