import React from 'react';
import { toast } from 'react-toastify';

const ManageProductModal = ({ deleteProduct, refetch, setDeleteProduct }) => {
    const { _id, name } = deleteProduct;

    const handleDelete = (productId) => {
        fetch(`http://localhost:5000/product/${productId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Product:${name} is deleted.`)
                    setDeleteProduct(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete  ${name}!</h3>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ManageProductModal;