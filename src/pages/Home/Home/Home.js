import React from "react";
import Banner from "../Banner/Banner";
import Header from "../../Shared/Header/Header";
import Products from "../Products/Products";
import Summery from "../Summery/Summery";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Summery></Summery>
            <Products></Products>
            <Footer></Footer>
        </div>

    )
}

export default Home;