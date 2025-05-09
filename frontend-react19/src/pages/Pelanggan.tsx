import MainLayout from '@/components/layouts/Main.layouts';
import { getDataUsers } from '@/modules/fetch/users.fetch';
import { usersParams } from '@/types/users.types';
import { useEffect, useState } from 'react';
import { Search, ListFilter, LucideUsers, Mars, Venus } from 'lucide-react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@/components/ui/popover';
import TableUsers from '@/components/app.tableUsers';

const Pelanggan = () => {
    const [users, setUsers] = useState<usersParams[]>([]);
    const [tab, setTab] = useState<1 | 2 | 3>(1);
    const [sort, setSort] = useState<'asc' | 'desc' | null>(null);
    const [search, setSearch] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [debouncedSearch, setDebouncedSearch] = useState<string>('');

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500); 

        return () => {
            clearTimeout(handler);
        };
    }, [search]);

    
    useEffect(() => {
        const fetchData = async () => {
            let gender = '';
            if (tab === 2) {
                gender += 'M';
            } else if (tab === 3) {
                gender += 'F';
            }
    
            const result = await getDataUsers({
                keywords: debouncedSearch,
                sort: sort,
                gender: gender,
            });
            setUsers(result.data);
            setIsLoading(false);
        };

        setIsLoading(true)
        fetchData();
    }, [tab, sort, debouncedSearch]);

    return (
        <MainLayout title="Data Pelanggan" namePage="Data Pelanggan">
            <div className="w-full">
                <div className="flex w-full border-y-1 border-gray-400 py-3 gap-2">
                    <button
                        className={`hover:bg-gray-100 px-5 pt-2 pb-1 cursor-pointer ${tab === 1 ? 'bg-gray-100' : ''} rounded flex items-center gap-2`}
                        onClick={() => setTab(1)}
                    >
                        <LucideUsers size={16} />
                        Semua
                    </button>
                    <button
                        className={`hover:bg-gray-100 px-5 pt-2 pb-1 cursor-pointer ${tab === 2 ? 'bg-gray-100' : ''} rounded flex items-center gap-2`}
                        onClick={() => setTab(2)}
                    >
                        <Mars size={16} />
                        Pria
                    </button>
                    <button
                        className={`hover:bg-gray-100 px-5 pt-2 pb-1 cursor-pointer ${tab === 3 ? 'bg-gray-100' : ''} rounded flex items-center gap-2`}
                        onClick={() => setTab(3)}
                    >
                        <Venus size={16} />
                        Wanita
                    </button>
                </div>
                <div className="w-full flex flex-wrap gap-3 mt-5">
                    <Popover>
                        <PopoverTrigger asChild>
                            <button className="relative px-5 py-1 rounded border-1 border-gray-400 hover:bg-gray-100 cursor-pointer">
                                <ListFilter
                                    className="absolute top-1/2 -translate-y-1/2 left-5"
                                    size={15}
                                />
                                <p className="ps-5 capitalize">urutkan data</p>
                            </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-36 p-1">
                            <div className="flex flex-col">
                                <button
                                    onClick={() => setSort(null)}
                                    className={`text-left px-2 py-1 hover:bg-gray-100 rounded text-sm capitalize cursor-pointer ${sort === null ? 'bg-gray-100' : ''}`}
                                >
                                    Default
                                </button>
                                <button
                                    onClick={() => setSort('asc')}
                                    className={`text-left px-2 py-1 hover:bg-gray-100 rounded text-sm capitalize cursor-pointer ${sort === 'asc' ? 'bg-gray-100' : ''}`}
                                >
                                    Data terlama
                                </button>
                                <button
                                    onClick={() => setSort('desc')}
                                    className={`text-left px-2 py-1 hover:bg-gray-100 rounded text-sm capitalize cursor-pointer ${sort === 'desc' ? 'bg-gray-100' : ''}`}
                                >
                                    Data Terbaru
                                </button>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <div className="relative w-[70%]">
                        <Search
                            size={15}
                            className="absolute top-1/2 -translate-y-1/2 left-2"
                        />
                        <input
                            className="border-1 border-gray-500 w-full ps-8 rounded py-1"
                            type="text"
                            placeholder="Cari Data..."
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
                <div className='mt-5'>
                    {users && isLoading === false ? (
                        <div>
                            <TableUsers usersData={users} />
                        </div>
                    ) : (
                        <div>
                            <p>Loading...</p>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default Pelanggan;
