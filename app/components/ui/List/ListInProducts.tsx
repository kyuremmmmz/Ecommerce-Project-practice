import DataReading from '@/app/hooks/data/DataReading';
import DeleteData from '@/app/hooks/data/DeleteData';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function ListInProducts() {
    const { data } = DataReading();
    const { handleDelete } = DeleteData();
    return (
        <div className="flex flex-row">
            <div className="flex flex-col bg-slate-200  rounded-lg shadow-lg max-h-[700px] overflow-y-auto overflow-x-hidden">
                <div className='sticky top-0 bg-white w-full'>
                    <div className="flex flex-row gap-4 sticky top-0 w-full">
                        <h1 className="text-2xl font-medium text-black">Popular Products</h1>
                    </div>
                    <div className="flex flex-row w-full sticky top-12 justify-evenly gap-24 mt-4">
                        <h2 className="text-black font-semibold">Product</h2>
                        <h2 className="text-black font-semibold">Earnings</h2>
                        <h2 className="text-black font-semibold">Actions</h2>
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
                        <div className=' mr-10'>
                            <p className="text-sm font-medium text-gray-500 ">${product.price}</p>
                        </div>
                        <div className=' flex flex-row mr-5 gap-6'>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger><FaTrash onClick={()=>handleDelete(product._id)} color='red'/></TooltipTrigger>
                                    <TooltipContent className=' bg-black'>
                                        <p className=' text-white'>Delete Product</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <FaEdit/>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListInProducts;
