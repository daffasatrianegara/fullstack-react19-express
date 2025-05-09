export type usersGetQuery = {
    keywords?: string | null;
    sort?: string | null;
    gender?: string | null;
};

export type usersParams = {
    id: string;
    username: string;
    email: string;
    gender: 'M' | 'F';
};
