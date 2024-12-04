import DataReading from '@/app/hooks/data/DataReading';
import React from 'react';

function ListInProducts() {
    const { data } = DataReading();
    return (
        <div className="flex flex-row">
            <div className="flex flex-col bg-slate-200 w-80 rounded-lg shadow-lg max-h-[700px] overflow-y-auto overflow-x-hidden">
                <div className='sticky top-0 bg-white w-full'>
                    <div className="flex flex-row gap-4 sticky top-0 w-full">
                        <h1 className="text-2xl font-medium text-black">Popular Products</h1>
                    </div>
                    <div className="flex flex-row w-full sticky top-12 justify-evenly gap-24 mt-4">
                        <h2 className="text-black font-semibold">Product</h2>
                        <h2 className="text-black font-semibold">Earnings</h2>
                    </div>
                </div>
                {data.map((product) => (
                    <div
                        className="flex flex-row justify-between p-6 items-center gap-16 py-2 border-b border-gray-500"
                        key={product._id}
                    >
                        <div className=' flex flex-row gap-2 justify-between'>
                            {product.image ? (
                                <img src={product.image} alt={product.productName} width={50} height={50}></img>
                            ) : (
                                <div className=" bg-gray-300 flex items-center justify-center">
                                    No Image
                                </div>
                            )}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-sm font-medium text-gray-700">{product.productName}</h3>
                                <p className="text-sm font-medium text-gray-500">{product.productType}</p>
                                </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">${product.price}</p>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListInProducts;
