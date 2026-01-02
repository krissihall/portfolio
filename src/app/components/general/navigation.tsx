"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { sendGTMEvent } from "@next/third-parties/google";
import { NavLink } from "@/app/components/definitions";
import { links } from "@/app/components/data/navigation";

export default function Navigation() {
    const pathname = usePathname();

    const onClickEvent = (val: NavLink) => {
        sendGTMEvent({ event: "click", value: val.name });
    };

    return (
        // <nav className="navigation flex flex-nowrap items-end gap-2 pt-3 pb-3 pr-3">
        <nav className="navigation">
            <>
                {links.map((link: NavLink) => {
                    const newTabProps = link.newWindow
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {};
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => onClickEvent(link)}
                            className={clsx(
                                "nav-link",
                                // "flex h-[30px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                                // {
                                //     "bg-sky-100 text-blue-600": pathname === link.href
                                // },
                                `text-bg-${link.class} hover:text-${link.class}-emphasis`,
                            )}
                            {...newTabProps}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </>
        </nav>
    );
};
