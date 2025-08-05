"use client";
import clsx from "clsx";
import { isEmpty } from "@/app/helpers/is-empty";
import { generateID } from "@/app/helpers/generate-id";

interface Props {
    name: string,
    label?: string,
    required?: boolean,
    value?: string,
    className?: string
}

export default function Textarea({ name, label, required, value, className }: Props) {
    const textareaId = `textarea-${generateID()}`;

    if (!required) {
        required = false;
    }

    return (
        <div className={clsx(`relative mb-4 ${className || ""}`, { "required": required })} data-twe-input-wrapper-init>
            <textarea name={name} id={textareaId} className="form-textarea w-1/4 h-32" required={required}>
                {value}
            </textarea>
            <label className="form-label" htmlFor={textareaId}>{label}</label>
        </div>
    );
}; 