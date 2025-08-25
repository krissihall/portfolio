export type Project = {
    id: number,
    client: string,
    name: string,
    description: string,
    type: 'inactive' | 'live',
};

export type Theme = {
    types: Array<string>,
    colors: Array<Color>,
};

export type Color = {
    name: string,
    rgb: string,
    hex: string,
};

export type NavLink = {
    id: number,
    name: string,
    href: string,
    class: string,
};

export type SelectOption = {
    id: number | string,
    text: string,
}

export type SelectOptions = {
    options: Array<SelectOption>,
}
