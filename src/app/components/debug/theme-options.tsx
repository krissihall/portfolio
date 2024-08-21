const colors = [
    { name: "primary", rgb: "255, 37, 119", hex: "#ff2577" },
    { name: "primary-lgt", rgb: "255, 139, 183", hex: "#ff8bb7" },
    { name: "primary-drk", rgb: "190, 0, 7", hex: "#be0047" },
    { name: "secondary", rgb: "37, 255, 173", hex: "#25ffad" },
    { name: "secondary-lgt", rgb: "139, 255, 211", hex: "#8bffd3" },
    { name: "secondary-drk", rgb: "0, 190, 119", hex: "#00be77" },
    { name: "black", rgb: "0, 0, 0", hex: "#000" },
    { name: "white", rgb: "255, 255, 255", hex: "#fff" },
    { name: "info", rgb: "28, 175, 255", hex: "#1cafff" },
    { name: "success", rgb: "0, 235, 136", hex: "#00eb88" },
    { name: "warning", rgb: "255, 217, 37", hex: "#ffd925" },
    { name: "danger", rgb: "240, 81, 63", hex: "#f0513f" },
    { name: "split-primary", rgb: "255, 37, 119", hex: "#ff2577" },
    { name: "split-secondary", rgb: "255, 217, 37", hex: "#ffd925" },
    { name: "split-tertiary", rgb: "37, 206, 255", hex: "#25ceff" },
    { name: "triad-primary", rgb: "255, 37, 119", hex: "#ff2577" },
    { name: "triad-secondary", rgb: "119, 255, 37", hex: "#77ff25" },
    { name: "triad-tertiary", rgb: "37, 119, 255", hex: "#2577ff" },
    { name: "tetrad-primary", rgb: "255, 37, 119", hex: "#ff2577" },
    { name: "tetrad-secondary", rgb: "228, 255, 37", hex: "#e4ff25" },
    { name: "tetrad-tertiary", rgb: "37, 255, 173", hex: "#25ffad" },
    { name: "tetrad-minor", rgb: "64, 37, 255", hex: "#4025ff" },
    { name: "hue-primary-1", rgb: "192, 255, 37", hex: "#c0ff25" },
    { name: "hue-primary-2", rgb: "255, 227, 37", hex: "#ffe325" },
    { name: "hue-primary-3", rgb: "255, 137, 37", hex: "#ff8925" },
    { name: "hue-primary-4", rgb: "255, 46, 37", hex: "#ff2e25" },
    { name: "hue-primary", rgb: "255, 37, 119", hex: "#ff2577" },
    { name: "hue-primary-5", rgb: "255, 37, 210", hex: "#ff25d2" },
    { name: "hue-primary-6", rgb: "209, 37, 255", hex: "#d125ff" },
    { name: "hue-primary-7", rgb: "118, 37, 255", hex: "#7625ff" },
    { name: "hue-primary-8", rgb: "37, 46, 255", hex: "#252eff" }
]

export default function ThemeOptions() {
    return (
        <main className="theme-options-container">
            <section className="css-vars-container container ml-auto mr-auto mb-4">
                <h2 className="mb-2">CSS Color Theme Vars</h2>
                <div className="color-options options flex flex-wrap justify-stretch">
                    <>
                        {colors.map((color, index) => {
                            const spanClass = "text-" + color.name;
                            return (
                                <div className="color-option option bg-gray-800 p-2 ml-1 mb-1" key={index}>
                                    <div className="option-text flex flex-row flex-nowrap justify-between">
                                        <div className="text-medium pr-2">Name:</div> <div className={spanClass}>{color.name}</div>
                                    </div>
                                    <div className="option-text flex flex-row flex-nowrap justify-between">
                                        <div className="text-medium pr-2">Hex:</div> <div className={spanClass}>{color.hex}</div>
                                    </div>
                                    <div className="option-text flex flex-row flex-nowrap justify-between">
                                        <div className="text-medium pr-2">RGB:</div> <div className={spanClass}>{color.rgb}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </>
                </div>
            </section>
            <section className="text-options-container container ml-auto mr-auto mb-4">
                <h2 className="mb-2">Text Color Options</h2>
                <div className="text-options options">
                    <>
                        {colors.map((color, index) => {
                            const classDef = "text-" + color.name;
                            return (
                                <div className="d-block" key={index}>
                                    <p className={classDef}>This text is using the <strong>.text-{color.name}</strong> className.</p>
                                    <p className={`bg-${color.name}-subtle ${classDef}-emphasis`}>This text is using the <strong>.text-{color.name}-emphasis</strong> className.</p>
                                </div>
                            );
                        })}
                    </>
                </div>
            </section>

            <section className="bg-options-container container ml-auto mr-auto mb-4">
                <h2 className="mb-2">Background Color Options</h2>
                <div className="theme-options options flex flex-wrap mb-4">
                    <>
                        {colors.map((color, index) => {
                            const classDef = "bg-option option flex items-center justify-center text-center ml-1 mb-1 w-20 h-20 p-1 text-xs";
                            return (
                                <div className="d-inline-flex" key={index}>
                                    <div className={`${classDef} text-bg-${color.name}`}>.text-bg-{color.name}</div>
                                    <div className={`${classDef} bg-${color.name}-subtle text-${color.name}-emphasis`}>.bg-{color.name}-subtle</div>
                                </div>
                            );
                        })}
                    </>
                </div>
            </section>

            <section className="bg-borders-container container ml-auto mr-auto mb-2">
                <h2 className="mb-2">Border Options</h2>
                <div className="theme-options options flex flex-wrap mb-4">
                    <>
                        {colors.map((color, index) => {
                            const classDef = "border-option option flex items-center justify-center text-center ml-2 mb-2 p-2 text-xs border border-1";
                            return (
                                <div className="d-inline-flex" key={index}>
                                    <div className={`${classDef} border-${color.name} text-${color.name}`}>.border-{color.name}</div>
                                    <div className={`${classDef} border-${color.name}-subtle text-${color.name}`}>.border-{color.name}-subtle</div>
                                </div>
                            );
                        })}
                    </>
                </div>
            </section>
        </main>
    )
};