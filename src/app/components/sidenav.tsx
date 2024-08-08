import Link from 'next/link';

export default function SideNav() {
    return (
        <div className="side-nav">
            <h2>Navigation</h2>
            <ul>
                <li>
                    <Link href="/" className="nav-link">Link Name</Link>
                </li>
            </ul>
        </div>
    );
};