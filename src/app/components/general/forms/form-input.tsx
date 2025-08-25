"use client";
import React, { useState, useEffect } from "react";
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
    const [inputValue, setInputValue] = useState(value || '');

    if (label && !isEmpty(label) && !placeholder || isEmpty(placeholder)) {
        placeholder = label;
    }

    if (!required) {
        required = false;
    }

    const handleChange = (event: any) => {
        setInputValue(event.target.value);
    };
    
    useEffect(() => {
        setInputValue(value || '');
    }, [value]);

    return (
        <div className={clsx("input-group relative", {className}, { "required": required })} data-twe-input-wrapper-init>
            <input
                name={name}
                id={inputId}
                placeholder={placeholder}
                className={clsx("w-full form-input", {"has-value": !isEmpty(inputValue)})}
                value={inputValue}
                required={required}
                onChange={handleChange}
            />
            <label className="form-label" htmlFor={inputId}>{label}</label>
        </div>
    );
}; 