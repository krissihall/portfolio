import type { Metadata } from "next";
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Brochures & Flyer Projects",
    description: "This is the brochures project page",
};

export default function Brochures() {
    return (
        <main className="brochures-container container max-w-4xl ml-auto mr-auto pt-6">
            <h1>Brochure & Flyer Projects</h1>
            <p>Below are some of the brochures, flyers, and other print projects I have worked on.</p>

            <section className="work-card-container mt-4 d-flex gap-3">
                <div className="card text-bg-primary-lgt shadow-sm">
                    <Link
                        href="/page/works/brochures/comec-z-fold"
                        className="no-hover"
                    >
                        <figure className="p-4">
                            <Image
                                src="/images/graphic-design/brochures/comec-z-fold.png"
                                alt="Comec Z-Fold Brochure"
                                className="img-responsive"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title text-primary-drk">Comec Z-Fold Brochure</h3>
                            <p className="mb-0">
                                This brochure was created for <a href="https://comecus.com" target="_blank">Comec US</a> particularly for use at
                                <a href="https://www.performanceracing.com/tradeshow" target="_blank">PRI Show 2025</a> in Indianapolis.
                                It is a brochure with general information about many of the popular machines used for engine rebuilding that are available for purchase.
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                    Check It Out!
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    );
}
