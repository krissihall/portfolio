'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { links } from '@/app/data/navigation';
import { NavLink } from "../definitions";
import style from "@/app/assets/scss/homepage/homepage.module.scss";
import { dasherize } from "@/app/helpers/dasherize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function MobileNavigation() {
    const pathname = usePathname();

    return (
        <nav className="mobile-nav">
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-primary m-1">
                    <FontAwesomeIcon icon={faBars} className="main-nav-expander" />
                </div>
                <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm nav-items">
                    <>
                        {links.map((link: NavLink, index) => {
                            return (
                                <li className="nav-item" key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={clsx(
                                            `page-${dasherize(link.name)} btn btn-${link.class} ${link.isVisibleOnHome ? "" : "hidden"} nav-link`,
                                            {
                                                "active": pathname === link.href
                                            }
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </>
                </ul>
            </div>
        </nav>
    );
}
