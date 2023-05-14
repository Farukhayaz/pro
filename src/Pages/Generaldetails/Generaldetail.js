import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Generaldetail() {
    const navigate = useNavigate()
    const [education, setEducation] = useState("")
    const [number, setNumber] = useState("")


    const next = async (e) => {
        e.preventDefault()
        // const userId = respon.params.id;
        const respon = axios.put("https://4be6-206-84-141-94.ngrok-free.app/profile", {

            // user_id: userId,
            education: education,
            phone: number

        }
        )
        console.log(respon, "respon");
        alert("Sinup successfully")
        navigate("/applicant/generaldata/experience")



        navigate("/applicant/generaldata/experience")

    }
    const cancle = () => {

    }
    const upload = () => {

    }
    const submit = () => {

    }
    return (
        <div>
            <div className="flex justify-center" style={{ minHeight: "100vh", padding: "20px" }}>
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center " style={{ width: "50vh" }}>
                        <div className="overflow-hidden w-full  flex justify-center bg-gray-50 rounded-lg shadow-xl" style={{
                            padding: "10px",
                            boxShadow: "2px 4px 23px 10px #888888",

                        }}>
                            <div className="flex flex-col md:flex-row items-center shadow-md h-full " >
                                <div className=" p-5 w-[100%] overflow-hidden" style={{
                                    width: "50vh",
                                }}>
                                    <h1 className='text-center font-bold text-2xl mb-4'>General Details</h1>
                                    <div className="flex flex-col items-center justify-center text-stone-400">
                                        <ion-icon name="logo-amplify" className="text-5xl text-fuchsia-600"></ion-icon>
                                        <div className="flex flex-col">
                                            <div className="m-2">Education</div>
                                            <input className="border-b m-2  bg-gray-50 focus:outline-none p-2 px-5" placeholder='Enter your Education ' onChange={(e) => setEducation(e.target.value)} style={{ border: "1px solid" }} />
                                            <div className="m-2">Phone Number</div>
                                            <input className="border-b m-2  bg-gray-50 focus:outline-none p-2 px-5" placeholder='Enter your Number ' onChange={(e) => setNumber(e.target.value)} style={{ border: "1px solid" }} />


                                            <div className="flex m-2 mt-2 mx-auto">
                                                <button
                                                    className="bg-gradient-to-l from-fuchsia-600 to-cyan-400 px-6 py-1 rounded-2xl text-white font-medium" onClick={next}>Next</button>

                                            </div>
                                            <div className="flex m-2 mt-2 mx-auto">
                                                <button
                                                    className="bg-gradient-to-l from-fuchsia-600 to-cyan-400 px-6 py-1 rounded-2xl text-white font-medium" onClick={cancle}>Cancle</button>

                                            </div>
                                            <p className='mx-auto'>or</p>
                                            <p className='mx-auto'>You can also upload your CV</p>
                                            <div className="flex m-2 mt-2 mx-auto">
                                                <button
                                                    className="bg-gradient-to-l from-fuchsia-600 to-cyan-400 px-6 py-1 mr-3 rounded-2xl text-white font-medium" onClick={upload}>UPLOAD CV</button>
                                                <button
                                                    className="bg-gradient-to-l from-fuchsia-600 to-cyan-400 px-6 py-1 rounded-2xl text-white font-medium" onClick={submit}>SUBMIT</button>

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
