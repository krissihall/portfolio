import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import "@/app/assets/scss/pages/works.scss";

export const metadata: Metadata = {
    title: "Logos Projects",
    description: "This is the logos project page",
};

export default function Logos() {
    return (
        <main className="logos-container container max-w-4xl ml-auto mr-auto pt-6">
            <h1>Logo Projects</h1>
            <p>Below are some logos I have created for either personal projects or for use by actual companies.</p>
            <section className="work-card-container mt-4 d-flex gap-3">
                <div className="card text-bg-primary-drk shadow-sm">
                    <figure className="p-4">
                        <Image
                            src="/images/graphic-design/logos/kh-logo-white.svg"
                            alt="Kristina L. Hall Logo"
                            className="img-responsive"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </figure>
                    <div className="card-body">
                        <h3 className="card-title text-primary-lgt">Kristina L. Hall Portfolio Site Logo</h3>
                        <p className="mb-0">
                            This is a logo created for my revamped portfolio site in 2025.
                        </p>
                    </div>
                </div>
                <div className="card text-bg-primary-lgt shadow-sm">
                    <figure className="p-4">
                        <Image
                            src="/images/graphic-design/logos/eye-see-you.svg"
                            alt="Eye See You Logo"
                            className="img-responsive"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </figure>
                    <div className="card-body">
                        <h3 className="card-title text-primary-drk">Eye See You Logo</h3>
                        <p className="mb-0">
                            This logo was created for a passion project for my photography hobby. I have done Senior photos for a few
                            family members and baby photos for a few as well.
                        </p>
                    </div>
                </div>
                <div className="card text-bg-primary-lgt shadow-sm">
                    <Link
                        href="https://kraftistrycreations.etsy.com"
                        target="_blank"
                        className="no-hover"
                    >
                        <figure className="p-4">
                            <Image
                                src="/images/graphic-design/logos/kraftistry-creations.svg"
                                alt="Kraftistry Creations Logo"
                                className="img-responsive"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title text-primary-drk">Kraftistry Creations Logo</h3>
                            <p className="mb-0">
                                This is a logo created for my Etsy shop called Kraftistry Creations.
                            </p>
                            <div className="card-actions justify-end">
                                <a className="btn btn-primary">
                                    Check It Out!
                                </a>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card text-bg-primary-lgt shadow-sm">
                    <figure className="p-4">
                        <Image
                            src="/images/graphic-design/logos/baileys-steel-and-supply.svg"
                            alt="Bailey's Steel & Supply Logo"
                            className="img-responsive"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </figure>
                    <div className="card-body">
                        <h3 className="card-title text-primary-drk">Bailey's Steel & Supply Logo</h3>
                        <p className="mb-0">
                            This logo was created for Bailey's Steel & Supply, which is a company located outside of Pittsburgh in Pennsylvania.
                        </p>
                    </div>
                </div>
                <div className="card text-bg-primary-lgt shadow-sm">
                    <Link
                        href="https://stinkycraft.us"
                        target="_blank"
                        className="no-hover"
                    >
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
                    </Link>
                </div>
            </section>
        </main>
    );
}

