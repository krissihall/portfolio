export type Project = {
    id: number,
    client: string,
    name: string,
    description: string,
    type: 'inactive' | 'live'
};

export type Theme = {
    types: Array<string>,
    colors: Array<Color>
};

export type Color = {
    name: string,
    rgb: string,
    hex: string
};

export type NavLink = {
    id: number,
    name: string,
    href: string,
    class: string
};
