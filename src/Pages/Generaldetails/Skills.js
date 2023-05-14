import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Skills() {
    const navigate = useNavigate()
    const submit = () => {
        navigate("/home")

    }
    const prev = () => {
        navigate("/applicant/generaldata/experience")
    }
    return (
        <div>
            <div class="flex justify-center" style={{ minHeight: "100vh", padding: "20px" }}>
                <div class="flex flex-col justify-center">
                    <div class="flex flex-col md:flex-row  justify-center items-center " style={{ width: "60vh" }}>
                        <div class="overflow-hidden w-full  flex justify-center bg-gray-50 rounded-lg shadow-xl" style={{
                            padding: "10px",
                            boxShadow: "2px 4px 23px 10px #888888",
                        }}>
                            <div class="flex flex-col md:flex-row items-center shadow-md h-full " >
                                <div class=" p-5  overflow-hidden" style={{
                                    width: "57vh",
                                }}>
                                    <h1 className='text-center font-bold text-2xl mb-10'>Previous Skills</h1>
                                    <div class="flex flex-col items-center justify-center text-stone-400">
                                        <ion-icon name="logo-amplify" class="text-5xl text-fuchsia-600"></ion-icon>
                                        <div class="flex flex-col ">
                                            <input class="border-b m-2  bg-gray-50 focus:outline-none  mb-5" placeholder='Skill 1' />
                                            <input class="border-b m-2  bg-gray-50 focus:outline-none  mb-5" placeholder='Skill 2' />
                                            <input class="border-b m-2  bg-gray-50  focus:outline-none  mb-5" type="password" placeholder='Skill 3' />
                                            <div class="flex m-2 mb-4 mt-4 mx-auto mt-2">
                                                <button
                                                    class="bg-gradient-to-l from-fuchsia-600 to-cyan-400 px-6 py-1 rounded-2xl text-white font-medium" onClick={submit} >Submit</button>
                                            </div>
                                            <div class="flex m-2 mx-auto mt-2">
                                                <button
                                                    class="bg-gradient-to-l from-fuchsia-600 to-cyan-400 px-6 py-1 rounded-2xl text-white font-medium" onClick={prev} >Prev</button>
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
