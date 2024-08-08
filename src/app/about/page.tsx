import Image from 'next/image';

export default function About() {
    return (
        <main className="about-container">
            <h1>About Page</h1>
            <Image
                src="/images/moon-bw.jpg"
                width="300"
                height="200"
                alt="Moon photo"
            />
        </main>
    );
}
