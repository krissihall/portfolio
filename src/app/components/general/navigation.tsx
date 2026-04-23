// "use client";

// import NavLink from "@/app/components/general/nav-link";
// import { links } from "@/app/data/navigation";

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
import { links } from "@/app/data/navigation";
import { useBootstrapBreakpoint } from '@/app/hooks/useBootstrapBreakpoint';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
    const bp = useBootstrapBreakpoint();
    const isMobile = bp === 'xs' || bp === 'sm' ? true : false;

    return (
        <nav className={`navigation ${isMobile ? 'dropdown dropdown-end' : ''}`}>
            {isMobile && (
                <div tabIndex={0} role="button" className="btn btn-primary m-1">
                    <FontAwesomeIcon icon={faBars} className="main-nav-expander" />
                </div>
            )}
            <ul className={`nav-items ${isMobile ? 'dropdown-content menu mobile-main-nav' : ''}`}>
                <>
                    {links.map((link: NavLink) => {
                        const newTabProps = link.newWindow
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {};
                        return (
                            <li className={`nav-item ${!link.isHidden ? '' : ' hidden'}`} key={link.name}>
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => onClickEvent(link)}
                                    className={clsx(
                                        "nav-link",
                                        `btn btn-${link.class}`,
                                        isActive(link) ? `active` : ''
                                    )}
                                    {...newTabProps}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </>
            </ul>
        </nav>
    );
};
