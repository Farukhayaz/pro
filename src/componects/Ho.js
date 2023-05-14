// Home.js

import React from 'react';
import Sidebar from './Sidebar';

const Ho = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1">
                <h1>Home Page</h1>
                <p>Welcome to my website!</p>
            </main>
        </div>
    );
};

export default Ho;
