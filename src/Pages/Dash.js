import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export default function Dash() {
    const navigate = useNavigate()
    const { id } = useParams()
    const APPLICANT = () => {
        // navigate(`/dash/${id}/applicant/generaldata`)
        navigate("/dash/applicant/applicntsinin")


    }
    const ORGANIZATION = () => {
        navigate("/organization/Organizationdetails")

    }
    return (
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
                                <div class="flex flex-col items-center justify-center text-stone-400">
                                    <ion-icon name="logo-amplify" class="text-5xl text-fuchsia-600"></ion-icon>
                                    <div class="flex flex-col ">
                                        <div class="flex  m-4 mb-5 mx-auto text-xl">
                                            <button
                                                class="bg-gradient-to-l from-fuchsia-600 to-cyan-400 px-6 py-1 rounded-2xl text-white font-medium" onClick={APPLICANT}>APPLICANT</button>

                                        </div>
                                        <div class="flex  m-4 mb-5 mx-auto text-xl">
                                            <button
                                                class="bg-gradient-to-l from-fuchsia-600 to-cyan-400 px-6 py-1 rounded-2xl text-white font-medium" onClick={ORGANIZATION}>ORGANIZATION</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
