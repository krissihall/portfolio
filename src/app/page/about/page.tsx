import type { Metadata } from "next";
import "@/app/assets/scss/pages/about.scss";
import LinkedIn from "@/app/components/general/icons/linked-in";
import Github from "@/app/components/general/icons/github";
import FiletypePdf from "@/app/components/general/icons/filetype-pdf";

export const metadata: Metadata = {
    title: "About",
    description: "This is the about page",
};

export default function About() {
    return (
        <main className="about-container container max-w-4xl ml-auto mr-auto">
            <h1>About Page</h1>
            <section className="school-container rounded-box mb-4">
                <h2>Schooling</h2>
                <p>
                    I have been using HTML and CSS since I was 16 years old in high school.
                    It has always been a hobby of mine and I have greatly enjoyed graphic 
                    design as well.
                </p>
                <h3 className="mt-4">Kent State University</h3>
                <p>
                    Attended Kent State University from the fall of 2002 until the spring of 
                    2005 with an undeclared major. Many of the required courses were taken 
                    during this time but I hadn&apos;t decided to go into a web development program 
                    at that time.
                </p>
                <h3 className="mt-4">Pittsburgh Technical Institute</h3>
                <p>
                    Attended PTI from October 2006 until 2008 in the Multimedia program. I 
                    received an Associate of Science degree and studied many different types
                    of media. Some classes were using Flash (ActionScript 3.0), Photoshop and
                    the Adobe Suite for graphic design, 3DS Max for 3D modeling and animating,
                    audio and video editing, web design and development, and some additional
                    design and logo classes from the Graphic Design program. I received a 4.0 
                    for 5 out of 8 quarters while attending the institute.
                </p>
            </section>
            
            <section className="work-container rounded-box mb-4">
                <h2>Work History</h2>
                <p>
                    Below is a list of work history and some highlights of projects that I have worked on.
                </p>

                <h3 className="mt-4">
                    Liviniti
                    <span className="work-dates">October 2024 &ndash; August 2025</span>
                </h3>
                <p>
                    Worked with a small team to optimize a Vue application to be reusable and scalable 
                    as a Senior developer. Implemented improved CSS guidelines using Sass mixins, 
                    functions, and CSS variables to make the visual design more componentized. 
                    Modernized older code by removing Bootstrap components in favor of faster, 
                    Vue-based components. Modified pieces of the Vuetify library to be reusable and 
                    scalable within a large Vue application.
                </p>

                <h3 className="mt-4">
                    Talis Clinical LLC
                    <span className="work-dates">June 2021 &ndash; October 2024</span>
                </h3>
                <p>
                    Primary frontend developer at a medical software company building application 
                    to help doctors and nurses get alerts on changes in vitals and be able to chart 
                    changes in patients virtually. Primary responsibilities were all frontend styles 
                    of all applications using Vue.js and Bootstrap 5.0. Heavy usage of Sass to keep 
                    styles consistent and reusable with a critical eye on design and user experience.
                </p>

                <h3 className="mt-4">
                    New Elevation
                    <span className="work-dates">January 2020 &ndash; December 2020</span>
                </h3>
                <p>
                    Front end developer for a contracting company, contracted with a retail company 
                    running a Hybris website. Prime responsibilities were maintenance and creation 
                    of new React components to replace JSP pages.
                </p>

                <h3 className="mt-4">
                    American Eagle Outfitters
                    <span className="work-dates">April 2014 &ndash; December 2019</span>
                </h3>
                <p>
                    Developed key parts of the UI for the customer-facing ecommerce site ae.com, 
                    primarily for the Checkout team. Created and maintained the core UI component 
                    library and style guide based on Bootstrap and handled migration to Ember 
                    components. Wrote unit, integration, and acceptance tests to ensure stability 
                    of the web application and its components. Served as liaison to the design 
                    team to ensure accuracy in style implementation.
                </p>

                <h3 className="mt-4">
                    Brunner
                    <span className="work-dates">January 2011 &ndash; March 2014</span>
                </h3>
                <p>
                    Front-end developer with multiple functions including website building with or 
                    without a CMS (Umbraco for .NET), interactive microsites, banner ads, and 
                    Facebook pages and contests.
                </p>
            </section>

            <section className="socials-container rounded-box mb-4">
                <h2>Important Links</h2>
                <p>Here are some links to provide additional information, resume, and public code examples.</p>

                <div className="links">
                    <div className="link tooltip tooltip-primary" data-tip="LinkedIn Profile">
                        <a href="https://www.linkedin.com/in/kristina-hall-51802b6b/" target="_blank">
                            <LinkedIn width="100" height="100" className="link-icon" />
                        </a>
                    </div>
                    
                    <div className="link tooltip tooltip-primary" data-tip="Github Profile">
                        <a href="https://github.com/krissihall" target="_blank">
                            <Github width="100" height="100" className="link-icon" />
                        </a>
                    </div>

                    <div className="link tooltip tooltip-primary" data-tip="Download Resume">
                        <a href="/Kristina-Hall_2025.pdf" target="_blank">
                            <FiletypePdf width="100" height="100" className="link-icon" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
