"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";
import links from "@/app/components/data/navigation.json";
import style from "@/app/assets/scss/homepage/homepage.module.scss";

interface Props {
    current: string
    setCurrent: Dispatch<SetStateAction<string>>
}

export default function Navigation(props: Props) {
    const pathname = usePathname();

    return (
        <nav className={style.navigation}>
            <>
                {links.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            onMouseOver={() => props.setCurrent(link.class)}
                            className={clsx(
                                `${style.link} ${style.linkAnimation} ${style.overlineLeftUnderlineRight} text-${link.class}`,
                                {
                                    "active": pathname === link.href
                                }
                            )}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </>
        </nav>
    );
};
