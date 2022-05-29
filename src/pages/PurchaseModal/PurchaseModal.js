import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const PurchaseModal = ({ order, setOrder }) => {
    const { _id, name, orderQuantity, availableQuantity, price } = order;
    const [user, loading, error] = useAuthState(auth);
    console.log(user)

    // const maxOrder = order.availableQuantity;
    // const minOrder = order.orderQuantity
    // if (orderQuantity == minOrder) {
    //     const increaseOrder = parseInt(orderQuantity) + 1
    // }
    // if (orderQuantity == maxOrder) {
    //     const decreaseOrder = parseInt(orderQuantity) - 1
    // }


    const handleOrder = event => {
        event.preventDefault();


        const order = {
            orderId: _id,
            order: name,
            orderQuantity: event.target.orderQuantity.value,
            maximumQuantity: availableQuantity,
            price: price,
            email: user.email,
            userName: user.displayName,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        console.log(order)
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Thank you for your order')
                }
                else {
                    toast.error('Your order has already been placed')
                }
                setOrder(null);
            });
    }

    return (
        <div>
            <input type="checkbox" id="purchase-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Order For: {name}</h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="availableQuantity" disabled value={availableQuantity} className="input input-bordered w-full max-w-xs" />
                        <p>Minimum Order Quantity:{orderQuantity}</p>
                        <input type="number" name="orderQuantity" placeholder="Order Quantity" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="address" placeholder="Your Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;