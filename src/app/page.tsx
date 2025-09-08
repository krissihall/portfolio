"use client";
import { useState, useEffect } from "react";
import clsx from "clsx";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { NavLink } from "./components/definitions";
import { links } from "./components/data/navigation";
import { generateID } from "./helpers/generate-id";
import style from "./assets/scss/homepage/homepage.module.scss";
import Navigation from "./components/home/navigation";
import Loader from "./components/general/loader";
import Collapser from "./components/general/collapser";

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
            <div className="logo">
              <Image
                src="/images/logo-tagline-white.svg"
                width="280"
                height="114"
                alt="KH logo"
                priority
              />
            </div>
            <div className={`${style.content} bg-${current.class}-subtle container mt-6 mb-6 rounded-end-5`}>
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
                    width="443"
                    height="443"
                    className="img-responsive"
                    alt="Kristina L. Hall"
                  />
                </motion.div>
              </div>
              <div className={clsx(`info info-about`, { "show": current.name === "About" })}>
                <h1 className="text-center">About</h1>
                <p className={`text-${current.class}-emphasis`}>This is info on the About page.</p>
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
                {/* <p className={`text-${current.class}-emphasis`}>Web standards: HTML, CSS, JavaScript, ES6+. UI frameworks: Ember.js, React, Vue.js, Bootstrap. Styles: Media Queries, LESS, Stylus, SASS. Data retrieval: Rest APIs, JSON, AJAX, Node.js. Unit tests, integration tests. ASP.NET, .NET MVC, Visual Studio (VSCode), PHP. Agile development practices, Confluence, Jira. Source code management: Git, Bitbucket.</p> */}
              </div>
              <div className={clsx(`info info-works`, { "show": current.name === "Works" })}>
                <h1 className="text-center">Works</h1>
                <p className={`text-${current.class}-emphasis`}>This is info on the Works page.</p>
              </div>
              <div className={clsx(`info info-contact`, { "show": current.name === "Contact" })}>
                <h1 className="text-center">Contact</h1>
                <p className={`text-${current.class}-emphasis`}>This is info on the Contact page.</p>
              </div>
            </div>
          </motion.div>
          <Navigation current={current} setCurrent={setCurrent} />
        </div>
      )}
    </main>
  );
}
