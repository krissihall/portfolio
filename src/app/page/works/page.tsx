import type { Metadata } from "next";
import "@/app/assets/scss/pages/works.scss";

export const metadata: Metadata = {
    title: "Works",
    description: "This is the works page",
};

export default function Works() {
    return (
        <main className="works-container">
            <h1>Works</h1>
            <section className="rounded-box">
                <p>
                    Below are some examples of some of the work and projects I've worked on during my career.
                    Each section will contain more information on different types of work I have skills using.
                </p>    
            </section>
        </main>
    );
}
