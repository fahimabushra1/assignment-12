import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data);
                });
        }
    }, [user])

    return (
        <div>
            <h2>My Orders: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>srl.no</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>product name</th>
                            <th>product id</th>
                            <th>order Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((orderItem, index) => <tr key={orderItem._id}>
                                <th>{index + 1}</th>
                                <td>{orderItem.userName}</td>
                                <td>{orderItem.email}</td>
                                <td>{orderItem.order}</td>
                                <td>{orderItem.orderId}</td>
                                <td>{orderItem.orderQuantity}</td>
                                <td>
                                    {(orderItem.price && !orderItem.paid) && <Link to={`/dashboard/payment/${orderItem._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(orderItem.price && orderItem.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{orderItem.transactionId}</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;