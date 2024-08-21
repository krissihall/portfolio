import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About",
    description: "This is the about page",
};

export default function About() {
    return (
        <main className="about-container container ml-auto mr-auto">
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
