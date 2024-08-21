const canScroll = (el, scrollAxis) => {
    if (0 === el[scrollAxis]) {
        el[scrollAxis] = 1;
        if (1 === el[scrollAxis]) {
            el[scrollAxis] = 0;
            return true;
        } else {
            return true;
        }
    }
    return false;
};

const isScrollableX = (el) => {
    return (el.scrollWidth > el.clientWidth) && canScroll(el, "scrollLeft") && ("hidden" !== getComputedStyle(el).overflowX);
};

const isScrollableY = (el) => {
    return (el.scrollHeight > el.clientHeight) && canScroll(el, "scrollTop") && ("hidden" !== getComputedStyle(el).overflowY);
};

const isScrollable = (el) => {
    return isScrollableX(el) || isScrollableY(el);
};

export {
    canScroll,
    isScrollableX,
    isScrollableY,
    isScrollable
};
