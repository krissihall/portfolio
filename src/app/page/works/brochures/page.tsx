import type { Metadata } from "next";
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Brochures & Flyer Projects",
    description: "This is the brochures project page",
};

export default function Brochures() {
    return (
        <main className="logos-container container max-w-4xl ml-auto mr-auto pt-6">
            <h1>Brochure & Flyer Projects</h1>
            <p></p>

            <section className="work-card-container mt-4 d-flex gap-3">
                <div className="card text-bg-primary-lgt shadow-sm">
                    <figure className="p-4">
                        <Image
                            src="/images/graphic-design/logos/stinky-craft.svg"
                            alt="Stinky Craft Logo"
                            className="img-responsive"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </figure>
                    <div className="card-body">
                        <h3 className="card-title text-primary-drk">Stinky Craft Logo</h3>
                        <p className="mb-0">
                            This logo was created for a Minecraft server I hosted for my friends to hang out and play on. Many of the people on the 
                            server stream on Twitch or Youtube in their free time so I set up a website to help promote them and the server.
                        </p>
                        <div className="card-actions justify-end">
                            <a className="btn btn-primary">
                                Check It Out!
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
