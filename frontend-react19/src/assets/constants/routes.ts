import { LayoutDashboard, UserCircleIcon, CarIcon, FileLineChartIcon, LucideBanknoteArrowDown, LucideBarChart2, UserLockIcon } from 'lucide-react';

export const routes = [
    {
        title: 'dashboard',
        url: '/',
        icon: LayoutDashboard,
    },
    {
        title: 'pelanggan',
        url: '/users',
        icon: UserCircleIcon,
    },
    {
        title: 'kendaraan',
        url: '/vehicles',
        icon: CarIcon,
    },
];

export const routesOthers = [
    {
        title: "Keuangan",
        url: "/finance",
        icon: LucideBanknoteArrowDown,
    },
    {
        title: "Peminjaman Inventaris",
        url: "/loans",
        icon: FileLineChartIcon
    },
    {
        title: "Penjualan",
        url: "/sales",
        icon: LucideBarChart2
    }, 
    {
        title: "Karyawan",
        url: "/employees",
        icon: UserLockIcon
    }
]
