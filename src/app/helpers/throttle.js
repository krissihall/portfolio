export function throttle(fn, wait) {
    let throttled = false;
    return (...args) => {
        if (!throttled) {
            fn.apply(this, args);
            throttle = true;
            setTimeout(() => { throttled = false; }, wait);
        }
    };
};
