import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Development Projects",
    description: "This is the development project page",
};

export default function Development() {
    return (
        <main className="development-container">
            <h1>Development Projects</h1>
        </main>
    );
}
