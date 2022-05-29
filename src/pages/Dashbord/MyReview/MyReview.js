import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        // console.log(data);


        const myreview = {
            email: user.email,
            name: user.displayName,
            rating: data.rating,
            description: data.description,
        }
        axios.post('http://localhost:5000/myreview', myreview)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Thank You for your review');

                }
            })
    };


    return (
        <div className='w-1/2 p-8 mx-auto bg-stone-200'>
            <h2 className='text-center text-2xl mb-8'>Please add your review</h2>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <textarea className='mb-4' placeholder='Description' {...register("description")} />
                <input className='mb-4' placeholder='Rating' type="number" {...register("rating")} />
                <input className='btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-accent to-primary' type="submit" value="Add review" />
            </form>
        </div>
    );
};

export default MyReview;