export type carsGetQuery = {
    keywords: string | null
    sort: string | null
}

export type carsParams = {
    owner_name: string
    brand: string
    plate_number: string
    color: string
}