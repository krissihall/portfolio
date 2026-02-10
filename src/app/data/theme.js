const theme = {
    types: [
        "text", "border", "bg-text", "bg"
    ],
    colors: [
        { "name": "primary", "rgb": "255, 37, 119", "hex": "#ff2577" },
        { "name": "primary-lgt", "rgb": "255, 139, 183", "hex": "#ff8bb7" },
        { "name": "primary-drk", "rgb": "190, 0, 7", "hex": "#be0047" },
        { "name": "secondary", "rgb": "37, 255, 173", "hex": "#25ffad" },
        { "name": "secondary-lgt", "rgb": "139, 255, 211", "hex": "#8bffd3" },
        { "name": "secondary-drk", "rgb": "0, 190, 119", "hex": "#00be77" },
        { "name": "black", "rgb": "0, 0, 0", "hex": "#000" },
        { "name": "white", "rgb": "255, 255, 255", "hex": "#fff" },
        { "name": "info", "rgb": "28, 175, 255", "hex": "#1cafff" },
        { "name": "success", "rgb": "0, 235, 136", "hex": "#00eb88" },
        { "name": "warning", "rgb": "255, 217, 37", "hex": "#ffd925" },
        { "name": "danger", "rgb": "240, 81, 63", "hex": "#f0513f" },
        { "name": "split-primary", "rgb": "255, 37, 119", "hex": "#ff2577" },
        { "name": "split-secondary", "rgb": "255, 217, 37", "hex": "#ffd925" },
        { "name": "split-tertiary", "rgb": "37, 206, 255", "hex": "#25ceff" },
        { "name": "triad-primary", "rgb": "255, 37, 119", "hex": "#ff2577" },
        { "name": "triad-secondary", "rgb": "119, 255, 37", "hex": "#77ff25" },
        { "name": "triad-tertiary", "rgb": "37, 119, 255", "hex": "#2577ff" },
        { "name": "tetrad-primary", "rgb": "255, 37, 119", "hex": "#ff2577" },
        { "name": "tetrad-secondary", "rgb": "228, 255, 37", "hex": "#e4ff25" },
        { "name": "tetrad-tertiary", "rgb": "37, 255, 173", "hex": "#25ffad" },
        { "name": "tetrad-minor", "rgb": "64, 37, 255", "hex": "#4025ff" },
        { "name": "hue-primary-1", "rgb": "192, 255, 37", "hex": "#c0ff25" },
        { "name": "hue-primary-2", "rgb": "255, 227, 37", "hex": "#ffe325" },
        { "name": "hue-primary-3", "rgb": "255, 137, 37", "hex": "#ff8925" },
        { "name": "hue-primary-4", "rgb": "255, 46, 37", "hex": "#ff2e25" },
        { "name": "hue-primary", "rgb": "255, 37, 119", "hex": "#ff2577" },
        { "name": "hue-primary-5", "rgb": "255, 37, 210", "hex": "#ff25d2" },
        { "name": "hue-primary-6", "rgb": "209, 37, 255", "hex": "#d125ff" },
        { "name": "hue-primary-7", "rgb": "118, 37, 255", "hex": "#7625ff" },
        { "name": "hue-primary-8", "rgb": "37, 46, 255", "hex": "#252eff" }
    ]};

