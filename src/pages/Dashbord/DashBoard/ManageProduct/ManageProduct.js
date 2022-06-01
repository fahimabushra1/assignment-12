import React from 'react';
// import { toast } from 'react-toastify';

const ManageProduct = ({ product, index, refetch, setDeleteProduct }) => {
    const { name, orderQuantity, price, _id } = product;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{orderQuantity}</td>
            <td>{price}</td>
            <td>
                <label onClick={() => setDeleteProduct(product)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default ManageProduct;