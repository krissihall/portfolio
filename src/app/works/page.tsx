import type { Metadata } from "next";
import Link from 'next/link';
import Image from 'next/image';
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
            <section className="work-card-container mt-4 d-flex gap-3">
                <div className="card text-bg-primary-lgt shadow-sm">
                    <Link
                        href="/page/works/brochures"
                        className="no-hover"
                    >
                        <figure>
                            <Image
                                src="/images/graphic-design/brochures-card-image.png"
                                className="img-responsive"
                                alt="Brochures Card Image"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </figure>
                        <div className="card-body">
                                <h3 className="card-title text-primary-drk">Brochures</h3>
                                <p className="mb-0">Here are some brochures and flyers I've made for different events or companies.</p>
                                <div className="card-actions justify-end">
                                    <button
                                        className="btn btn-primary"
                                    >
                                        Check It Out!
                                    </button>
                                </div>
                        </div>
                    </Link>
                </div>
                <div className="card text-bg-primary-lgt shadow-sm">
                    <Link
                        href="/page/works/logos"
                        className="no-hover"
                    >
                        <figure>
                            <Image
                                src="/images/graphic-design/logos-card-image.png"
                                className="img-responsive"
                                alt="Logos Card Image"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title text-primary-drk">Logos</h3>
                            <p className="mb-0">Check out some of the logos I've worked on.</p>
                            <div className="card-actions justify-end">
                                <button
                                    className="btn btn-primary"
                                >
                                    Check It Out!
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card text-bg-primary-lgt shadow-sm">
                    <Link
                        href="/page/works/development"
                        className="no-hover"
                    >
                        <figure>
                            <Image
                                src="/images/graphic-design/development-card-image.png"
                                className="img-responsive"
                                alt="Development Card Image"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title text-primary-drk">Development</h3>
                            <p className="mb-0">Check out some of the websites, applications, or source code of some of the development projects I have worked on.</p>
                            <div className="card-actions justify-end">
                                <button
                                    className="btn btn-primary"
                                >
                                    Check It Out!
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card text-bg-primary-lgt shadow-sm">
                    <Link
                        href="/page/works/photography"
                        className="no-hover"
                    >
                        <figure>
                            <Image
                                src="/images/graphic-design/photography-card-image.png"
                                className="img-responsive"
                                alt="Photography Card Image"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </figure>
                        <div className="card-body">
                                <h3 className="card-title text-primary-drk">Photography</h3>
                                <p className="mb-0">Here is where I will feature my photography whether for professional events or single customers.</p>
                                <div className="card-actions justify-end">
                                    <button
                                        className="btn btn-primary"
                                    >
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
