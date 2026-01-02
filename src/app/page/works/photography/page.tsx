import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Photography Projects",
    description: "This is the logos project page",
};

export default function Photography() {
    return (
        <main className="logos-container container max-w-4xl ml-auto mr-auto pt-6">
            <h1>Photography</h1>
            <p>Here is where I will feature my photography whether for professional events or single customers.</p>
            <section className="work-card-container mt-4 d-flex gap-3">
                
            </section>
        </main>
    );
}
