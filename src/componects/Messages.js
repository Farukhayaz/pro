// Home.js

import React from 'react';
import Sidebar from './Sidebar';

export const Message = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1">
                <h1>Message Page</h1>
                <p>Welcome to my website!</p>
            </main>
        </div>
    );
};

