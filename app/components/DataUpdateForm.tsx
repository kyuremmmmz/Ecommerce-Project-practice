import React from 'react';
import TextAreaFullBorder from './ui/Fields/TextAreaFullBorder';
import TextAreaWide from './ui/Fields/TextAreaWide';
import DataCreate from '../hooks/data/dataCreate';
import ButtonSignUp from './ui/Buttons/ButtonSignUp';
import DropDown from './ui/Dropdowns/DropDown';

function DataUpdateForm() {
    const {
        name,
        setName,
        description,
        setDescription,
        price,
        setPrice,
        discount,
        setDiscount,
        productType,
        setProductType,
        handleSubmit,
        handleImage,
    } = DataCreate();

    return (
        <div className="flex flex-row">
            <div className="flex flex-col p-6 rounded-lg shadow-lg">
                <form className="flex flex-col gap-4" method="PUT" onSubmit={handleSubmit}>
                    <label>Product Name:</label>
                    <TextAreaFullBorder
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Product Description:</label>
                    <TextAreaWide
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeHolder=""
                    />
                    <label>Product Price:</label>
                    <TextAreaFullBorder
                        type="number"
                        value={price.toString()}
                        onChange={(e) => setPrice(Number.parseInt(e.target.value))}
                    />
                    <label>Product Discount:</label>
                    <TextAreaFullBorder
                        type="number"
                        value={discount.toString()}
                        onChange={(e) => setDiscount(Number.parseInt(e.target.value))}
                    />
                    <label>Product Type:</label>
                    <DropDown
                        value={productType}
                        onChange={(e) => setProductType(e.target.value)}
                        css="border border-gray-500 w-full py-2 px-2 focus:border-black focus:outline-none duration-300"
                    />
                    <label>Product Image:</label>
                    <TextAreaFullBorder
                        type="file"
                        accept="image/*"
                        name="image"
                        onChange={(e) => handleImage(e)}
                    />
                    <ButtonSignUp onLoading={false} signUp="Save" />
                </form>
            </div>
        </div>
    );
}

export default DataUpdateForm;
