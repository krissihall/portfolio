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
            <section className="work-card-container mt-4 d-flex flex-wrap gap-3">
                <div className="card text-bg-primary-lgt shadow-sm" style={{maxWidth: 50 + "%"}}>
                    <figure>
                        <Image
                            src="/images/graphic-design/logos-card-image.png"
                            className="img-responsive"
                            alt="Flyers Card Image"
                            height={244}
                            width={576}
                        />
                    </figure>
                    <div className="card-body">
                        <h3 className="card-title text-primary-drk">Flyers</h3>
                        <p className="mb-0">Here are some flyers I've made for different events.</p>
                        <div className="card-actions justify-end">
                            <Link
                                href="/page/works/flyers"
                                className="btn btn-primary"
                            >
                                Check It Out!
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card text-bg-primary-lgt shadow-sm" style={{maxWidth: 50 + "%"}}>
                    <figure>
                        <Image
                            src="/images/graphic-design/logos-card-image.png"
                            className="img-responsive"
                            alt="Logos Card Image"
                            height={244}
                            width={576}
                        />
                    </figure>
                    <div className="card-body">
                        <h3 className="card-title text-primary-drk">Logos</h3>
                        <p className="mb-0">Check out some of the logos I've worked on.</p>
                        <div className="card-actions justify-end">
                            <Link
                                href="/page/works/logos"
                                className="btn btn-primary"
                            >
                                Check It Out!
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card text-bg-primary-lgt shadow-sm" style={{maxWidth: 50 + "%"}}>
                    <figure>
                        <Image
                            src="/images/graphic-design/development-card-image.png"
                            className="img-responsive"
                            alt="Development Card Image"
                            height={244}
                            width={576}
                        />
                    </figure>
                    <div className="card-body">
                        <h3 className="card-title text-primary-drk">Development</h3>
                        <p className="mb-0">Check out some of the websites, applications, or source code of some of the development projects I have worked on.</p>
                        <div className="card-actions justify-end">
                            <Link
                                href="/page/works/development"
                                className="btn btn-primary"
                            >
                                Check It Out!
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