const emphasis = {
    types: [
        "text"
    ],
    colors: [
        { "name": "primary", "rgb": "", "hex": "#660f30" },
        { "name": "primary-lgt", "rgb": "", "hex": "#663849" },
        { "name": "primary-drk", "rgb": "", "hex": "#4c001c" },
        { "name": "secondary", "rgb": "", "hex": "#0f6645" },
        { "name": "secondary-lgt", "rgb": "", "hex": "#386654" },
        { "name": "secondary-drk", "rgb": "", "hex": "#004c30" },
        { "name": "black", "rgb": "", "hex": "black" },
        { "name": "white", "rgb": "", "hex": "#666666" },
        { "name": "info", "rgb": "", "hex": "#0b4666" },
        { "name": "success", "rgb": "", "hex": "#005e36" },
        { "name": "warning", "rgb": "", "hex": "#66570f" },
        { "name": "danger", "rgb": "", "hex": "#602019" },
        { "name": "split-primary", "rgb": "", "hex": "#660f30" },
        { "name": "split-secondary", "rgb": "", "hex": "#66570f" },
        { "name": "split-tertiary", "rgb": "", "hex": "#0f5266" },
        { "name": "triad-primary", "rgb": "", "hex": "#660f30" },
        { "name": "triad-secondary", "rgb": "", "hex": "#30660f" },
        { "name": "triad-tertiary", "rgb": "", "hex": "#0f3066" },
        { "name": "tetrad-primary", "rgb": "", "hex": "#660f30" },
        { "name": "tetrad-secondary", "rgb": "", "hex": "#5b660f" },
        { "name": "tetrad-tertiary", "rgb": "", "hex": "#0f6645" },
        { "name": "tetrad-minor", "rgb": "", "hex": "#1a0f66" },
        { "name": "hue-primary-1", "rgb": "", "hex": "#4d660f" },
        { "name": "hue-primary-2", "rgb": "", "hex": "#665b0f" },
        { "name": "hue-primary-3", "rgb": "", "hex": "#66370f" },
        { "name": "hue-primary-4", "rgb": "", "hex": "#66120f" },
        { "name": "hue-primary", "rgb": "", "hex": "#660f30" },
        { "name": "hue-primary-5", "rgb": "", "hex": "#660f54" },
        { "name": "hue-primary-6", "rgb": "", "hex": "#540f66" },
        { "name": "hue-primary-7", "rgb": "", "hex": "#2f0f66" },
        { "name": "hue-primary-8", "rgb": "", "hex": "#0f1266" }
    ]
};

const subtle = {
    types: [
        "bg", "border"
    ],
    colors: [
        { "name": "primary", "rgb": "", "hex": "#660f30" },
        { "name": "primary-lgt", "rgb": "", "hex": "#663849" },
        { "name": "primary-drk", "rgb": "", "hex": "#4c001c" },
        { "name": "secondary", "rgb": "", "hex": "#0f6645" },
        { "name": "secondary-lgt", "rgb": "", "hex": "#386654" },
        { "name": "secondary-drk", "rgb": "", "hex": "#004c30" },
        { "name": "black", "rgb": "", "hex": "black" },
        { "name": "white", "rgb": "", "hex": "#666666" },
        { "name": "info", "rgb": "", "hex": "#0b4666" },
        { "name": "success", "rgb": "", "hex": "#005e36" },
        { "name": "warning", "rgb": "", "hex": "#66570f" },
        { "name": "danger", "rgb": "", "hex": "#602019" },
        { "name": "split-primary", "rgb": "", "hex": "#660f30" },
        { "name": "split-secondary", "rgb": "", "hex": "#66570f" },
        { "name": "split-tertiary", "rgb": "", "hex": "#0f5266" },
        { "name": "triad-primary", "rgb": "", "hex": "#660f30" },
        { "name": "triad-secondary", "rgb": "", "hex": "#30660f" },
        { "name": "triad-tertiary", "rgb": "", "hex": "#0f3066" },
        { "name": "tetrad-primary", "rgb": "", "hex": "#660f30" },
        { "name": "tetrad-secondary", "rgb": "", "hex": "#5b660f" },
        { "name": "tetrad-tertiary", "rgb": "", "hex": "#0f6645" },
        { "name": "tetrad-minor", "rgb": "", "hex": "#1a0f66" },
        { "name": "hue-primary-1", "rgb": "", "hex": "#4d660f" },
        { "name": "hue-primary-2", "rgb": "", "hex": "#665b0f" },
        { "name": "hue-primary-3", "rgb": "", "hex": "#66370f" },
        { "name": "hue-primary-4", "rgb": "", "hex": "#66120f" },
        { "name": "hue-primary", "rgb": "", "hex": "#660f30" },
        { "name": "hue-primary-5", "rgb": "", "hex": "#660f54" },
        { "name": "hue-primary-6", "rgb": "", "hex": "#540f66" },
        { "name": "hue-primary-7", "rgb": "", "hex": "#2f0f66" },
        { "name": "hue-primary-8", "rgb": "", "hex": "#0f1266" }
    ]
};

export {
    theme,
    emphasis,
    subtle
};
