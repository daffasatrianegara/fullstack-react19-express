import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app.sidebar';
import { useEffect } from 'react';

const MainLayout = ({
    children,
    title,
    namePage,
}: Readonly<{
    children: React.ReactNode;
    title: string;
    namePage: string;
}>) => {
    useEffect(() => {
        document.title = `${title} | Cartify`;
    }, [title]);

    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full mb-8">
                <SidebarTrigger />
                <div className="px-8">
                    <p className="font-bold text-crayola text-3xl mb-5">
                        {namePage}
                    </p>
                    <div className="w-full">{children}</div>
                </div>
            </main>
        </SidebarProvider>
    );
};

export default MainLayout;
