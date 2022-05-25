import React from 'react';
import { useNavigate } from 'react-router-dom';
const Product = ({ product }) => {
    const { _id, name, img, description, price } = product;
    const navigate = useNavigate();

    const navigateToProductDetail = id => {
        navigate(`/product/${id}`);
    }
    return (
        <div className='bg-slate-400 border-2 border-slate-200 rounded-xl pb-4 text-center'>
            <div className='flex flex-row justify-around'>
                <img className='w-40' src={img} alt="" />
                <div className='pt-8'>
                    <h2>{name}</h2>
                    <p className='text-2xl text-yellow-400'>Price:TK{price}</p>
                </div>
            </div>
            <p className='text-justify mt-4'><small>{description.slice(0, 200) + "..."}</small></p>
            <button onClick={() => navigateToProductDetail(_id)} className='bg-yellow-400 p-2 m-4 rounded'>Detail</button>
        </div>
    );
};

export default Product;