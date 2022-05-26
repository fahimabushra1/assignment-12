import React from "react";
import Header from "../../Shared/Header/Header";
import Products from "../Products/Products";
import Summery from "../Summery/Summery";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Summery></Summery>
            <Products></Products>
        </div>

    )
}

export default Home;