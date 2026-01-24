'use client';

import React from 'react';
import Link from 'next/link';
import clsx from "clsx";
import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname } from 'next/navigation';
import { NavLink } from "@/app/components/definitions";

interface Props {
    link: NavLink
};

export default function NavLinkComponent({ link }: Props) {
  const pathname = usePathname();

  // Determine if the link is active.
  // Use startsWith for sub-navigation items (e.g., /blog/post-1 should match /blog).
  const isActive = pathname.startsWith(link.href);

  const onClickEvent = (val: NavLink) => {
      sendGTMEvent({ event: "click", value: val.name });
  };

  // Define Tailwind CSS classes (adjust as needed)
  const activeClassName = 'active';
  const defaultClassName = '';
  const newTabProps = link.newWindow
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};

  return (
    <Link
      href={link.href}
      onClick={() => onClickEvent(link)}
      className={clsx(
        `${link.class} ${defaultClassName} ${isActive ? activeClassName : ''}
        ${link.mainNav ? 
            `nav-link flex h-[30px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium
            md:flex-none md:justify-start md:p-2 md:px-3 text-bg-${link.class} hover:text-${link.class}-emphasis`
            : ''}`
      )}
      key={link.name}
      {...newTabProps}
    >
      {link.name}
    </Link>
  );
};
