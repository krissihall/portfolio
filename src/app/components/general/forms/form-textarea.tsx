"use client";
import React, { useState, useEffect } from "react";
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
    const [inputValue, setInputValue] = useState(value || '');

    const handleChange = (event: any) => {
        setInputValue(event.target.value);
    };

    if (!required) {
        required = false;
    }

    useEffect(() => {
        setInputValue(value || '');
    }, [value]);

    return (
        <div className={clsx("relative", {className }, { "required": required })} data-twe-input-wrapper-init>
            <textarea
                name={name}
                id={textareaId}
                className={clsx("w-full form-textarea h-32", {"has-value": !isEmpty(inputValue)})}
                required={required}
                onChange={handleChange}
            >
                {inputValue}
            </textarea>
            <label className="form-label" htmlFor={textareaId}>{label}</label>
        </div>
    );
}; 