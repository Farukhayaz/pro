// Sidebar.js

import React from 'react';
import "../App.css"
const Sidebar = () => {
    return (
        <div className="free bg-gray-200 h-screen w-64 py-6 px-4 " style={{ height: "110vh", position: "fixed" }}>
            <h2 className="font-bold mb-4 text-2xl text-center">Dashbord</h2>
            <ul>
                <li className="mb-5 text-center"><a href="/home">Find Job</a></li>
                <li className="mb-5 text-center"><a href="/about">My Job</a></li>
                <li className="mb-5 text-center"><a href="/message">Message</a></li>
                <li className="mb-5 text-center"><a href="/profile">My Profile</a></li>

            </ul>
        </div>
    );
};

export default Sidebar;
