import SideNav from '@/app/components/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container ml-auto mr-auto">
            <div className="flex flex-col md:flex-row md:overflow-hidden">
                <div className="w-full flex-none md:w-64">
                    <SideNav />
                </div>
                <div className="p-6 md:overflow-y-auto md:p-12">{children}</div>
            </div>
        </div>
    );
};
