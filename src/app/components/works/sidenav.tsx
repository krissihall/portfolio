"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import { sendGTMEvent } from "@next/third-parties/google";
import { generateID } from '@/app/helpers/generate-id';

export default function SideNav() {
    const eleId = `sidenav-${generateID()}`;

    useEffect(() => {
        const init = async () => {
            const { Collapse, Ripple, initTWE } = await import("tw-elements");
            initTWE({ Collapse, Ripple });
        };
        init();
    }, []);

    const onClickEvent = (val: string) => {
        sendGTMEvent({ event: "click", value: val });
    };

    return (
        <div className="side-nav sticky">
            <h2>Navigation</h2>
            <ul className="nav">
                <li className="nav-item">
                    <span
                        className="nav-header collapse-link"
                        data-twe-collapse-init
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        data-twe-target={`#${eleId}`}
                        aria-expanded="false"
                        aria-controls={eleId}
                    >
                        Graphic Design
                    </span>              
                    <ul
                        className="nav !visible hidden collapse-content"
                        id={eleId}
                        data-twe-collapse-item
                    >
                        <li className="nav-item">
                            <Link
                                href="/page/works/logos"
                                onClick={() => onClickEvent("Logo")}
                                className="nav-link"
                            >
                                Logos
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link
                        href="/page/works/development"
                        onClick={() => onClickEvent("Development")}
                        className="nav-link"
                    >
                        Development
                    </Link>
                </li>
                <li className="nav-item footer-item">
                    <Link
                        href="/page/works#top"
                        onClick={() => onClickEvent("Back to Top")}
                        className="nav-link back-to-top"
                    >
                        Back to Top
                    </Link>
                </li>
            </ul>
        </div>
    );
};