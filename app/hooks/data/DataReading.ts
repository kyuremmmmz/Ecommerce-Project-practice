import { DataReadings } from '@/app/type/DataReadings';
import { useEffect, useState } from 'react'


function DataReading() {
    const [data, setData] = useState<DataReadings[]>([]);
    const [err, setErr] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        const handleFetch = async () => {
            try {
                const datas = await fetch('http://localhost:3001/v2/schema');
                const response = await datas.json();
                if (datas.ok) {
                    setData(response.product);
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
    }, [])
    return {data, err, loading}
}

export default DataReading