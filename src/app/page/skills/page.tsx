import SkillsList from "@/app/components/skills/skills-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Skills",
    description: "This is where I list the skills I have aquired over the years.    `+",
};

export default function Skills() {
    return (
        <main className="contact-container container max-w-4xl ml-auto mr-auto">
            <h1>Skills</h1>
            <section className="rounded-box">
                <p>
                    Below are some of the skills I have aquired over the years and the amount of time I have been working
                    with various technologies.
                </p>
                <SkillsList />
            </section>
        </main>
    );
};
