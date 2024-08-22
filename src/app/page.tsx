"use client";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import style from "./assets/scss/homepage/homepage.module.scss";
import { links } from "./components/data/navigation";
import Navigation from "./components/home/navigation";
import { NavLink } from "./components/definitions";

export default function Home() {
  const [current, setCurrent] = useState<NavLink>(links[0]);
  return (
    <main className={`${style.container} homepage`}>
      <div className={style.leftSide}>
        <div className="logo">
          <Image
            src="/images/logo-tagline-white.svg"
            width="280"
            height="114"
            alt="KH logo"
            priority
          />
        </div>
        <div className={`${style.content} bg-${current.class}-subtle container mt-6 mb-6 text-center rounded-end-5`}>
          <div className={clsx(`info info-homepage`, { "show": current.name === "Home"})}>
            <h1>Kristina L. Hall</h1>
            <p className="text-primary-emphasis">This is info on the Homepage.</p>
            <div className="profile-photo">
              <Image
                src="/images/profile-photo.png"
                width="443"
                height="443"
                className="img-responsive"
                alt="Kristina L. Hall"
              />
            </div>
          </div>
          <div className={clsx(`info info-about`, { "show": current.name === "About" })}>
            <h1>About</h1>
            <p className={`text-${current.class}-emphasis`}>This is info on the About page.</p>
          </div>
          <div className={clsx(`info info-skills`, { "show": current.name === "Skills" })}>
            <h1>Skills</h1>
            <p className={`text-${current.class}-emphasis`}>This is info on the Skills page.</p>
          </div>
          <div className={clsx(`info info-works`, { "show": current.name === "Works" })}>
            <h1>Works</h1>
            <p className={`text-${current.class}-emphasis`}>This is info on the Works page.</p>
          </div>
          <div className={clsx(`info info-contact`, { "show": current.name === "Contact" })}>
            <h1>Contact</h1>
            <p className={`text-${current.class}-emphasis`}>This is info on the Contact page.</p>
          </div>
        </div>
      </div>
      <Navigation current={current} setCurrent={setCurrent} />
    </main>
  );
}
