'use client';
import useFetchProducts from '../../../hooks/state';
import React from 'react';
interface ListTypes {
    _id: string;
    productName: string;
    discount: number;
    description: string;
    productType: string;
    price: number;
    quantity: number;
}
export default function List() {
    const { data, loading, error } = useFetchProducts();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data || data.length === 0) return <p>No products available.</p>;

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {data.map((product: ListTypes) => (
                    <li key={product._id}>
                        <h2
                            onClick={() => {
                                console.log(product);
                            }}
                            style={{ cursor: 'pointer', color: 'blue' }}
                        >
                            {product.productName}
                        </h2>
                        <p>Description: {product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Discount: {product.discount}%</p>
                        <p>Quantity: {product.quantity}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
