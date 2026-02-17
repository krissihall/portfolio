import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import "@/app/assets/scss/pages/works.scss";

export const metadata: Metadata = {
    title: "Photography Projects",
    description: "This is the logos project page",
};

export default function Photography() {
    return (
        <main className="logos-container container max-w-4xl ml-auto mr-auto pt-6">
            <h1>Photography</h1>
            <p>Here is where I will feature my photography whether for professional events or single customers.</p>
            <section className="work-card-container mt-4 d-flex gap-3">
                <div className="card text-bg-primary-lgt shadow-sm">
                    <Link
                        href="/page/works/photography/portraits"
                        className="no-hover"
                    >
                        <figure>
                            <Image
                                src="/images/photography/portraits.png"
                                alt="Photography Portraits Thumbnail"
                                className="img-responsive"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title text-primary-drk">Portraits</h3>
                            <p className="mb-0">
                                This section contains portraits taken from baby pictures to Senior photos.
                            </p>
                            <div className="mb-0 card-actions justify-end">
                                <button className="btn btn-primary">
                                    Check It Out!
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="card text-bg-primary-lgt shadow-sm">
                    <Link
                        href="/page/works/photography/events"
                        className="no-hover"
                    >
                        <figure>
                            <Image
                                src="/images/photography/events.png"
                                alt="Photography Events Thumbnail"
                                className="img-responsive"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title text-primary-drk">Events</h3>
                            <p className="mb-0">
                                This section contains photos taken at professional events.
                            </p>
                            <div className="mb-0 card-actions justify-end">
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
