"use client";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import style from "@/app/assets/scss/homepage/homepage.module.scss";
import Navigation from "@/app/components/home/navigation";

export default function Home() {
  const [ current, setCurrent ] = useState("tetrad-primary");
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
        <div className={`${style.content} bg-${current}-subtle container mt-6 mb-6 text-center rounded-end-5`}>
          <div className={clsx(`info info-homepage`, { "show": current === "tetrad-primary"})}>
            <h1 className="text-primary">Kristina L. Hall</h1>
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
          <div className={clsx(`info info-about`, { "show": current === "warning" })}>
            <h1 className="text-warning">About</h1>
            <p className={`text-${current}-emphasis`}>This is info on the About page.</p>
          </div>
          <div className={clsx(`info info-works`, { "show": current === "tetrad-tertiary" })}>
            <h1 className="text-secondary-drk">Works</h1>
            <p className={`text-${current}-emphasis`}>This is info on the Works page.</p>
          </div>
          <div className={clsx(`info info-contact`, { "show": current === "tetrad-minor" })}>
            <h1 className="text-tetrad-minor">Contact</h1>
            <p className={`text-${current}-emphasis`}>This is info on the Contact page.</p>
          </div>
        </div>
      </div>
      <Navigation current={current} setCurrent={setCurrent}  />
    </main>
  );
}
