import { addUsers, updateUsers } from '@/modules/fetch/users.fetch';
import { usersParams } from '@/types/users.types';
import { useEffect, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const UpsertDialogUsers = ({
    method,
    open,
    setOpen,
    user,
    onSuccess,
}: {
    method: 'add' | 'update';
    open: boolean;
    setOpen: (value: boolean) => void;
    user?: usersParams;
    onSuccess: () => void;
}) => {
    const [formData, setFormData] = useState<usersParams>({
        id: '',
        email: '',
        username: '',
        gender: 'M',
    });

    useEffect(() => {
        if (user) setFormData(user);
        else setFormData({ id: '', email: '', username: '', gender: 'M' });
    }, [user]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpsertData = async (e: React.FormEvent) => {
        e.preventDefault();
        if (method === 'add') {
            await addUsers(formData);
        } else if (method === 'update' && formData.id) {
            await updateUsers(Number(formData.id), formData);
        }

        onSuccess();
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {method === 'add' ? 'Tambah' : 'Perbarui'} Data Pelanggan
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleUpsertData} className="space-y-3">
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                        required
                    />
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                        required
                    />
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                    >
                        <option value="M">Pria</option>
                        <option value="F">Wanita</option>
                    </select>
                    <DialogFooter>
                        <Button type="submit">Simpan</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default UpsertDialogUsers;
