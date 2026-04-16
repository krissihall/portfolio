"use client";
import { useState, useEffect } from 'react';
import { Breakpoint } from './break-point';
// import Link from 'next/link';
// import { sendGTMEvent } from "@next/third-parties/google";
// import { generateID } from '@/app/helpers/generate-id';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faC, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function SideNav() {
    const [width, setWidth] = useState<number | undefined>(undefined);

    useEffect(() => {
        // Handler to call on window resize
        const handleResize = () => setWidth(window.innerWidth);
        
        // Set initial width
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id="debugInfo" className="debug-info-box">
            <span className="info-line"><strong>Current Width</strong>: {width ?? 'Loading...'}px</span>
            <span className="info-line"><strong>Current Breakpoint</strong>: <Breakpoint /></span>
        </div>
    );
};
