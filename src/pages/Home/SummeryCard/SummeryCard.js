import React from 'react';

const SummeryCard = ({ img, cardTitle, cardBody }) => {
    return (
        <div class="card w-80 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img className='w-24 rounded-xl' src={img} alt="Album" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 className="card-title text-4xl">{cardTitle}</h2>
                <p className='text-primary text-xl'>{cardBody}</p>
            </div>
        </div >
    );
};

export default SummeryCard;