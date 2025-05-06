import { instance } from '../axios';

const getCardInfoContent = async () => {
    try {
        const response = await instance.get('/statistics/card-info');
        return response.data;
    } catch (err: any) {
        throw new Error(
            err.response?.data.message ||
                'API tidak tersambung (Internal server error).',
        );
    }
};

const getDataBarChart = async () => {
    try {
        const response = await instance.get('/statistics/users-cars');
        return response.data;
    } catch (err: any) {
        throw new Error(
            err.response?.data.message ||
                'API tidak tersambung (Internal server error).',
        );
    }
};

const getDataPieChartGender = async () => {
    try {
        const response = await instance.get('/statistics/gender');
        return response.data;
    } catch (err: any) {
        throw new Error(
            err.response?.data.message ||
                'API tidak tersambung (Internal server error).',
        );
    }
};

const getDataPieChartCarBrand = async () => {
    try {
        const response = await instance.get('/statistics/car-brand');
        return response.data;
    } catch (err: any) {
        throw new Error(
            err.response?.data.message ||
                'API tidak tersambung (Internal server error).',
        );
    }
};

export {
    getCardInfoContent,
    getDataBarChart,
    getDataPieChartGender,
    getDataPieChartCarBrand,
};
