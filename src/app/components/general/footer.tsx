import LinkedIn from "@/app/components/general/icons/linked-in";
import Github from "@/app/components/general/icons/github";
import FiletypePdf from "@/app/components/general/icons/filetype-pdf";

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="flex basis-0 bg-gray-900">
            <div className="container ml-auto mr-auto pt-6 pb-6">
                <div className="flex items-center justify-between">
                    <p className="copyright">&copy; {year} Kristina L. Hall</p>
                    <div className="links">
                        <div className="link tooltip tooltip-primary" data-tip="LinkedIn Profile">
                            <a href="https://www.linkedin.com/in/kristina-hall-51802b6b/" target="_blank">
                                <LinkedIn width="32" height="32" className="link-icon" hasHover={true} />
                            </a>
                        </div>
                        
                        <div className="link tooltip tooltip-primary" data-tip="Github Profile">
                            <a href="https://github.com/krissihall" target="_blank">
                                <Github width="32" height="32" className="link-icon" hasHover={true} />
                            </a>
                        </div>

                        <div className="link tooltip tooltip-primary" data-tip="Download Resume">
                            <a href="/Kristina-Hall-redesign_2025.pdf" target="_blank">
                                <FiletypePdf width="32" height="32" className="link-icon" hasHover={true} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
