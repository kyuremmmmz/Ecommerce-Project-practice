"use client";

import React, { useState } from "react";


export default function DataCreate() {
    const [name, setName] = useState<string | ''>('');
    const [description, setDescription] = useState<string | ''>('');
    const [price, setPrice] = useState<number | 0>(0);
    const [discount, setDiscount] = useState<number | 0>(0);
    const [image, setImage] = useState<string | ''>('');
    const [productType, setProductType] = useState<string | ''>('');
    const [loading, setLoading] = useState<boolean>(false);
    const handleImage = async (e:React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {

            setImage(e.target.files[0].name);
        }
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('productName', name);
            formData.append('description', description);
            formData.append('price', price.toString());
            formData.append('discount', discount.toString());
            formData.append('productType', productType);
            if (image) {
                formData.append('image', image.toString());
            }

            const insertData = await fetch('http://localhost:3001/products', {
                method: 'POST',
                body: formData,
            });
            const response = await insertData.json();
            console.log(response);
            if (insertData.ok) {
                setLoading(false);
                setName('');
                setDescription('');
                setDiscount(0);
                setImage('');
                setProductType('');
                setPrice(0);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

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
        handleSubmit,
        handleImage,
    }
}
