import type { NextPage, Metadata } from "next";
import ContactForm from "@/app/components/contact/contact-form";

export const metadata: Metadata = {
    title: "Contact",
    description: "This is the contact page",
};

const Page: NextPage = () => {
    return (
        <main className="contact-container container ml-auto mr-auto">
            <h1>Contact</h1>

            <ContactForm />
        </main>
    );
};

export default Page;
