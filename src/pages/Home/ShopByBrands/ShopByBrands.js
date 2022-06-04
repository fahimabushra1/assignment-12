import React from "react";
import polaris from '../../../Images/polaris.jpg'
import honda from '../../../Images/honda.jpg'
import yamaha from '../../../Images/yamaha.png'
import suzuki from '../../../Images/Suzuki.png'
import kawasaki from '../../../Images/Kawasaki.png'
import ducati from '../../../Images/ducati.png'

const ShopByBrands = () => {
    return (
        <div className="mt-40 mb-12">
            <h1 className="text-center font-light text-3xl text-yellow-500">Shop By Brand</h1>
            <p className="text-center font-bold text-8xl">OUR BRANDS</p>
            <div className="grid grid-cols-3 w-1/2 mx-auto m-6 p-6">
                <div className="border-2 p-6 cursor-pointer hover:bg-accent">
                    <img src={polaris} />
                </div>
                <div className="border-t-2 p-6 cursor-pointer hover:bg-accent">
                    <img src={honda} />
                </div>
                <div className="border-2 p-6 cursor-pointer hover:bg-accent">
                    <img src={yamaha} />
                </div>
                <div className="border-l-2 border-b-2 p-6 cursor-pointer hover:bg-accent">
                    <img src={suzuki} />
                </div>
                <div className="border-2 p-6 cursor-pointer hover:bg-accent">
                    <img src={kawasaki} />
                </div>
                <div className="border-r-2 border-b-2 p-6 cursor-pointer hover:bg-accent">
                    <img src={ducati} />
                </div>
            </div>
        </div>
    )
}

export default ShopByBrands;