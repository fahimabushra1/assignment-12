import React from 'react';



const Review = ({ review }) => {
    const { _id, name, description, rating } = review;


    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2>Name: {name}</h2>
                <p>Review: {description}</p>
                <small>rating: {rating}</small>
            </div>
        </div>
    );
};

export default Review;