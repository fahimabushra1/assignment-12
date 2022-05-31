import React from "react";
import { useNavigate } from "react-router-dom";
import Button from '../../../Shared/Button/Button';

const ManageProduct = ({ product, handleDelete }) => {
    const { _id, name, img, description, price } = product;
    const navigate = useNavigate();

    const navigateToAddProduct = productId => {
        navigate(`/addProduct`);
    }
    return (
        <div class="card w-80 mt-6 bg-base-100 shadow-xl">
            <figure>
                <img className='w-40' src={img} alt="" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>Price:TK{price}</p>
                <p><small>{description.slice(0, 200) + "..."}</small></p>
                <div class="card-actions justify-end">
                    <Button onClick={() => navigateToAddProduct(_id)}>Add</Button>
                    <Button className='mr-4'onClick={() => handleDelete(product._id)}>Delete</Button>
                </div>
            </div>
        </div>
    )
}
export default ManageProduct;