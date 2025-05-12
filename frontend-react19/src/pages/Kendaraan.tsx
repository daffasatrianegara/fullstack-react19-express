import MainLayout from '@/components/layouts/Main.layouts';
import { getDataCars } from '@/modules/fetch/cars.fetch';
import { carsParams } from '@/types/cars.types';
import { useEffect, useState } from 'react';
import { Search, ListFilter } from 'lucide-react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@/components/ui/popover';
import TableCars from '@/components/app.tableCars';

const Kendaraan = () => {
    const [cars, setCars] = useState<carsParams[]>([]);
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
            const result = await getDataCars({ keywords: search, sort: sort });
            setCars(result.data);
            setIsLoading(false);
        };

        setIsLoading(true);
        fetchData();
    }, [sort, debouncedSearch]);

    return (
        <MainLayout title="Data Kendaraan" namePage="Data Kendaraan">
            <div className="w-full">
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
                <div className="mt-5">
                    {cars && isLoading === false ? (
                        <div>
                            <TableCars carsData={cars} />
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

export default Kendaraan;
