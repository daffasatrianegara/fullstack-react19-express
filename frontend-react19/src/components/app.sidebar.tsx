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
    SidebarFooter,
} from '@/components/ui/sidebar';
import { routes, routesOthers } from '@/assets/constants/routes';
import { ChevronUp } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent className="bg-[#edf9e9]">
                <SidebarGroup>
                    <SidebarHeader>
                        <p className="font-bold text-xl">
                            <span className="text-sea-green">Cartify</span>{' '}
                            Dashboard
                        </p>
                    </SidebarHeader>
                    <SidebarGroupLabel className="mt-1 text-base capitalize text-gray-400">
                        Sumber Daya
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {routes.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        className="w-full h-9 hover:bg-[#ceffce] transition-all duration-200"
                                    >
                                        <a
                                            href={item.url}
                                            className="flex items-center gap-2 w-full"
                                        >
                                            <div>
                                                <item.icon
                                                    size={19}
                                                    className=" text-gray-600"
                                                />
                                            </div>
                                            <p className=" text-base capitalize text-crayola font-medium">
                                                {item.title}
                                            </p>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel className="mt-1 text-base capitalize text-gray-400">
                        Laporan
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {routesOthers.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        className="w-full h-9 hover:bg-[#ceffce] transition-all duration-200"
                                    >
                                        <a
                                            href={item.url}
                                            className="flex items-center gap-2 w-full"
                                        >
                                            <div>
                                                <item.icon
                                                    size={19}
                                                    className=" text-gray-600"
                                                />
                                            </div>
                                            <p className="text-base capitalize text-crayola font-medium">
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
            <SidebarFooter className="bg-[#edf9e9]">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton className="hover:bg-[#ceffce] transition-all duration-200 cursor-pointer text-base capitalize text-crayola font-medium">
                                    Lainnya
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem>
                                    <span className="text-base capitalize text-crayola font-medium">
                                        Akun Saya
                                    </span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span className="text-base capitalize text-crayola font-medium">
                                        Pengaturan
                                    </span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span className="text-base capitalize text-red-500 font-medium">
                                        Keluar
                                    </span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
