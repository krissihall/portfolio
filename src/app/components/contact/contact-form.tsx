"use client";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { SelectOptions, SelectOption } from "@/app/components/definitions";
import FormInput from "@/app/components/general/forms/form-input";
import FormTextarea from "@/app/components/general/forms/form-textarea";
import FormSelect from "@/app/components/general/forms/form-select";

export default function ContactForm () {
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [isVerified, setIsVerified] = useState(false);
    const options = {
        options: [
            {
                id: 1,
                text: 'Job Inquiry',
            }, {
                id: 2,
                text: 'Freelance Project',
            }, {
                id: 3,
                text: 'Collab Opportunity',
            }, {
                id: 4,
                text: 'General Inquiry',
            }, {
                id: 5,
                text: 'Feedback/Suggestions',
            }, {
                id: 6,
                text: 'Bug Report',
            }
        ]
    };

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
        <div className="contact-form rounded-box">
            <div className="mb-4">
                <div className="grid grid-cols-2 gap-3 mb-4">
                    <FormInput name="nameField" label="Name:" required={true} />
                    <FormInput name="emailField" label="Email:" required={true} />
                    <FormInput name="phoneField" label="Phone:" placeholder="(000)000-0000" />
                    <FormSelect name="subjectField" label="Subject:" options={options} />
                </div>
                <FormTextarea name="messageField" label="Message:" />
            </div>
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
