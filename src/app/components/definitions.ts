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
    newWindow: boolean,
    mainNav: boolean,
    isVisibleOnHome: boolean,
    isHidden: boolean,
    class: string,
};

export type SelectOption = {
    id: number | string,
    text: string,
}

export type SelectOptions = {
    options: Array<SelectOption>,
}

export type ContactFormData = {
    name: string,
    email: string,
    message: string,
    phone: string,
    subject: string,
    success: boolean,
}
