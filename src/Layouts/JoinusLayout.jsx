import React from 'react';
import { Outlet } from 'react-router-dom';

const JoinusLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default JoinusLayout;