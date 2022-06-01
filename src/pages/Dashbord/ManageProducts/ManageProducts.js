import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ManageProductModal from '../ManageProductModal/ManageProductModal';
import ManageProduct from '../../Dashbord/DashBoard/ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);

    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/product', {

    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl">Manage Products: {products.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>srl.no</th>
                            <th>Product Name</th>
                            <th>order Quantity</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ManageProduct
                                key={product._key}
                                product={product}
                                index={index}
                                refetch={refetch}
                                setDeleteProduct={setDeleteProduct}
                            ></ManageProduct>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteProduct && <ManageProductModal
                deleteProduct={deleteProduct}
                refetch={refetch}
                setDeleteProduct={setDeleteProduct}
            ></ManageProductModal>}
        </div>
    );
};

export default ManageProducts;