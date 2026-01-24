'use client';

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Navigation from "@/app/components/general/navigation";
import clsx from 'clsx';

interface Props {
    isShrunk: boolean,
}

export default function Header({ isShrunk }: Props) {
    return (
        <header className={clsx(`sticky top-0 bg-gray-900 ${isShrunk ? 'slim' : ''}`)}>
            <div className="container flex flex-row flex-nowrap justify-between ml-auto mr-auto">
                <div className="logo flex pt-3 pb-3 pl-3">
                    <Link href="/">
                        <Image
                            src="/images/logo-tagline-white.svg"
                            className="full-logo"
                            width="280"
                            height="114"
                            alt="KH logo"
                            title="Krisina L. Hall - Front-End Developer"
                            priority
                        />
                        <Image
                            src="/images/logo-white.svg"
                            className="mini-logo"
                            width="63"
                            height="50"
                            alt="KH logo"
                            title="Krisina L. Hall - Front-End Developer"
                            priority
                        />
                    </Link>
                </div>
                <Navigation />
            </div>
        </header>
    );
};
