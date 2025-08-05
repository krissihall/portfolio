"use client";
import Link from 'next/link';
import { sendGTMEvent } from "@next/third-parties/google";

export default function SideNav() {
    const onClickEvent = (val: string) => {
        sendGTMEvent({ event: "click", value: val });
    };

    return (
        <div className="side-nav sticky">
            <h2>Navigation</h2>
            <ul>
                <li>
                    <Link
                        href="/page/works/graphic-design"
                        onClick={() => onClickEvent("Graphic Design")}
                        className="nav-link"
                    >
                        Graphic Design
                    </Link>
                    <Link
                        href="/page/works/development"
                        onClick={() => onClickEvent("Development")}
                        className="nav-link"
                    >
                        Development
                    </Link>
                </li>
            </ul>
            <div className="side-nav-footer">
                <Link
                    href="/page/works#top"
                    onClick={() => onClickEvent("Back to Top")}
                    className="nav-link back-to-top"
                >
                    Back to Top
                </Link>
            </div>
        </div>
    );
};