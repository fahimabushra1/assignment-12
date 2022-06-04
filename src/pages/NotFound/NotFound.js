import React from "react";
import error from "../../Images/404.jpg"

const NotFound = () => {
    return (
        <div className="w-screen">
            <img src={error}></img>
        </div>
    )
}

export default NotFound;