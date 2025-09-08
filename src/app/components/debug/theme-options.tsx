import { Color } from "@/app/components/definitions";
import { theme, subtle, emphasis} from "@/app/components/data/theme.js";
import { generateID } from "@/app/helpers/generate-id";
import Collapser from "../general/collapser";

export default function ThemeOptions() {
    return (
        <main className="theme-options-container">
            <section className="css-vars-container container ml-auto mr-auto mb-4 rounded-box">
                <h2 id="cssColors" className="mb-2">
                    CSS Colors
                    <a href="#cssColors" className="anchor-link"></a>
                </h2>
                <Collapser name="CSS Color Theme Vars" ID={generateID()}>
                    <div className="color-options options flex flex-wrap justify-stretch mb-2">
                        <>
                            {theme.colors.map((color: Color, index: number) => {
                                const spanClass = "text-" + color.name;
                                return (
                                    <div className="color-option option bg-gray-800 p-2 mr-2 mb-2" key={index}>
                                        <div className="option-text flex flex-row flex-nowrap justify-between">
                                            <div className="text-medium pr-2">Name:</div> <div className={spanClass}>{color.name}</div>
                                        </div>
                                        <div className="option-text flex flex-row flex-nowrap justify-between">
                                            <div className="text-medium pr-2">Hex:</div> <div className={spanClass}>{color.hex}</div>
                                        </div>
                                        <div className="option-text flex flex-row flex-nowrap justify-between">
                                            <div className="text-medium pr-2">RGB:</div> <div className={spanClass}>{color.rgb}</div>
                                        </div>
                                        <div className="option-text flex flex-row flex-nowrap justify-between">
                                            <div className="text-medium pr-2">Options:</div> <div className={spanClass}>
                                                <ul className="list-none">
                                                    {theme.types.map((type: string, index: number) => {
                                                        return (
                                                            <li className="text-sm" key={index}>
                                                                .{type}-{color.name}
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </>
                    </div>
                </Collapser>
                <Collapser name="CSS Color Theme Subtle" ID={generateID()}>
                    <div className="color-options options flex flex-wrap justify-stretch mb-2">
                        <>
                            {subtle.colors.map((color: Color, index: number) => {
                                const spanClass = `text-${color.name}-emphasis`;
                                return (
                                    <div className={`color-option option p-2 mr-2 mb-2 text-black border border-2 border-${color.name} bg-${color.name}-subtle`} key={index}>
                                        <div className="option-text flex flex-row flex-nowrap justify-between">
                                            <div className="text-medium pr-2">Name:</div> <div className={spanClass}>{color.name}</div>
                                        </div>
                                        <div className="option-text flex flex-row flex-nowrap justify-between">
                                            <div className="text-medium pr-2">Hex:</div> <div className={spanClass}>{color.hex}</div>
                                        </div>
                                        <div className="option-text flex flex-row flex-nowrap justify-between">
                                            <div className="text-medium pr-2">Options:</div> <div className={spanClass}>
                                                <ul className="list-none">
                                                    {subtle.types.map((type: string, index: number) => {
                                                        return (
                                                            <li className="text-sm" key={index}>
                                                                .{type}-{color.name}
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </>
                    </div>
                </Collapser>
                <Collapser name="CSS Color Theme Emphasis" ID={generateID()}>
                    <div className="color-options options flex flex-wrap justify-stretch mb-2">
                        <>
                            {emphasis.colors.map((color: Color, index: number) => {
                                const spanClass = `text-${color.name}-emphasis`;
                                return (
                                    <div className={`color-option option bg-white p-2 mr-2 mb-2 text-black border border-2 border-${color.name}`} key={index}>
                                        <div className="option-text flex flex-row flex-nowrap justify-between">
                                            <div className="text-medium pr-2">Name:</div> <div className={spanClass}>{color.name}</div>
                                        </div>
                                        <div className="option-text flex flex-row flex-nowrap justify-between">
                                            <div className="text-medium pr-2">Hex:</div> <div className={spanClass}>{color.hex}</div>
                                        </div>
                                        <div className="option-text flex flex-row flex-nowrap justify-between">
                                            <div className="text-medium pr-2">Options:</div> <div className={spanClass}>
                                                <ul className="list-none">
                                                    {emphasis.types.map((type: string, index: number) => {
                                                        return (
                                                            <li className="text-sm" key={index}>
                                                                .{type}-{color.name}
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </>
                    </div>
                </Collapser>
            </section>

            <section className="text-options-container container ml-auto mr-auto mb-4 rounded-box">
                <h2 id="textColorOptions" className="mb-2">
                    Text Color Options
                    <a href="#textColorOptions" className="anchor-link"></a>
                </h2>
                <div className="text-options options">
                    <>
                        {theme.colors.map((color: Color, index: number) => {
                            const classDef = "text-" + color.name;
                            return (
                                <div className="d-block" key={index}>
                                    <p className={classDef}>This text is using the <strong>.text-{color.name}</strong> className.</p>
                                    <p className={`bg-${color.name}-subtle ${classDef}-emphasis`}>This text is using the <strong>.text-{color.name}-emphasis</strong> className.</p>
                                </div>
                            );
                        })}
                    </>
                </div>
            </section>

            <section className="bg-options-container container ml-auto mr-auto mb-4 rounded-box">
                <h2 id="bgColorOptions" className="mb-2">
                    Background Color Options
                    <a href="#bgColorOptions" className="anchor-link"></a>
                </h2>
                <div className="theme-options options flex flex-wrap mb-4">
                    <>
                        {theme.colors.map((color: Color, index: number) => {
                            const classDef = "bg-option option flex items-center justify-center text-center mr-1 mb-1 w-20 h-20 p-1 text-xs";
                            return (
                                <div className="d-inline-flex" key={index}>
                                    <div className={`${classDef} text-bg-${color.name}`}>.text-bg-{color.name}</div>
                                    <div className={`${classDef} bg-${color.name}-subtle text-${color.name}-emphasis`}>.bg-{color.name}-subtle</div>
                                </div>
                            );
                        })}
                    </>
                </div>
            </section>

            <section className="bg-borders-container container ml-auto mr-auto mb-4 rounded-box">
                <h2 id="borderOptions" className="mb-2">
                    Border Options
                    <a href="#borderOptions" className="anchor-link"></a>
                </h2>
                <div className="theme-options options flex flex-wrap mb-2">
                    <>
                        {theme.colors.map((color: Color, index: number) => {
                            const classDef = "border-option option flex items-center justify-center text-center mr-2 mb-2 p-2 text-xs border border-1";
                            return (
                                <div className="d-inline-flex" key={index}>
                                    <div className={`${classDef} border-${color.name} text-${color.name}`}>.border-{color.name}</div>
                                    <div className={`${classDef} border-${color.name}-subtle text-${color.name}`}>.border-{color.name}-subtle</div>
                                </div>
                            );
                        })}
                    </>
                </div>
            </section>

            <section className="bg-buttons-container container ml-auto mr-auto mb-4 rounded-box">
                <h2 id="buttonOptions" className="mb-2">
                    Button Options
                    <a href="#buttonOptions" className="anchor-link"></a>
                </h2>
                <div className="theme-options options flex flex-wrap mb-4">
                    <>
                        {theme.colors.map((color: Color, index: number) => {
                            const classDef = "button-option option flex items-center justify-center text-center mr-2 mb-2";
                            return (
                                <div className="d-inline-flex" key={index}>
                                    <div className={classDef}>
                                        <button className={`btn btn-${color.name}`}>
                                            .btn-{color.name}
                                        </button>
                                    </div>
                                    <div className={classDef}>
                                        <button className={`btn btn-outline-${color.name}`}>
                                            .btn-{color.name}-outline
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </>
                </div>

                <h3 className="mb-2">Button Sizes</h3>
                <div className="d-block button-size-options options">
                    <button className="btn btn-lg btn-primary ml-2">Large Button</button>
                    <button className="btn btn-primary ml-2">Regular Button</button>
                    <button className="btn btn-sm btn-primary ml-2">Small Button</button>
                </div>
            </section>
        </main>
    )
};