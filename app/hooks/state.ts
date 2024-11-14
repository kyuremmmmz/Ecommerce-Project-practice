'use client';

import { useEffect, useState } from 'react';

interface ListTypes {
    _id: string;
    productName: string;
    discount: number;
    description: string;
    productType: string;
    price: number;
    quantity: number;
}

const useFetchProducts = () => {
    const [data, setData] = useState<ListTypes[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:3001/products2');

                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.statusText}`);
                }

                const fetchedData = await response.json();
                console.log(fetchedData);
                setData(fetchedData.products);
                
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
                setError(errorMessage);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { data, loading, error };
};

export default useFetchProducts;