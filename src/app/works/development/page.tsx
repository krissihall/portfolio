import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@/app/assets/scss/pages/development.scss";

export const metadata: Metadata = {
    title: "Development Projects",
    description: "This is the development project page",
};

export default function Development() {
    return (
        <main className="development-container events pt-6">
            <h1>Development Projects</h1>

            <section className="work-card-container mt-4 d-flex gap-3 flex-wrap">
                {/* <div className="card text-bg-primary-lgt shadow-sm">
                    <Link
                        href="/page/works/development/liviniti"
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
                            <h3 className="card-title text-primary-drk">Liviniti</h3>
                            <p className="mb-0">
                                
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                    Check It Out!
                                </button>
                            </div>
                        </div>
                    </Link>
                </div> */}
                <div className="card text-bg-primary-lgt shadow-sm">
                    <Link
                        href="/page/works/development/talis-clinical"
                        className="no-hover"
                    >
                        <figure className="p-4">
                            {/* <Image
                                src="/images/graphic-design/brochures/comec-z-fold.png"
                                alt="Comec Z-Fold Brochure"
                                className="img-responsive"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            /> */}
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title text-primary-drk">Talis Clinical LLC/Getinge</h3>
                            <p className="mb-0">
                                Talis Clinical LLC is a medical software company based in Streetsboro, Ohio that was acquired by Getinge around a year
                                after I began working for the company. We built applications for use by doctors and nurses at hospitals that helped
                                them monitor patients from our applications and allowed them to do some of their chart work directly from their phone, 
                                tablet, or computer.
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                    Check It Out!
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card text-bg-primary-lgt shadow-sm">
                    <Link
                        href="/page/works/development/stinky-craft"
                        className="no-hover"
                    >
                        <figure className="p-4">
                            {/* <Image
                                src="/images/graphic-design/brochures/comec-z-fold.png"
                                alt="Comec Z-Fold Brochure"
                                className="img-responsive"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            /> */}
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title text-primary-drk">Stinky Craft</h3>
                            <p className="mb-0">
                                This was a fun, personal project created for a Minecraft server I hosted for a group of online friends.
                                Many of the people playing on the server were also streamers on Twitch so there is integration with
                                the Twitch API to alert when users were streaming. There was also a live map that would show an overhead
                                view of the entire Minecraft world so visitors could check out how it looked from the website.
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                    Check It Out!
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card text-bg-primary-lgt shadow-sm">
                    <Link
                        href="/page/works/development/aeo-website"
                        className="no-hover"
                    >
                        <figure className="p-4">
                            {/* <Image
                                src="/images/graphic-design/brochures/comec-z-fold.png"
                                alt="Comec Z-Fold Brochure"
                                className="img-responsive"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            /> */}
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title text-primary-drk">American Eagle Outfitters</h3>
                            <p className="mb-0">
                                I worked at American Eagle Outfitters for nearly 6 years between 2014 and 2019, primarily on the Path to Checkout teams.
                                The sections I worked out included the cart, full checkout process, gift card pages, account management for users, as well
                                as the Loyalty program pages. I also customized and maintained a customized version of Bootstrap 3.0 to keep styling consistent
                                across the application for other engineers to use.
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                    Check It Out!
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card text-bg-primary-lgt shadow-sm">
                    <Link
                        href="/page/works/development/brunner"
                        className="no-hover"
                    >
                        <figure className="p-4">
                            {/* <Image
                                src="/images/graphic-design/brochures/comec-z-fold.png"
                                alt="Comec Z-Fold Brochure"
                                className="img-responsive"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            /> */}
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title text-primary-drk">Brunner</h3>
                            <p className="mb-0">
                                Brunner is an advertising agency I worked at for 3 and a half years from 2011 until 2014. During my time with
                                Brunner, I worked on a variety of development projects using asp.NET/.NET MVC, jQuery and vanilla Javascript,
                                the Umbraco content management system, as well as various older languages such as ActionScript used by Flash.
                                This section features a few of the projects I worked on while at this company.
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
