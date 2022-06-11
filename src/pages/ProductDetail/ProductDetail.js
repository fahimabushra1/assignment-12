import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseModal from '../PurchaseModal/PurchaseModal';

const ProductDetail = () => {
    const { productId } = useParams();
    console.log(productId)
    const [products, setProducts] = useState({});
    const [order, setOrder] = useState(null);


    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])


    return (
        <div class="mt-24 mx-16 card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img src={products.img} alt="Album" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{products.name}</h2>
                <p className='text-xl'>Price: {products.price}</p>
                <p className='my-2'>Description: {products.description}</p>
                <p>Minimum Order Quantity: {products.orderQuantity}</p>
                <p>Available Quantity: {products.availableQuantity}</p>
                <label
                    htmlFor="purchase-modal"
                    onClick={() => setOrder(products)}
                    className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary w-24">purchase
                </label>
            </div>
            {order && <PurchaseModal
                order={order}
                setOrder={setOrder}
            ></PurchaseModal>}
        </div>
    );
};

export default ProductDetail;