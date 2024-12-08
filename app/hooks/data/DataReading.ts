"use client";
import { io } from 'socket.io-client';
import { DataReadings } from '@/app/type/DataReadings';
import { useEffect, useState } from 'react'

function DataReading() {
    const [data, setData] = useState<DataReadings[]>([]);
    const [err, setErr] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    
    
    useEffect(() => {
        const socket = io('http://localhost:3002');
        const handleFetch = async () => {
            try {
                const datas = await fetch('http://localhost:3001/v2/schema');
                const response = await datas.json();
                if (datas.ok) {
                    setData(response.products);
                    setLoading(false);
                    setErr(false);
                } else {
                    setLoading(false);
                    setErr(true);
                }
            } catch (error) {
                console.log(error);

            }
        }
        handleFetch();
        socket.on('delete', (_id: string) => {
            setData(prevProducts => prevProducts.filter(product => product._id !== _id));
        })
        socket.on('create', (savedData: DataReadings) => {
            setData(prevProducts => [...prevProducts, savedData]);
        })
        socket.on('product_update', (product: DataReadings) => {
            setData((prevData) =>
                prevData.map((item) =>
                    item._id === product._id ? product : item
                )
            );
        });

        return () => {
            socket.off();
        }


    }, [])
    return {data, err, loading}
}

export default DataReading