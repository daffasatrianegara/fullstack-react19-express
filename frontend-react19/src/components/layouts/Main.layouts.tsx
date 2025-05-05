import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app.sidebar";
import { Helmet } from "react-helmet-async"
;
const MainLayout = ({ children, title }: Readonly<{ children: React.ReactNode, title: string }>) => {
  return (
    <SidebarProvider>
        <Helmet>
            <title className="capitalize">{title}</title>
        </Helmet>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <div className="ps-8">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default MainLayout;
