"use client";

import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { FaStarOfLife } from "react-icons/fa";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            {/* SheetTrigger to open the menu */}
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-blue-400" />
            </SheetTrigger>

            {/* SheetContent for the navigation menu */}
            <SheetContent className="flex flex-col px-3">
                <div className="mt-20 mb-10 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-2xl font-semi-bold flex items-center">
                            Allen<span className="text-blue-500"><FaStarOfLife size={16} /></span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col items-center p-4 gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link 
                                href={link.path} 
                                key={index} 
                                className={` ${link.path === pathname && "text-blue-500 border-b-2 border-blue-500 "} text-xl capitalize hover:text-blue-500 transition-all`}
                                onClick={handleLinkClick} // Close the sheet on link click
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
