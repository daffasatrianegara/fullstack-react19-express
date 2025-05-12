import { useEffect, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { addCars, updateCars } from '@/modules/fetch/cars.fetch';
import { carsParams } from '@/types/cars.types';

const UpsertDialogCars = ({
    method,
    open,
    setOpen,
    cars,
    onSuccess,
}: {
    method: 'add' | 'update';
    open: boolean;
    setOpen: (value: boolean) => void;
    cars?: carsParams;
    onSuccess: () => void;
}) => {
    const [formData, setFormData] = useState<carsParams>({
        id: '',
        owner_name: '',
        brand: '',
        plate_number: '',
        color: '',
    });

    useEffect(() => {
        if (cars) setFormData(cars);
        else
            setFormData({
                id: '',
                owner_name: '',
                brand: '',
                plate_number: '',
                color: '',
            });
    }, [cars]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpsertData = async (e: React.FormEvent) => {
        e.preventDefault();
        if (method === 'add') {
            await addCars(formData)
        } else if (method === 'update' && formData.id) {
            await updateCars(Number(formData.id), formData);
        }

        onSuccess();
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {method === 'add' ? 'Tambah' : 'Perbarui'} Data
                        Kendaraan
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleUpsertData} className="space-y-3">
                    <input
                        name="brand"
                        type="text"
                        placeholder="Masukkan Merk Kendaraan..."
                        value={formData.brand}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                        required
                    />
                    <input
                        name="owner_name"
                        type="text"
                        placeholder="Masukkan nama pemilik kendaraan..."
                        value={formData.owner_name}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                        required
                    />
                    <input
                        name="plate_number"
                        type="text"
                        placeholder="Masukkan plat nomor kendaraan..."
                        value={formData.plate_number}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                        required
                    />
                    <input
                        name="color"
                        type="text"
                        placeholder="Masukkan warna kendaraan..."
                        value={formData.color}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                        required
                    />
                    <DialogFooter>
                        <Button className="cursor-pointer" type="submit">
                            Simpan
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default UpsertDialogCars;
