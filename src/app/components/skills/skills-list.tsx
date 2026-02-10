"use client";
import { useState } from 'react';
import Collapser from '../general/collapser';
import { generateID } from "@/app/helpers/generate-id";
import { NavLink } from "@/app/components/definitions";
import { links } from "@/app/data/navigation";

export default function SkillsList() {
    const [current, setCurrent] = useState<NavLink>(links[0]);
    
    return (
        <div className="skills-list-container">
            <Collapser name="Web Standards" ID={generateID()} customClass="skills">
                <ul className={`list-disc ps-8 text-secondary-lgt`}>
                    <li>HTML/HTML5 &ndash; 27+ years</li>
                    <li>CSS/CSS3 &ndash; 27+ years</li>
                    <li>Javascript/ES6/jQuery &ndash; 14+ years</li> 
                    <li>Node.js/GIT &ndash; 11+ years</li>
                    <li>ADA Accessibility &ndash; 11+ years</li>
                    <li>SEO Optimization &ndash; 10+ years</li>
                    <li>Globalization (i18n) &ndash; 11+ years</li>
                </ul>
            </Collapser>
            <Collapser name="UI Frameworks" ID={generateID()} customClass="skills">
                <ul className={`list-disc ps-8 text-secondary-lgt`}>
                    <li>Bootstrap &ndash; 10+ years</li>
                    <li>Ember.js &ndash; 5+ years</li> 
                    <li>Vue.js &ndash; 4+ years</li>
                    <li>React &ndash; 1 year</li>
                    <li>Angular</li>
                </ul>
            </Collapser>
            <Collapser name="Styling" ID={generateID()} customClass="skills">
                <ul className={`list-disc ps-8 text-secondary-lgt`}>
                    <li>Media Queries &ndash; 14+ years</li>
                    <li>SASS/SCSS &ndash; 11+ years</li>
                    <li>Stylus &ndash; 11+ years</li>
                    <li>LESS &ndash; 11+ years</li>
                </ul>
            </Collapser>
            <Collapser name="Design" ID={generateID()} customClass="skills">
                <ul className={'list-disc ps-8 text-secondary-lgt'}>
                    <li>Adobe Photoshop &ndash; 20+ years</li>
                    <li>Adobe Lightroom &ndash; 5+ years</li>
                    <li>Adobe Illustrator &ndash; 19+ years</li>
                    <li>Adobe InDesign &ndash; 19+ years</li>
                    <li>Adobe Premiere &ndash; 5+ years</li>
                    <li>Adobe After Effects &ndash; 10+ years</li>
                    <li>Adobe Audition &ndash; 5+ years</li>
                    <li>Figma &ndash; 4+ years</li>
                </ul>
            </Collapser>
            <Collapser name="Agile" ID={generateID()} customClass="skills">
                <ul className={`list-disc ps-8 text-secondary-lgt`}>
                    <li>Jira/Confluence/BitBucket &ndash; 11+ years</li>
                    <li>Visual Studio/TFS/GIT &ndash; 11+ years</li>
                    <li>Microsoft/Teams &ndash; 5+ years</li>
                </ul>
            </Collapser>
        </div>
    )
};