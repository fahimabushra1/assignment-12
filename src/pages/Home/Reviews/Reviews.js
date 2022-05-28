import React, { useEffect, useState } from 'react';
import Review from './Review';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/myreview?email=${user.email}`, {
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

                    setReviews(data);
                });
        }
    }, [user])

    const newReviews = reviews.slice(0, 3)

    return (
        <div className='container mt-48 ml-10 mb-12 relative'>
            <div className="row">
                <h1 className='text-center mb-12 text-4xl'></h1>
                <div className="grid grid-cols-3 gap-4">
                    {
                        newReviews.map(review => <Review
                            key={review._id}
                            review={review}>
                        </Review>)
                    }
                </div>
            </div>
        </div>
    );

}

export default Reviews;