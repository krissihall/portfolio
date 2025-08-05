"use client";
import clsx from "clsx";
import { isEmpty } from "@/app/helpers/is-empty";
import { generateID } from "@/app/helpers/generate-id";

interface Props {
    name: string,
    label?: string,
    placeholder?: string,
    required?: boolean,
    value?: string,
    className?: string
}

export default function FormInput({ name, label, placeholder, required, value, className }: Props) {
    const inputId = `input-${generateID()}`;

    if (label && !isEmpty(label) && !placeholder || isEmpty(placeholder)) {
        placeholder = label;
    }

    if (!required) {
        required = false;
    }

    return (
        <div className={clsx(`input-group relative mb-4 ${className || ""}`, { "required": required })} data-twe-input-wrapper-init>
            <input name={name} id={inputId} placeholder={placeholder} className="form-input" value={value} required={required} />
            <label className="form-label" htmlFor={inputId}>{label}</label>
        </div>
    );
}; 