import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Graphic Design Projects",
    description: "This is the graphic design project page",
};

export default function GraphicDesign() {
    return (
        <main className="graphic-design-container">
            <h1>Graphic Design Projects</h1>
        </main>
    );
}
