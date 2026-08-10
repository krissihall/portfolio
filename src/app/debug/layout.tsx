import SideNav from "@/app/components/debug/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container side-nav-grid ml-auto mr-auto">
            <SideNav />
            <div className="side-nav-grid-content">
                <div className="w-full flex-none md:w-64">{/* NOTE: This is just for spacing purposes */}</div>
                <div className="p-6 md:overflow-y-auto md:p-12">{children}</div>
            </div>
        </div>
    );
};
