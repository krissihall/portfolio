import Image from 'next/image';
import Link from 'next/link';
import Navigation from "@/app/components/general/navigation";

export default function Header() {
    return (
        <header className="sticky top-0 bg-gray-800">
            <div className="container flex flex-row flex-nowrap justify-between ml-auto mr-auto">
                <div className="logo flex pt-3 pb-3 pl-3">
                    <Link href="/">
                        <Image
                            src="/images/logo-tagline-white.svg"
                            width="280"
                            height="114"
                            alt="KH logo"
                            priority
                        />
                    </Link>
                </div>
                <Navigation />
            </div>
        </header>
    );
};
