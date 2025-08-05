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

export default function FormSelect({ name, label, placeholder, required, value, className }: Props) {
    const generatedId = `select-${generateID()}`;
    if (label && !isEmpty(label) && !placeholder || isEmpty(placeholder)) {
        placeholder = label;
    }

    if (!required) {
        required = false;
    }

    return (
        <div className={clsx(`relative mb-4 ${className || ""}`, { "required": required })}>
            <label className="form-label" htmlFor={generatedId} data-twe-select-label-ref>{label}</label>
            <select name={name} id={generatedId} className="form-select" required={required} data-te-select-init>
                <option selected disabled hidden>{placeholder}</option>
                <option>Job Inquiry</option>
                <option>Freelance Project</option>
                <option>Collab Opportunity</option>
                <option>General Inquiry</option>
                <option>Feedback/Suggestions</option>
                <option>Bug Report</option>
            </select>
        </div>
    );
}; 