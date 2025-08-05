"use client";
import { useEffect } from "react";

interface Props {
    name: string,
    ID: string,
    customClass?: String,
    children: React.ReactNode;
}

export default function Collapser({ name, ID, customClass, children }: Props) {
    const eleId = `collapse-${ID}`;
    const target = `#${eleId}`;

    useEffect(() => {
        const init = async () => {
            const { Collapse, Ripple, initTWE } = await import("tw-elements");
            initTWE({ Collapse, Ripple });
        };
        init();
    }, []);

    return (
        <div className="collapse-container">
            <a
                className="collapse-link"
                data-twe-collapse-init
                data-twe-ripple-init
                data-twe-ripple-color="light"
                data-twe-target={target}
                aria-expanded="false"
                aria-controls={eleId}
            >
                {name}
            </a>
            <div id={eleId} className={`!visible hidden collapse-content ${customClass}`} data-twe-collapse-item>
                {children}
            </div>
        </div>
    );
};
