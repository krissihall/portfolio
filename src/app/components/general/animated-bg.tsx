"use client";
import { useState } from "react";
import clsx from "clsx";
import IdleTimer from "@/app/components/general/idle-timer";
import "@/app/assets/scss/includes/animations/_animated-bg.scss";

export default function AnimatedBg() {
    const [idleStatus, setStatus] = useState("Active");
    const lineNum = 144;

    return (
        <>
            <IdleTimer idleStatus={idleStatus} timer={1200} setStatus={setStatus} />
            <div className={clsx("bg-container", { "paused": idleStatus === "Idle" })}>
                {Array(lineNum)
                    .fill(0)
                    .map((x, index) => (
                        <div className={`c c-${x}`} key={index}></div>
                    ))
                }
            </div>
        </>
    );
};
