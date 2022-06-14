import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const MyProfile = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = 'http://localhost:5000/myprofile';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

        if (data) {
            toast.success('Product add successfully')
        }
        else {
            toast.error('Sorry!! Product is not added')
        }
    };


    return (
        <div className='w-1/2 mx-auto'>
            <h2 className='text-4xl font-bold text-orange-500 text-center mb-12 mt-6'>Update Your Profile</h2>
            <form className='flex flex-col shadow-xl bg-slate-400 p-10' onSubmit={handleSubmit(onSubmit)}>
                <h3 className='font-bold mb-2'>Your Location:</h3>
                <input className='mb-4 p-2' placeholder='present address(city/district)' {...register("address", { required: true, maxLength: 20 })} />
                <h3 className='font-bold mb-2'>Education:</h3>
                <div className='flex flex-row justify-evenly'>
                    <div className='flex flex-col border-2 mr-4 p-4'>
                        <p className='font-bold'>SSC:</p>
                        <p>School's Name:</p>
                        <input className='mb-4' placeholder='School' {...register("Schoolname")} />
                        <p>Year:</p>
                        <input className='mb-4' placeholder='Passing Year' type="number" {...register("SSCyear")} />
                        <p>Result:</p>
                        <input className='mb-4' placeholder='Result' type="number" {...register("SSCresult")} />
                    </div>
                    <div className='flex flex-col border-2 p-4'>
                        <p className='font-bold'>HSC:</p>
                        <p>College's Name:</p>
                        <input className='mb-4' placeholder='College' {...register("Collegename")} />
                        <p>Year:</p>
                        <input className='mb-4' placeholder='Passing Year' type="number" {...register("HSCyear")} />
                        <p>Result:</p>
                        <input className='mb-4' placeholder='Result' type="number" {...register("HSCresult")} />
                    </div>
                </div>
                <div className='flex flex-row justify-evenly my-4'>
                    <div className='flex flex-col border-2 mr-4 p-4'>
                        <p className='font-bold mb-2'>Honors:</p>
                        <input className='mb-4' placeholder='Degree' {...register("Honorsdegree")} />
                        <p>Institution's Name:</p>
                        <input className='mb-4' placeholder='University/college' {...register("Honorsversityname")} />
                        <p>Year:</p>
                        <input className='mb-4' placeholder='Passing Year' type="number" {...register("Honorsyear")} />
                        <p>Result:</p>
                        <input className='mb-4' placeholder='Result' type="number" {...register("Honorsresult")} />
                    </div>
                    <div className='flex flex-col border-2 p-4'>
                        <p className='font-bold mb-2'>Masters:</p>
                        <input className='mb-4' placeholder='Degree' {...register("Mastersdegree")} />
                        <p>Institution's Name:</p>
                        <input className='mb-4' placeholder='University/college' {...register("Mastersversityname")} />
                        <p>Year:</p>
                        <input className='mb-4' placeholder='Passing Year' type="number" {...register("Mastersyear")} />
                        <p>Result:</p>
                        <input className='mb-4' placeholder='Result' type="number" {...register("Mastersresult")} />
                    </div>
                </div>
                <input className='font-bold hover:bg-orange-500 shadow-md p-2 w-1/2 mx-auto' type="submit" value="Update" />
            </form>
        </div>
    );
};

export default MyProfile;