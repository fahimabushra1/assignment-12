import React from 'react';
import SummeryCard from '../SummeryCard/SummeryCard';
import customer from '../../../Images/customer-icon.png';
import revenue from '../../../Images/revenue-icon.jpg';
import tools from '../../../Images/tools-icon.png';
import review from '../../../Images/review-icon.png';

const Summery = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
            <SummeryCard cardTitle="100+" cardBody="customers" img={customer}></SummeryCard>
            <SummeryCard cardTitle="120M+" cardBody="Revenues" img={revenue}></SummeryCard>
            <SummeryCard cardTitle="50+" cardBody="Tools" img={tools}></SummeryCard>
            <SummeryCard cardTitle="33K+" cardBody="Reviews" img={review}></SummeryCard>
        </div>
    );
};

export default Summery;