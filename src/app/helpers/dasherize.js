export function dasherize(string) {
    return (string != null) && (typeof string === "string" || typeof string === String) ? string.toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/[\s-]+/g, "-") : null;
};
