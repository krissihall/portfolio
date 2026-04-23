'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { sendGTMEvent } from '@next/third-parties/google';
import { NavLink } from '@/app/components/definitions';
import { links } from '@/app/data/navigation';
import style from '@/app/assets/scss/homepage/homepage.module.scss';
import { dasherize } from '@/app/helpers/dasherize';

interface Props {
    current: object;
    setCurrent: Dispatch<SetStateAction<NavLink>>;
};

export default function Navigation(props: Props) {
    const pathname = usePathname();
    let delayTimer: number = Number(2);

    const mouseOverEvent = (val: NavLink) => {
        props.setCurrent(val);
        // sendGTMEvent("event", "onMouseOver", { value: val.name });
        sendGTMEvent({ event: "mouseOver", value: val.name });
    };

    const onClickEvent = (val: NavLink) => {
        sendGTMEvent({ event: "click", value: val.name });
    };

    return (
        <nav className={`${style.navigation}`}>
            <>
                {links.map((link: NavLink) => {
                    delayTimer += Number(0.25);
                    Number(delayTimer);
                    return (
                        <motion.div
                            className={style.navLink + `${ link.isVisibleOnHome ? "" : " hide"}`}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: delayTimer, ease: "easeInOut" }}
                            exit={{ opacity: 0, y: -20 }}
                            key={link.name}
                        >
                            <Link
                                href={link.href}
                                onMouseOver={() => mouseOverEvent(link)}
                                onClick={() => onClickEvent(link)}
                                className={clsx(
                                    `page-${dasherize(link.name)} ${style.link} ${style.linkAnimation}
                                        ${style.overlineLeftUnderlineRight} text-${link.class}
                                        ${link.isVisibleOnHome ? "" : " hidden"}`,
                                    {
                                        "active": pathname === link.href
                                    }
                                )}
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    );
                })}
            </>
        </nav>
    );
};
