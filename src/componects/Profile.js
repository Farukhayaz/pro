// Home.js

import React from 'react';
import Sidebar from './Sidebar';
import ProfileScreen from '../Pages/Generaldetails/ProfileScreen';

export const Profile = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 ml-[130px]" >
                <ProfileScreen />
            </main>
        </div>
    );
};

