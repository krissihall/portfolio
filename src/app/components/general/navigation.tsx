// "use client";

// import NavLink from "@/app/components/general/nav-link";
// import { links } from "@/app/components/data/navigation";

// export default function Navigation() {
//     return (
//         <nav className="navigation">
//             <>
//                 {links.map((link) => {
//                     <NavLink link={link} />
//                 })}
//             </>
//         </nav>
//     );
// };


"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { sendGTMEvent } from "@next/third-parties/google";
import { NavLink } from "@/app/components/definitions";
import { links } from "@/app/components/data/navigation";

export default function Navigation() {
    const pathname = usePathname();

    // Determine if the link is active.
    // Use startsWith for sub-navigation items (e.g., /blog/post-1 should match /blog).
    const isActive = (val: NavLink) => {
        return pathname.startsWith(val.href);
    };

    const onClickEvent = (val: NavLink) => {
        sendGTMEvent({ event: "click", value: val.name });
    };

    const activeClassName = 'active';

    return (
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
                                `text-bg-${link.class} hover:text-${link.class}-emphasis`,
                                isActive(link) ? `text-${link.class}-emphasis active` : ''
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
