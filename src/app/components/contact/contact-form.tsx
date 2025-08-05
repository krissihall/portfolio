"use client";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import FormInput from "@/app/components/general/forms/form-input";
import FormTextarea from "@/app/components/general/forms/form-textarea";
import FormSelect from "@/app/components/general/forms/form-select";

export default function ContactForm () {
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [isVerified, setIsVerified] = useState(false);

    const handleCaptchaSubmission = async (token: string | null) => {
        try {
            if (token) {
                await fetch("/api", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token }),
                });
                setIsVerified(true);
            }
        } catch (e) {
            setIsVerified(false);
        }
    }

    const handleChange = (token: string | null) => {
        handleCaptchaSubmission(token);
    };

    const handleExpired = () => {
        setIsVerified(false);
    }

    return (
        <div className="contact-form form-container">
            <FormInput name="nameField" label="Name:" required={true} className="inherited-class" />
            <FormInput name="emailField" label="Email:" required={true} />
            <FormInput name="phoneField" label="Phone:" placeholder="(000)000-0000" />
            <FormSelect name="subjectField" label="Subject:" />
            <FormTextarea name="messageField" label="Message:" />
            <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                ref={recaptchaRef}
                onChange={handleChange}
                onExpired={handleExpired}
            />
            <button
                className="btn btn-primary mt-2"
                type="submit"
                disabled={!isVerified}
            >
                Submit Form
            </button>
        </div>
    );
};
