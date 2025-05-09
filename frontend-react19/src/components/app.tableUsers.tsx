import { usersParams } from '@/types/users.types';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { deleteUsers } from '@/modules/fetch/users.fetch';
import { useState } from 'react';
import UpsertDialogUsers from './app.upsertDialogUsers';

const TableUsers = ({ usersData }: Readonly<{ usersData: usersParams[] }>) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogMethod, setDialogMethod] = useState<'add' | 'update'>('add');
    const [selectedUser, setSelectedUser] = useState<usersParams | undefined>();

    const handleAddClick = () => {
        setDialogMethod('add');
        setSelectedUser(undefined);
        setOpenDialog(true);
    };

    const handleEditClick = (user: usersParams) => {
        setDialogMethod('update');
        setSelectedUser(user);
        setOpenDialog(true);
    };

    const handleDeleteData = async (id: string) => {
        const parsedId = Number(id);
        const deleteData = await deleteUsers(parsedId);
        if (deleteData.status == 'Berhasil') {
            window.location.reload();
        }
    };

    return (
        <div className="w-full bg-[#EDF9E9] py-3 px-2">
            <div className="w-full flex px-1 items-center mb-2">
                <p className="font-semibold text-xl text-crayola">
                    data pelanggan
                </p>
                <button
                    className="ms-auto bg-blue-500 text-white font-semibold px-4 py-1 rounded cursor-pointer hover:bg-blue-400"
                    onClick={handleAddClick}
                >
                    Tambah Data
                </button>
            </div>
            <Table className="bg-white rounded-lg">
                <TableCaption>List Data Pelanggan.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[40px] text-center">
                            No
                        </TableHead>
                        <TableHead className="w-[40px] text-center">
                            Email
                        </TableHead>
                        <TableHead className="w-[40px] text-center">
                            Nama Pengguna
                        </TableHead>
                        <TableHead className="w-[40px] text-center">
                            Jenis Kelamin
                        </TableHead>
                        <TableHead className="w-[100px] text-center">
                            Aksi
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {usersData.map((data, index) => (
                        <TableRow>
                            <TableCell key={index} className="text-center">
                                {index + 1}
                            </TableCell>
                            <TableCell className="border-x-1">
                                {data.email}
                            </TableCell>
                            <TableCell className="border-x-1">
                                {data.username}
                            </TableCell>
                            <TableCell className="border-x-1 text-center">
                                {data.gender === 'M' ? 'Pria' : 'Wanita'}
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
            <UpsertDialogUsers
                method={dialogMethod}
                open={openDialog}
                setOpen={setOpenDialog}
                user={selectedUser}
                onSuccess={() => window.location.reload()}
            />
        </div>
    );
};

export default TableUsers;
