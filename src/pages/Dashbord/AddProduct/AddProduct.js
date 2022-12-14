import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = 'http://localhost:5000/product';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

        if (data) {
            toast.success('Product add successfully')
        }
        else {
            toast.error('Sorry!! Product is not added')
        }
    };


    return (
        <div className='w-1/2 mx-auto'>
            <h2 className='text-2xl font-bold text-blue-500 text-center mb-12'>Please add your product</h2>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Minimum Order Quantity' type="number" {...register("result")} />
                <input className='mb-2' placeholder='Maximum Order Quantity' type="number" {...register("availableQuantity")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;