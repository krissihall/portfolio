import Header from '@/app/components/general/header';
import Footer from '@/app/components/general/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col flex-1 flex-nowrap min-h-screen min-w-full">
            <Header />

            <div className="content-container basis-full">
                {children}
            </div>

            <Footer />
        </div>
    );
};
