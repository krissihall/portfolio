import Link from 'next/link';

export default function SideNav() {
    return (
        <div className="side-nav sticky">
            <h2>Navigation</h2>
            <ul>
                <li>
                    <Link href="/" className="nav-link">Link Name</Link>
                </li>
            </ul>
            <div className="side-nav-footer">
                <Link href="/page/works#top" className="nav-link back-to-top">Back to Top</Link>
            </div>
        </div>
    );
};