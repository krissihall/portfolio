import Link from 'next/link';

export default function SideNav() {
    return (
        <div className="side-nav sticky">
            <h2>Navigation</h2>
            <ul>
                <li>
                    <Link href="/page/debug#text" className="nav-link">Text</Link>
                </li>
                <li>
                    <Link href="/page/debug#cssColors" className="nav-link">CSS Colors</Link>
                </li>
                <li>
                    <Link href="/page/debug#textColorOptions" className="nav-link">Text Color Options</Link>
                </li>
                <li>
                    <Link href="/page/debug#bgColorOptions" className="nav-link">Background Color Options</Link>
                </li>
                <li>
                    <Link href="/page/debug#buttonOptions" className="nav-link">Button Options</Link>
                </li>
            </ul>
            <div className="side-nav-footer">
                <Link href="/page/debug#top" className="nav-link back-to-top">Back to Top</Link>
            </div>
        </div>
    );
};
