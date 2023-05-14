import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Organizationdetails() {
    const navigate = useNavigate()
    const submit = () => {
        navigate("/")
    }
    const logout = () => {
        navigate("/")
    }
    return (
        <div>
            <div class="flex justify-center" style={{ minHeight: "100vh", padding: "20px" }}>
                <div class="flex flex-col justify-center">
                    <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center " style={{ width: "50vh" }}>
                        <div class="overflow-hidden w-full  flex justify-center bg-gray-50 rounded-lg shadow-xl" style={{
                            padding: "10px",
                            boxShadow: "2px 4px 23px 10px #888888",

                        }}>
                            <div class="flex flex-col md:flex-row items-center shadow-md h-full " >
                                <div class=" p-5 w-[100%] overflow-hidden" style={{
                                    width: "50vh",
                                }}>
                                    <h1 className='text-center font-bold text-2xl mb-4'>Organization Details</h1>
                                    <div class="flex flex-col items-center justify-center text-stone-400">
                                        <ion-icon name="logo-amplify" class="text-5xl text-fuchsia-600"></ion-icon>
                                        <div class="flex flex-col ">
                                            <div class="m-2">Name</div>
                                            <input class="border-b m-2  bg-gray-50 focus:outline-none" placeholder='Enter your Name' />
                                            <div class="m-2">Website</div>
                                            <input class="border-b m-2  bg-gray-50 focus:outline-none" placeholder='Website' />

                                            <div class="m-2">About</div>
                                            <input class="border-b m-2  bg-gray-50  focus:outline-none" type="password" placeholder='Enter your Message' />

                                            <div class="flex m-2 mt-2 mx-auto">
                                                <button
                                                    class="bg-gradient-to-l from-fuchsia-600 to-cyan-400 px-6 py-1 rounded-2xl text-white font-medium" onClick={submit}>Submit</button>

                                            </div>
                                            <div class="flex m-2 mt-2 mx-auto">
                                                <button
                                                    class="bg-gradient-to-l from-fuchsia-600 to-cyan-400 px-6 py-1 rounded-2xl text-white font-medium" onClick={logout}>Log Out</button>

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
