"use client";
import { useState, useEffect } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";
import { motion, useAnimationControls } from "framer-motion";
import { NavLink } from "./components/definitions";
import { links } from "./data/navigation";
import { generateID } from "./helpers/generate-id";
import { useBootstrapBreakpoint } from "./hooks/useBootstrapBreakpoint";
import style from "./assets/scss/homepage/homepage.module.scss";
import Navigation from "./components/home/navigation";
import Loader from "./components/general/loader";
import Collapser from "./components/general/collapser";
import MobileNavigation from "./components/home/mobile-navigation";

export default function Home() {
  const [current, setCurrent] = useState<NavLink>(links[0]);
  const [loader, setLoader] = useState(true);
  const fadeDownControls = useAnimationControls();
  const fadeDown = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 0,
      y: 0,
      transition: {
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        ease: "easeInOut"
      },
    }
  };

  const aboutLink = links.find((link) => link.name === 'About');
  const skillsLink = links.find((link) => link.name === 'Skills');
  const worksLink = links.find((link) => link.name === 'Works');
  const contactLink = links.find((link) => link.name === 'Contact');

  const bp = useBootstrapBreakpoint();
  const isMobile = bp === 'xs' || bp === 'sm' ? true : false;

  const onClickEvent = (val: NavLink | null) => {
    if (val) {
      sendGTMEvent({ event: "click", value: val.name });
    }
    return;
  };

  useEffect(() => {
    setTimeout(() => { setLoader(false); }, 1000);
  });

  return (
    <main className="homepage">
      {loader && (
        <div className="home-loader">
          <Loader />
        </div>
      )}
      {!loader && (
        <div className={`${style.container}`}>
          <motion.div
            className={style.leftSide}
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <div className={`home-header ${isMobile ? 'mobile-home-header' : ''}`}>
              <div className="logo">
                <Image
                    src="/images/logo-tagline-white.svg"
                    className="home-logo"
                    width="280"
                    height="114"
                    alt="KH logo"
                    title="Krisina L. Hall - Front-End Developer"
                    priority
                />
              </div>
              {isMobile && (
                <MobileNavigation />
              )}
            </div>
            <div className={`${style.content} bg-${current.class}-subtle container homepage-content-container mt-6 mb-6`}>
              <div className={clsx(`info info-homepage`, { "show": current.name === "Home" })}>
                <motion.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: .5, delay: 2, ease: "easeInOut" }}
                >
                  Kristina L. Hall
                </motion.h1>
                <motion.p
                  className="text-primary-emphasis text-center"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: .5, delay: 2.5, ease: "easeInOut" }}
                >
                  Front End Developer, User Interface Engineer with a proven history of building feature-rich web applications that meet the needs of clients, working with developers and designers to ensure a clean and consistent implementation, and ensuring app stability through unit-test coverage.
                </motion.p>
                <motion.div
                  className="profile-photo"
                  initial={{ opacity: 0, scale: .25 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: .5, delay: 3, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/profile-photo.png"
                    className="img-responsive"
                    alt="Kristina L. Hall"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }} />
                </motion.div>
              </div>
              <div className={clsx(`info info-about`, { "show": current.name === "About" })}>
                <h1 className="text-center">About</h1>
                <p className={`text-${current.class}-emphasis mb-3`}>
                  I am a Senior front end website developer with over 17 years of professional experience in a variety of technologies.
                  I am specialized with front end website development and have worked with PHP/HTML, MySQL, Node.js/GIT, Vue.js, React (Next.js), 
                  Ember.js, and a little bit of Angular. I also have experience with vanilla JavaScript and ES6 and continue to learn new skills.
                  I have been using CSS since I was in high school and have experience using CSS precompilers such as Sass, LESS, and Stylus.
                </p>
                <p className={`text-${current.class}-emphasis mb-3`}>
                  I also do graphic design freelance work and have done many logos, brochures, and flyers. I also do some graphic design for websites.
                  I have also done motion graphics for video using After Effects and enjoy photography in my free time.
                </p>
                {aboutLink && (
                <p className="text-right">
                  <Link
                    href={aboutLink.href}
                    className={`btn btn-${current.class}`}
                    onClick={() => onClickEvent(aboutLink.name ? aboutLink : null)}>
                      Read More...
                  </Link>
                </p>
                )}
              </div>
              <div className={clsx(`info info-skills`, { "show": current.name === "Skills" })}>
                <h1 className="text-center">Skills</h1>
                <Collapser name="Web Standards" ID={generateID()} customClass="homepage">
                  <ul className={`list-disc ps-8 text-${current.class}-emphasis`}>
                    <li>HTML/HTML5</li>
                    <li>CSS/CSS3</li>
                    <li>Javascript/ES6</li> 
                    <li>Node.js/GIT</li>
                  </ul>
                </Collapser>
                <Collapser name="UI Frameworks" ID={generateID()} customClass="homepage">
                  <ul className={`list-disc ps-8 text-${current.class}-emphasis`}>
                    <li>Bootstrap &ndash; 10+ years</li>
                    <li>Ember.js &ndash; 5+ years</li> 
                    <li>Vue.js &ndash; 4+ years</li>
                    <li>React &ndash; 1 year</li>
                    <li>Angular</li>
                  </ul>
                </Collapser>
                <Collapser name="Styling" ID={generateID()} customClass="homepage">
                  <ul className={`list-disc ps-8 text-${current.class}-emphasis`}>
                    <li>Media Queries</li>
                    <li>SASS/SCSS</li>
                    <li>Stylus</li>
                    <li>LESS</li>
                  </ul>
                </Collapser>
                <Collapser name="Agile" ID={generateID()} customClass="homepage">
                  <ul className={`list-disc ps-8 text-${current.class}-emphasis`}>
                    <li>Jira/Confluence/BitBucket</li>
                    <li>Visual Studio/TFS/GIT</li>
                    <li>Microsoft/Teams</li>
                  </ul>
                </Collapser>
                <p className="text-right mb-4 mt-4">
                  {skillsLink && (
                  <Link
                    href={skillsLink.href}
                    className={`btn btn-${current.class}`}
                    onClick={() => onClickEvent(skillsLink.name ? skillsLink : null)}>
                      Read More...
                  </Link>
                  )}
                </p>
              </div>
              <div className={clsx(`info info-works`, { "show": current.name === "Works" })}>
                <h1 className="text-center">Works</h1>
                <div className="d-block">
                    <p className={`text-${current.class}-emphasis float-left works-description`}>
                      Below are some examples of some of the work and projects I've worked on during my career.
                      Each section will contain more information on different types of work I have skills using.
                    </p>
                    <Image
                      src="/images/works-cover.png"
                      alt="Works Cover Photo"
                      className="img-responsive float-right"
                      width={0}
                      height={0}
                      sizes="50vw"
                      style={{ width: '50%', height: 'auto' }} />
                      <div className="clearfix"></div>
                  </div>
                  {worksLink && (
                  <p className="text-right mt-4">
                    <Link
                      href={worksLink.href}
                      className={`btn btn-${current.class}`}
                      onClick={() => onClickEvent(worksLink.name ? worksLink : null)}>
                        Read More...
                    </Link>
                  </p>
                  )}
              </div>
              <div className={clsx(`info info-contact`, { "show": current.name === "Contact" })}>
                <h1 className="text-center">Contact</h1>
                <p className={`text-${current.class}-emphasis`}>
                  Follow this link to the contact form if you want to get in touch with me.
                </p>
                  {contactLink && (
                  <p className="text-right mt-4">
                    <Link
                      href={contactLink.href}
                      className={`btn btn-${current.class}`}
                      onClick={() => onClickEvent(contactLink.name ? contactLink : null)}>
                        Read More...
                    </Link>
                  </p>
                  )}
              </div>
            </div>
          </motion.div>
          {!isMobile && (
            <Navigation current={current} setCurrent={setCurrent} />
          )}
        </div>
      )}
    </main>
  );
}
