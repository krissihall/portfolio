import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "This is the contact page",
};

export default function Contact() {
    return (
        <main className="contact-container container ml-auto mr-auto">
            <h1>Contact</h1>
        </main>
    );
};
