import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Eye See You Photography",
    description: "This is a photography website to display photo sessions and list pricing to have your own photoshoot.",
};

export default function StinkyCraft() {
    return (
        <main className="development-container container max-w-4xl ml-auto mr-auto pt-6">
            <h1>Eye See You Photography</h1>
            <p>
                
            </p>
            <section className="rounded-box d-block">
                <h2>Eye See You Photography</h2>
                <div className="float-right w-5/12 pr-4">
                    <Link href="/images/development/eyeseeyou/eyeseeyou.png" target="_blank">
                        <Image
                            src="/images/development/eyeseeyou/eyeseeyou-thumb.png"
                            alt="Stinky Craft Homepage"
                            className="img-responsive"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Link>
                </div>
                <p className="mb-4">
                    I am a self-taught photographer that enjoys taking beautiful photos. I have been working with Photoshop
                    and other editing software for over 20 years and enjoy bringing the beauty out in every photograph. I
                    have done photos for Seniors, babies, &amp; events. I enjoy photography and have a few different cameras
                    that I use while taking photos.
                </p>
                <p className="mb-4">
                    This website is a work in progress and will eventually have a portal for customers to look at and select
                    the photos that they like the best for retouching.
                </p>
                <p className="text-right">
                    <Link href="https://www.eyeseeyou.us/" target="_blank" className="btn btn-primary">
                        Visit Website
                    </Link>
                </p>
            </section>
        </main>
    );
}
