"use client";

import DataReading from "./DataReading";

export default function DeleteData() {
    const { handleFetch } = DataReading();
    const handleDelete = async (id:string) => {
        const res = await fetch(`http://localhost:3001/v2/delete/${id}`, 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }
        )
        const result = await res.json();
        if (res.ok) {
            console.log(result);
            handleFetch();
        }
    }
    return {handleDelete}
}