"use client";

import style from "@/app/assets/scss/components/loader.module.scss";

interface Props {
    loaderText?: string
};

export default function Loader({ loaderText }: Props) {
    const showText = loaderText && loaderText.trim() == "" ? false : true;
    return (
        <div className="loader-container">
            <>
                {showText && (
                    <div className="loader-text">{loaderText}</div>
                )}
            </>
            <div className={style.loader}></div>
        </div>
    );
};
