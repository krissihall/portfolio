"use client";
import React, { useRef, useState, useActionState } from "react";
import { useFormStatus } from 'react-dom';
import ReCAPTCHA from "react-google-recaptcha";
import { SelectOptions, SelectOption } from "@/app/components/definitions";
import FormInput from "@/app/components/general/forms/form-input";
import FormTextarea from "@/app/components/general/forms/form-textarea";
import FormSelect from "@/app/components/general/forms/form-select";
import { sendEmailAction } from "@/app/api/actions";
// import { Resend } from 'resend';

// const resend = new Resend('re_KyGUYSZB_B3qSi6vn5d1S6WQqbfhNkLyb');

// resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'klh.media09@gmail.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });

// function SubmitButton (isVerified: boolean) {
//   const { pending } = useFormStatus();
//   return (
//     <button type="submit" disabled={pending && !isVerified} className="btn btn-primary mt-2">
//       {pending ? 'Sending...' : 'Send Message'}
//     </button>
//   );
// }

export default function ContactForm () {
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [isVerified, setIsVerified] = useState(false);
    const { pending } = useFormStatus();
    // const [state, action] = useActionState(sendEmailAction, null);
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
            <form action={sendEmailAction}>
                <div className="mb-4">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <FormInput name="name" label="Name:" required={true} />
                        <FormInput name="email" label="Email:" required={true} />
                        <FormInput name="phone" label="Phone:" placeholder="(000)000-0000" />
                        <FormSelect name="subject" label="Subject:" options={options} />
                    </div>
                    <FormTextarea name="message" label="Message:" />
                </div>
                <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                    ref={recaptchaRef}
                    onChange={handleChange}
                    onExpired={handleExpired}
                />
                {/* <SubmitButton isVerified={isVerified} /> */}
                <button
                    className="btn btn-primary mt-2"
                    formAction={sendEmailAction}
                    type="submit"
                    disabled={pending || !isVerified}
                >
                    {pending ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
};
