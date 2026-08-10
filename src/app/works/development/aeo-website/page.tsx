import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "American Eagle Outfitters",
    description: "I worked at American Eagle Outfitters for nearly 6 years between 2014 and 2019, primarily on the Path to Checkout teams.",
};

export default function AEOWebsite() {
    return (
        <main className="development-container container max-w-4xl ml-auto mr-auto pt-6">
            <h1>American Eagle Outfitters Website</h1>
            <p className="mb-4">
                I worked at 
                <Link
                    href="https://ae.com"
                    target="_blank"
                    title="American Eagle Outfitters"
                    className="px-1"
                >
                    American Eagle Outfitters
                </Link>
                for nearly 6 years between 2014 and 2019, primarily on the Path to Checkout teams.
                The sections I worked out included the cart, full checkout process, gift card pages, account management for users, as well
                as the Loyalty program pages. I also customized and maintained a customized version of Bootstrap 3.0 to keep styling consistent
                across the application for other engineers to use. The purpose of the rebuilt front end of the website was also to eliminate
                the m.**.com site in favor of a fully responsive application.
            </p>

            <div className="rounded-box">
                <div className="float-right w-5/12 pl-4">
                    <Link href="/images/development/aeo/aeo-cart-ss.png" target="_blank">
                        <Image
                            src="/images/development/aeo/aeo-cart-ss.png"
                            alt="American Eagle Outfitters Cart Page"
                            className="img-responsive"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Link>
                </div>
                <p className="mb-4">
                    During my time at American Eagle Outfitters, I worked with a team in order to rebuild the entire front end website since it
                    was at least 10 years old at the time and the technology was somewhat outdated. We rebuild the product pages using Sails and Backbone.js
                    and rebuilt the checkout, cart, account pages, loyalty program, and gift card pages using Ember-Cli. This was a multi-year process and
                    while I occasionally contributed to the Sails/Backbone.js project, I was mostly envolved in building the Ember-Cli application.
                </p>
                <div className="float-left w-5/12 pr-4">
                    <Link href="/images/development/aeo/aeo-checkout-ss.png" target="_blank">
                        <Image
                            src="/images/development/aeo/aeo-checkout-ss.png"
                            alt="American Eagle Outfitters Checkout Page"
                            className="img-responsive"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Link>
                </div>
                <p className="mb-4">
                    I also contributed the majority of the work to forking and modifying the
                    <Link
                        href="https://getbootstrap.com/docs/3.4/"
                        target="_blank"
                        title="Bootstrap 3.4.1 Documentation"
                        className="px-1"
                    >
                        Bootstrap 3.0
                    </Link>
                    library to customize it for usage to maintain consistency across our large development team. This modified library included updates
                    that extended the Modal Component so it could be used as a tray that slid out from the right side of the screen for quick information
                    on products and other usages, as well as standard styling to common components such as the Accordion collapsers, lists, headers, buttons,
                    and form fields. I also maintained and updated the documentation in our forked repository so developers on the team knew how to use all of
                    the modified components.
                </p>
                <div className="float-right w-5/12 pl-4">
                    <Link href="/images/development/aeo/aeo-loyalty-ss.png" target="_blank">
                        <Image
                            src="/images/development/aeo/aeo-loyalty-ss.png"
                            alt="American Eagle Outfitters Real Rewards Page"
                            className="img-responsive"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Link>
                </div>
                <p className="mb-4">
                    In addition to the customized Bootstrap library, I also built and maintained a separate library of components that were shared between
                    the product and checkout sides of the applications. An example of one of these components is the header for the website since they were
                    separate code respositories due to 
                    <Link
                        href="https://cli.emberjs.com/release/"
                        target="_blank"
                        title="Ember-Cli"
                        className="px-1"
                    >
                        Ember-Cli's
                    </Link>
                    early versions that did not have a good solution for SEO solutions at the time. The header
                    had two different versions and needed to look exactly the same on both applications, there was a full header with all of the links as well
                    as a slim header that just had the logo, cart, and checkout buttons. I also included a slim documentation on these components and toggle
                    buttons to switch back and forth between the different versions of the component so developers knew how to use them and were able to test
                    both sides of the application without having to manually pull the library in every time to made a change.
                </p>
                <div className="float-left w-5/12 pr-4">
                    <Link href="/images/development/aeo/aeo-gift-cards-ss.png" target="_blank">
                        <Image
                            src="/images/development/aeo/aeo-gift-cards-ss.png"
                            alt="American Eagle Outfitters Gift Cards Page"
                            className="img-responsive"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Link>
                </div>
                <p>
                    At the time that I left the company, a newer library for Ember-Cli came out called
                    <Link
                        href="https://ember-fastboot.com/"
                        target="_blank"
                        title="Ember-fastboot"
                        className="px-1"
                    >
                        Ember-fastboot
                    </Link>
                    was released that allowed for Server Side Rendering of the pages, which solved the SEO optimization issue that was present in early versions
                    of Ember-Cli so we were in the process of rebuilding the entire front end of the website to use Ember.js across the entire app and
                    were also refactoring to use micro-services to keep the code more componentized and easier to maintain in the future.
                </p>
            </div>
        </main>
    );
}
