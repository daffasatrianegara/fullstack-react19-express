export type usersGetQuery = {
    keywords: string | null;
    sort: string | null;
};

export type usersParams = {
    username: string;
    email: string;
    gender: 'M' | 'F';
};
