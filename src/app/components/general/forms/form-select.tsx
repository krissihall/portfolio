"use client";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { SelectOptions } from "@/app/components/definitions";
import { isEmpty } from "@/app/helpers/is-empty";
import { generateID } from "@/app/helpers/generate-id";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface Props {
    name: string,
    label?: string,
    placeholder?: string,
    options?: SelectOptions;
    required?: boolean,
    value?: string,
    className?: string
}

export default function FormSelect({ name, label, placeholder, options, required, value, className }: Props) {
    const [selectedValue, setSelectedValue] = useState(value || '');
    const generatedId = `select-${generateID()}`;
    if (label && !isEmpty(label) && !placeholder || isEmpty(placeholder)) {
        placeholder = label;
    }

    if (!required) {
        required = false;
    }

    const handleChange = (event: any) => {
        setSelectedValue(event.target.value);
    }
    
    useEffect(() => {
        setSelectedValue(value || '');
    }, [value]);

    return (
        <div className={clsx("relative select-container", { className }, { "required": required })}>
            <select
                name={name}
                id={generatedId}
                value={selectedValue}
                className={clsx("w-full form-select", {"has-value": !isEmpty(selectedValue)})}
                onChange={handleChange}
                required={required}
                data-te-select-init
            >
                <option selected disabled hidden></option>
                {options?.options.map((option) => (
                    <option key={option.id} value={option.id}>{option.text}</option>
                ))}
            </select>
            <div className="arrow">
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <label className="form-label" htmlFor={generatedId} data-twe-select-label-ref>{label}</label>
        </div>
    );
}; 