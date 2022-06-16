import React from "react";

const Portfolio = () => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto mt-10 text-blue-700">
                <h1 className="uppercase text-center text-2xl font-extrabold">my portfolio</h1>
                <div className="card-body">
                    <h2 className="card-title">Fahima Samsunnahar Bushra</h2>
                    <small>bushra.arifeen@gmail.com</small>
                </div>
            </div>
            <div class="card w-100 bg-base-100 shadow-xl mx-auto mt-10 text-blue-700">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-semibold">Education background</h2>
                    <div className="flex flex-row">
                        <div className="p-6">
                            <h4 className="font-bold underline decoration-yellow-700">SSC:</h4>
                            <p>School's Name: <span className="uppercase text-lg text-orange-700">moulana bhashani biddaypith girl's school</span></p>
                            <p>Passing Year: <span className="text-lg text-orange-700">2007</span></p>
                            <p>Result: <span className="text-lg text-orange-700">5.00 grade</span></p>
                        </div>
                        <div className="p-6">
                            <h4 className="font-bold underline decoration-yellow-700">HSC:</h4>
                            <p>College's Name: <span className="uppercase text-lg text-orange-700">BN School and College,Khulna</span></p>
                            <p>Passing Year: <span className="text-lg text-orange-700">2009</span></p>
                            <p>Result: <span className="text-lg text-orange-700">5.00 grade</span></p>
                        </div>
                        <div className="p-6">
                            <h4 className="font-bold underline decoration-yellow-700">BBA:</h4>
                            <p>University: <span className="uppercase text-lg text-orange-700">Jagannath University</span></p>
                            <p>Passing Year: <span className="text-lg text-orange-700">2015</span></p>
                            <p>Result: <span className="text-lg text-orange-700">3.01 grade</span></p>
                        </div>
                        <div className="p-6">
                            <h4 className="font-bold underline decoration-yellow-700">MBA:</h4>
                            <p>University: <span className="uppercase text-lg text-orange-700">Jagannath University</span></p>
                            <p>Passing Year: <span className="text-lg text-orange-700">2016</span></p>
                            <p>Result: <span className="text-lg text-orange-700">2.87 grade</span></p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between ">
                        <div className="border-l-blue-400 border-l-4 pl-4">
                            <h2 className="text-2xl font-semibold my-2">Skills</h2>
                            <p className="text-orange-700">HTML</p>
                            <p className="text-orange-700">CSS</p>
                            <p className="text-orange-700">JavaScript</p>
                            <p className="text-orange-700">React</p>
                        </div>
                        <div className="border-l-blue-400 border-l-4 pl-4">
                            <h2 className="text-2xl font-semibold my-2">Live website Link</h2>
                            <div className="text-orange-700 hover:underline"><a href="https://fahimabushra1.github.io/influence-product-repo/influencer.html">https://fahimabushra1.github.io/influence-product-repo/influencer.html</a></div>
                            <div className="text-orange-700 hover:underline"><a href="https://sundarban-parjatan.web.app/">https://sundarban-parjatan.web.app/</a></div>
                            <div className="text-orange-700 hover:underline"><a href="https://fahimabushra1.github.io/influence-product-repo/influencer.html">https://fahimabushra1.github.io/influence-product-repo/influencer.html</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;