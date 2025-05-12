export type carsGetQuery = {
    keywords: string | null;
    sort: string | null;
};

export type carsParams = {
    id: string
    owner_name: string;
    brand: string;
    plate_number: string;
    color: string;
};

export type carsType = {
    id: number;
    owner_name: string;
    brand: string;
};
