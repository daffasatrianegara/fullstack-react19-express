import { deleteCars } from '@/modules/fetch/cars.fetch';
import { carsParams } from '@/types/cars.types';
import { useState } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import UpsertDialogCars from './app.upsertDialogCars';

const TableCars = ({ carsData }: Readonly<{ carsData: carsParams[] }>) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogMethod, setDialogMethod] = useState<'add' | 'update'>('add');
    const [selectedUser, setSelectedUser] = useState<carsParams | undefined>();

    const handleAddClick = () => {
        setDialogMethod('add');
        setSelectedUser(undefined);
        setOpenDialog(true);
    };

    const handleEditClick = (cars: carsParams) => {
        setDialogMethod('update');
        setSelectedUser(cars);
        setOpenDialog(true);
    };

    const handleDeleteData = async (id: string) => {
        const parsedId = Number(id);
        const deleteData = await deleteCars(parsedId);
        if (deleteData.status == 'Berhasil') {
            window.location.reload();
        }
    };

    return (
        <div className="w-full bg-[#EDF9E9] py-3 px-2">
            <div className="w-full flex px-1 items-center mb-2">
                <p className="font-semibold text-xl text-crayola">
                    data kendaraan
                </p>
                <button
                    className="ms-auto bg-blue-500 text-white font-semibold px-4 py-1 rounded cursor-pointer hover:bg-blue-400"
                    onClick={handleAddClick}
                >
                    Tambah Data
                </button>
            </div>
            <Table className="bg-white rounded-lg">
                <TableCaption>List Data Kendaraan.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[40px] text-center">
                            No
                        </TableHead>
                        <TableHead className="w-[40px] text-center">
                            Merk Kendaraan
                        </TableHead>
                        <TableHead className="w-[40px] text-center">
                            Nama Pemilik
                        </TableHead>
                        <TableHead className="w-[40px] text-center">
                            Plat Nomor
                        </TableHead>
                        <TableHead className="w-[40px] text-center">
                            Warna Kendaraan
                        </TableHead>
                        <TableHead className="w-[100px] text-center">
                            Aksi
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {carsData.map((data, index) => (
                        <TableRow>
                            <TableCell key={index} className="text-center">
                                {index + 1}
                            </TableCell>
                            <TableCell className="border-x-1">
                                {data.brand}
                            </TableCell>
                            <TableCell className="border-x-1">
                                {data.owner_name}
                            </TableCell>
                            <TableCell className="border-x-1 text-center">
                                {data.plate_number}
                            </TableCell>
                            <TableCell className="border-x-1 text-center">
                                {data.color}
                            </TableCell>
                            <TableCell>
                                <div className="flex gap-3 items-center w-full h-full justify-center">
                                    <button
                                        className="px-3 py-1 font-semibold text-crayola bg-yellow-400 rounded cursor-pointer hover:bg-yellow-300"
                                        onClick={() => handleEditClick(data)}
                                    >
                                        Perbarui
                                    </button>
                                    <button
                                        className="px-3 py-1 font-semibold text-white bg-red-500 rounded cursor-pointer hover:bg-red-400"
                                        onClick={() =>
                                            handleDeleteData(data.id)
                                        }
                                    >
                                        Hapus
                                    </button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <UpsertDialogCars
                method={dialogMethod}
                open={openDialog}
                setOpen={setOpenDialog}
                cars={selectedUser}
                onSuccess={() => window.location.reload()}
            />
        </div>
    );
};

export default TableCars;
