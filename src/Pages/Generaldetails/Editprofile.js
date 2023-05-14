import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function EditProfile() {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState([]);
    const addInput = () => {
        setInputs([...inputs, ""]);
    };
    const next = () => {
        navigate("/profile")

    }

    return (
        <div>
            <div className="flex justify-center ml-[90px]" style={{ minHeight: "100vh", padding: "20px" }}>
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center lg:w-[120vh] ">
                        <div className="overflow-hidden w-full  flex justify-center bg-gray-50 rounded-lg shadow-xl" style={{
                            padding: "10px",
                            boxShadow: "2px 4px 23px 10px #888888",

                        }}>
                            <div className="flex flex-col md:flex-row items-center shadow-md h-full " >
                                <div className=" p-5 w-[100%] overflow-hidden  lg:w-[120vh]">
                                    <h1 className='text-center font-bold text-2xl mb-4'>Edit Profile</h1>
                                    <div className="flex flex-col items-center justify-center text-stone-400">
                                        <ion-icon name="logo-amplify" className="text-5xl text-fuchsia-600"></ion-icon>
                                        <div className="flex flex-col">
                                            <div className='flex'>
                                                <div className=''>
                                                    <div className="m-2">Name</div>
                                                    <input className="border-b m-2  bg-gray-50 focus:outline-none p-2 px-5" placeholder='Enter your Name ' style={{ border: "1px solid" }} />

                                                </div>
                                                <div className=''>
                                                    <div className="m-2">Email</div>
                                                    <input className="border-b m-2  bg-gray-50 focus:outline-none p-2 px-5" placeholder='Enter your Email ' style={{ border: "1px solid" }} />

                                                </div>
                                            </div>


                                            <div className="m-2">Phone Number</div>
                                            <input className="border-b m-2  bg-gray-50 focus:outline-none p-2 px-5" placeholder='Enter your Phone Number ' style={{ border: "1px solid" }} />
                                            <div className="m-2">Education</div>
                                            <input className="border-b m-2  bg-gray-50 focus:outline-none p-2 px-5" placeholder='Enter your Education ' style={{ border: "1px solid" }} />
                                            <div className="m-2">Skills</div>
                                            <input className="border-b m-2  bg-gray-50 focus:outline-none p-2 px-5" placeholder='Enter your Skills ' style={{ border: "1px solid" }} />
                                            {
                                                inputs.map((input, index) => (
                                                    <input key={index} value={input} className="border-b m-2  bg-gray-50 focus:outline-none p-2 px-5" placeholder='Enter your Skills ' style={{ border: "1px solid" }} onChange={(e) => {
                                                        const newInputs = [...inputs];
                                                        newInputs[index] = e.target.value;
                                                        setInputs(newInputs);
                                                    }} />
                                                ))
                                            }
                                            <button className="m-3" onClick={addInput}>Add Skills</button>
                                            <div className="m-2">Expreience</div>
                                            <input className="border-b m-2  bg-gray-50 focus:outline-none p-2 px-5" placeholder='Enter your Experience ' style={{ border: "1px solid" }} />
                                            {
                                                inputs.map((input, index) => (
                                                    <input key={index} value={input} className="border-b m-2  bg-gray-50 focus:outline-none p-2 px-5" placeholder='Enter your Experience ' style={{ border: "1px solid" }} onChange={(e) => {
                                                        const newInputs = [...inputs];
                                                        newInputs[index] = e.target.value;
                                                        setInputs(newInputs);
                                                    }} />
                                                ))
                                            }
                                            <button className="m-3" onClick={addInput}>Add Experience</button>
                                            <div className="flex m-2 mt-2 mx-auto">
                                                <button
                                                    className="bg-gradient-to-l from-fuchsia-600 to-cyan-400 px-6 py-1 rounded-2xl text-white font-medium" onClick={next}>Save</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
