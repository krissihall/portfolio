"use client";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";

export default function SideNav() {
    const onClickEvent = (val: string) => {
        sendGTMEvent({ event: "click", value: val });
    };

    return (
        <div className="side-nav sticky">
            <h2>Navigation</h2>
            <ul className="nav">
                <li className="nav-item">
                    <Link
                        href="/page/debug#text"
                        onClick={() => onClickEvent("debug text anchor")}
                        className="nav-link"
                    >
                        Text
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        href="/page/debug#cssColors"
                        onClick={() => onClickEvent("debug css color anchor")}
                        className="nav-link"
                    >
                        CSS Colors
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        href="/page/debug#textColorOptions"
                        onClick={() => onClickEvent("debug text color options anchor")}
                        className="nav-link"
                    >
                        Text Color Options
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        href="/page/debug#bgColorOptions"
                        onClick={() => onClickEvent("debug bg color options anchor")}
                        className="nav-link"
                    >
                        Background Color Options
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        href="/page/debug#buttonOptions"
                        onClick={() => onClickEvent("debug button options anchor")}
                        className="nav-link"
                    >
                        Button Options
                    </Link>
                </li>
                <li className="nav-item footer-item">
                    <Link
                        href="/page/debug#top"
                        onClick={() => onClickEvent("Back to Top anchor")}
                        className="nav-link back-to-top"
                    >
                        Back to Top
                    </Link>
                </li>
            </ul>
        </div>
    );
};
