import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from '../../Shared/Button/Button';
const Product = ({ product, setOrder }) => {
    const { _id, name, img, description, price } = product;
    // const navigate = useNavigate();

    // const navigateToProductDetail = id => {
    //     navigate(`/product/${id}`);
    // }
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
                    {/* <Button onClick={() => navigateToProductDetail(_id)}>detail</Button> */}
                    <label
                        htmlFor="purchase-modal"
                        onClick={() => setOrder(product)}
                        className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">purchase
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Product;