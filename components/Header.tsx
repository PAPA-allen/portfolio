import Link from 'next/link';
import React from 'react';
import Nav from './Nav';
import { Button } from './ui/button';
import { FaStarOfLife } from "react-icons/fa";
import MobileNav from './MobileNav';
import { ModeToggle } from './modeToggle';


const Header = () => {
    return (
        <header className="py-5 xl:py-10 mx-2">
            <div className="mx-auto max-w-7xl flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-2xl font-semi-bold flex items-center">Allen<span><FaStarOfLife size={15} className="text-blue-500" /></span></h1>
                </Link>
                {/* desktop nav */}

                <div className="hidden xl:flex items-center gap-5">
                    <ModeToggle />
                    <Nav />

                    <Link href="/contact">
                        <Button variant="outline">Get in Touch</Button></Link>

                </div>


                {/* mobile app */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header