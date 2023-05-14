
import React from 'react';
import Sidebar from './Sidebar';

const About = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1">
                <h1>My Job Page</h1>
                <p>Welcome to my website!</p>
            </main>
        </div>
    );
};

export default About;
