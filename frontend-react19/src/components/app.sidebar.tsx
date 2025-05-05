import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarGroupLabel,
} from '@/components/ui/sidebar';
import { routes } from '@/assets/constants/routes';

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarHeader>
                        <p className="font-bold text-3xl">Cartify</p>
                    </SidebarHeader>
                    <SidebarGroupLabel className="mt-2 mb-1 text-lg capitalize">
                        halaman
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {routes.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        className="flex items-center gap-3"
                                    >
                                        <a href={item.url}>
                                            <div className="">
                                                <item.icon />
                                            </div>
                                            <p className=" text-lg capitalize">
                                                {item.title}
                                            </p>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
