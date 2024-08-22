import type { Metadata } from "next";
import ThemeOptions from '@/app/components/debug/theme-options';

export const metadata: Metadata = {
    title: "Debug",
    description: "This is the debug page, it will be hidden from normal users",
};

export default function Debug() {
    return (
        <main className="debug-container container ml-auto mr-auto">
            <h1>Debug Page</h1>
            <p>Just listing available styles/etc build into the portfolio site.</p>
            <h2 id="text" className="mb-2">
                Text
                <a href="#text" className="anchor-link"></a>
            </h2>
            <div className="container-fluid border border-primary-drk rounded-2 p-2 mb-2">
                <h1>h1. This is an header tag</h1>
                <h2>h2. This is an header tag</h2>
                <h3>h3. This is an header tag</h3>
                <h4>h4. This is an header tag</h4>
                <h5>h5. This is an header tag</h5>
                <h6>h6. This is an header tag</h6>
            </div>
            <ThemeOptions />
        </main>
    )
}