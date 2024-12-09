export type DataReadings = {
    _id: string;
    productName: string;
    discount: number;
    description: string;
    productType: string;
    price: number;
    image: string;
}

export type ID = {
    _id: string;
}

export type Value = {
    password: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
