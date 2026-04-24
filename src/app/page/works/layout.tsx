'use client';
import SideNav from '@/app/components/works/sidenav';
import { useBootstrapBreakpoint } from '@/app/hooks/useBootstrapBreakpoint';

export default function Layout({ children }: { children: React.ReactNode }) {
    const bp = useBootstrapBreakpoint();
    const isMobile = bp === 'xs' || bp === 'sm' ? true : false;

    return (
        <div className={`container-fluid side-nav-grid ${isMobile ? 'mobile' : ''}`}>
            <SideNav />
            <div className="side-nav-grid-content">
                <div className="w-full flex-none md:w-64">{/* NOTE: This is just for spacing purposes */}</div>
                <div className="md:overflow-y-auto md:p-12">{children}</div>
            </div>
        </div>
    );
};
