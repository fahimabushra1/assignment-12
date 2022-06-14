import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let errorElement;
    if (error) {
        errorElement =

            <div>
                <p className="text-danger">Error: {error.message}</p>
            </div>
    }

    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline btn-primary w-full max-w-xs"
            >Continue with Google</button>
            {errorElement}
        </div>
    )

}

export default SocialLogin;