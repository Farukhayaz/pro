import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProfileScreen() {
    const navigate = useNavigate()
    const edit = () => {
        navigate("/profile/editprofile")
    }
    return (
        <div className="flex justify-center ml-[90px]" style={{ minHeight: "100vh", padding: "20px" }}>
            <div className="flex flex-col justify-center">
                <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center lg:w-[120vh] ">
                    <div className="overflow-hidden w-full  flex justify-center bg-gray-50 rounded-lg shadow-xl" style={{
                        padding: "10px",
                        boxShadow: "2px 4px 23px 10px #888888",

                    }}>
                        <button onClick={edit}>Edit </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
