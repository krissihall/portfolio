import type { Metadata } from "next";
import Image from 'next/image';
import "@/app/assets/scss/pages/graphic-design.scss";

export const metadata: Metadata = {
    title: "Comec Z-Fold Brochure",
    description: "This z-fold brochure was created to highlight some of the most popular machines produced by Comec.",
};

export default function ComecZFold() {
    return (
        <main className="brochures-container container max-w-4xl ml-auto mr-auto pt-6">
            <h1>Comec Z-Fold Brochure</h1>

            <section className="comec-z-fold-container rounded-box mt-4 d-flex flex-col gap-3">
                <p>
                    This is a Z-fold brochure created for <a href="https://comecus.com" target="_blank">Comec</a> with general information about popular machines
                    they produce for engine rebuilding. It was originally created for use during <a href="https://www.performanceracing.com/tradeshow" target="_blank">PRI Show </a>.
                </p>

                <h2>Brochure</h2>
                <div className="brochure-pieces flex flex-row justify-evenly gap-3 mb-4">
                    <Image
                        src="/images/graphic-design/brochures/comec-z-fold/side-1.png"
                        alt="Comec Z-Fold Side 1 Brochure"
                        className="img-responsive"
                        width={0}
                        height={0}
                        sizes="49vw"
                        style={{ width: '49%', height: 'auto' }}
                    />
                    <Image
                        src="/images/graphic-design/brochures/comec-z-fold/side-2.png"
                        alt="Comec Z-Fold Side 2 Brochure"
                        className="img-responsive"
                        width={0}
                        height={0}
                        sizes="49vw"
                        style={{ width: '49%', height: 'auto' }}
                    />
                </div>

                <h2>PRI Show 2025</h2>
                <Image
                    src="/images/graphic-design/brochures/comec-z-fold/brochure-table.png"
                    alt="Comec Z-Fold Side 2 Brochure"
                    className="img-responsive"
                    width={0}
                    height={0}
                    sizes="50vw"
                    style={{ width: '50%', height: 'auto' }}
                />
            </section>
        </main>
    );
}
