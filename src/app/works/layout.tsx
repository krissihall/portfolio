'use client';
import React, { useState, useEffect, useRef } from 'react'
import Header from '@/app/components/general/header';
import Footer from '@/app/components/general/footer';
import SideNav from '@/app/components/works/sidenav';
import { useBootstrapBreakpoint } from '@/app/hooks/useBootstrapBreakpoint';

export default function Layout({ children }: { children: React.ReactNode }) {
    const bp = useBootstrapBreakpoint();
    const isMobile = bp === 'xs' || bp === 'sm' ? true : false;

    const [isShrunk, setIsShrunk] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollThreshold = 50; // Pixels to scroll before shrinking

    useEffect(() => {
        const handleScroll = () => {
        // Access the scroll position of the specific div using the ref
        if (scrollRef.current) {
            const scrollTop = scrollRef.current.scrollTop;
            
            if (scrollTop > scrollThreshold) {
                setIsShrunk(true);
            } else {
                setIsShrunk(false);
            }
        }
        };

        const currentScrollRef = scrollRef.current;
        if (currentScrollRef) {
            // Add event listener to the specific div
            currentScrollRef.addEventListener('scroll', handleScroll);
        }

        // Cleanup the event listener when the component unmounts
        return () => {
            if (currentScrollRef) {
                currentScrollRef.removeEventListener('scroll', handleScroll);
            }
        };
    }, []); // Empty dependency array ensures listener is added/removed once

    return (
        <div className="flex flex-col flex-1 flex-nowrap min-h-screen min-w-full">
            <Header isShrunk={isShrunk} />

            <div id="scrollContainer" ref={scrollRef} className={`content-container ${isShrunk ? 'slim' : ''}`}>
                <div className={`container-fluid side-nav-grid ${isMobile ? 'mobile' : ''}`}>
                    <SideNav />
                    <div className="side-nav-grid-content">
                        <div className="w-full flex-none md:w-64">{/* NOTE: This is just for spacing purposes */}</div>
                        <div className="md:overflow-y-auto md:p-12">{children}</div>
                    </div>
                </div>
            </div>
        
            <Footer />
        </div>
    );
};
