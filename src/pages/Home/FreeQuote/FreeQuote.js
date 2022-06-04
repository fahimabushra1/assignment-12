import React from 'react';
import { useForm } from "react-hook-form";


const FreeQuote = () => {
    const { register, handleSubmit } = useForm();



    return (
        <div className='w-1/2 mx-auto mt-40'>
            <div className='bg-info text-center p-10'>
                <h2 className='text-white text-6xl mb-8'>Can't Find The Parts You Need?</h2>
                <form>
                    <input className='mb-2 px-8 py-4' placeholder='Request Your Parts' {...register("name", { required: true, maxLength: 20 })} />
                </form>
            </div>
            <div className='bg-amber-100 p-14'>
                <h2 className='font-bold text-2xl'>Get Free Quote</h2>
                <p className='mt-4'>Not seeing the part you need from our categories? Let us know and we can create custom parts to you.</p>
                <form className='flex flex-col mt-4'>
                    <p>Name</p>
                    <input className='mb-4 mt-2' placeholder='Please enter your name' {...register("name", { required: true, maxLength: 20 })} />
                    <p>Email</p>
                    <input className='mb-4 mt-2' placeholder='Where we can email you back?' {...register("email", { required: true, maxLength: 20 })} />
                    <p>Part Number or Object Name</p>
                    <input className='mb-4 mt-2' placeholder='What are you looking for?' {...register("name", { required: true, maxLength: 20 })} />
                    <p>Message</p>
                    <textarea className='mb-4 mt-2' placeholder='Tell us your part requirements' {...register("description")} />
                    <input className='bg-amber-700 w-1/2 mx-auto p-2 rounded-md' type="submit" value="Get Quote" />
                </form>
            </div>
        </div>
    );
};

export default FreeQuote;