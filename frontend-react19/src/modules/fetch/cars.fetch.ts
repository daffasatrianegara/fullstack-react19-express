import { instance } from '../axios';
import { carsGetQuery, carsParams } from '@/types/cars.types';

const getDataCars = async ({ keywords, sort }: carsGetQuery) => {
    try {
        const response = await instance.get(
            `/cars?keywords=${keywords}&sort=${sort}`,
        );
        return response.data;
    } catch (err: any) {
        throw new Error(
            err.response?.data.message ||
                'API tidak tersambung (Internal server error).',
        );
    }
};

const getDetailCars = async (id: number) => {
    try {
        const response = await instance.get(`/cars/${id}`);
        return response.data;
    } catch (err: any) {
        throw new Error(
            err.response?.data.message ||
                'API tidak tersambung (Internal server error).',
        );
    }
};

const addCars = async ({
    owner_name,
    brand,
    plate_number,
    color,
}: carsParams) => {
    try {
        const response = await instance.post('/cars', {
            owner_name,
            brand,
            plate_number,
            color,
        });
        return response.data;
    } catch (err: any) {
        throw new Error(
            err.response?.data.message ||
                'API tidak tersambung (Internal server error).',
        );
    }
};

const updateCars = async (
    id: number,
    { owner_name, brand, plate_number, color }: carsParams,
) => {
    try {
        const response = await instance.put(`/cars/${id}`, {
            owner_name,
            brand,
            plate_number,
            color,
        });
        return response.data;
    } catch (err: any) {
        throw new Error(
            err.response?.data.message ||
                'API tidak tersambung (Internal server error).',
        );
    }
};

const deleteCars = async (id: number) => {
    try {
        const response = await instance.delete(`/cars/${id}`);
        return response.data;
    } catch (err: any) {
        throw new Error(
            err.response?.data.message ||
                'API tidak tersambung (Internal server error).',
        );
    }
};

export { getDataCars, getDetailCars, addCars, updateCars, deleteCars };
