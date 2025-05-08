import { instance } from '../axios';
import { usersGetQuery, usersParams } from '@/types/users.types';

const getDataUsers = async ({ keywords, sort, gender }: usersGetQuery) => {
    try {
        const response = await instance.get(
            `/users?keywords=${keywords}&sort=${sort}&gender=${gender}`,
        );
        return response.data;
    } catch (err: any) {
        throw new Error(
            err.response?.data.message ||
                'API tidak tersambung (Internal server error).',
        );
    }
};

const getDetailUsers = async (id: number) => {
    try {
        const response = await instance.get(`/users/${id}`);
        return response.data;
    } catch (err: any) {
        throw new Error(
            err.response?.data.message ||
                'API tidak tersambung (Internal server error).',
        );
    }
};

const addUsers = async ({ username, email, gender }: usersParams) => {
    try {
        const response = await instance.post('/users', {
            username,
            email,
            gender,
        });
        return response.data;
    } catch (err: any) {
        throw new Error(
            err.response?.data.message ||
                'API tidak tersambung (Internal server error).',
        );
    }
};

const updateUsers = async (
    id: number,
    { username, email, gender }: usersParams,
) => {
    try {
        const response = await instance.put(`/users/${id}`, {
            username,
            email,
            gender,
        });
        return response.data;
    } catch (err: any) {
        throw new Error(
            err.response?.data.message ||
                'API tidak tersambung (Internal server error).',
        );
    }
};

const deleteUsers = async (id: number) => {
    try {
        const response = await instance.delete(`/users/${id}`);
        return response.data;
    } catch (err: any) {
        throw new Error(
            err.response?.data.message ||
                'API tidak tersambung (Internal server error).',
        );
    }
};

export { getDataUsers, getDetailUsers, addUsers, updateUsers, deleteUsers };
