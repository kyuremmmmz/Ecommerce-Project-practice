"use client";

import React, { useState } from "react";

export default function UpdateData() {
    const [name, setName] = useState<string | ''>('');
    const [description, setDescription] = useState<string | ''>('');
    const [price, setPrice] = useState<number | 0>(0);
    const [discount, setDiscount] = useState<number | 0>(0);
    const [image, setImage] = useState<unknown | ''>('');
    const [productType, setProductType] = useState<string | ''>('');
    const [loading, setLoading] = useState<boolean>(false);
    const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        if (e.target.files && e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = () => {
                console.log(reader.result);
                setImage(reader.result);
            }
        }
    }
    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>, _id: string) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3001/v2/update/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    productName: name,
                    description: description,
                    price: price,
                    discount: discount,
                    image: image,
                    productType: productType
                })
            })
            const result = await response.json();
            if (response.ok) {
                console.log(result);
            } else {
                throw new Error(result.message);
            }
        } catch (err) {
            console.error(err);
            throw new Error('Failed to update data');
        }
    }
    return {
        name,
        setName,
        description,
        setDescription,
        price,
        loading,
        setPrice,
        discount,
        setDiscount,
        image,
        setImage,
        productType,
        setProductType,
        setLoading,
        handleUpdate,
        handleImage,
    }
}