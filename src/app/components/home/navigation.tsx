"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";
import { NavLink } from "@/app/components/definitions";
import { links } from "@/app/components/data/navigation";
import style from "@/app/assets/scss/homepage/homepage.module.scss";
import { dasherize } from "@/app/helpers/dasherize";

interface Props {
    current: object;
    setCurrent: Dispatch<SetStateAction<NavLink>>;
};

export default function Navigation(props: Props) {
    const pathname = usePathname();

    return (
        <nav className={style.navigation}>
            <>
                {links.map((link: NavLink) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            onMouseOver={() => props.setCurrent(link)}
                            className={clsx(
                                `page-${dasherize(link.name)} ${style.link} ${style.linkAnimation} ${style.overlineLeftUnderlineRight} text-${link.class}`,
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
