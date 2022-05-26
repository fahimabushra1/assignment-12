import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const navigateToManageItems = () => {
        navigate('/manageitems');
    }

    return (
        <div className='container mt-48 ml-10 mb-12 relative'>
            <div className="row">
                <h1 className='text-center mb-12 text-4xl'> Our Feature Product</h1>
                <div className="grid grid-cols-3 gap-4">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}>
                        </Product>)
                    }
                </div>
                <button onClick={() => navigateToManageItems()} className='bg-yellow-400 mx-96 p-2 rounded m-4 absolute bottom--6 left-48'>Manage Your Products</button>
            </div>
        </div>
    );
};

export default Products;