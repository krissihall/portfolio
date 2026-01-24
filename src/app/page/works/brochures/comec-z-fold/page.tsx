import type { Metadata } from "next";
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Comec Z-Fold Brochure",
    description: "This z-fold brochure was created to highlight some of the most popular machines produced by Comec.",
};

export default function ComecZFold() {
    return (
        <main className="logos-container container max-w-4xl ml-auto mr-auto pt-6">
            <h1>Comec Z-Fold Brochure</h1>

            <section className="comec-z-fold-container rounded-box mt-4 d-flex flex-col gap-3">
                <p>
                    This is a Z-fold brochure created for <a href="https://comecus.com" target="_blank">Comec</a> with general information about popular machines
                    they produce for engine rebuilding. It was originally created for use during <a href="https://www.performanceracing.com/tradeshow" target="_blank">PRI Show </a>.
                </p>

                <h2>Brochure</h2>
                <Image
                    src="/images/graphic-design/brochures/comec-z-fold/side1_final.png"
                    alt="Comec Z-Fold Side 1 Brochure"
                    className="img-responsive"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                />
                <Image
                    src="/images/graphic-design/brochures/comec-z-fold/side2_final.png"
                    alt="Comec Z-Fold Side 2 Brochure"
                    className="img-responsive"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                />

                <h2>PRI Show 2025</h2>
                <Image
                    src="/images/graphic-design/brochures/comec-z-fold/side2_final.png"
                    alt="Comec Z-Fold Side 2 Brochure"
                    className="img-responsive"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                />
            </section>
        </main>
    );
}
