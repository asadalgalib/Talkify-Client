import React from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

const JoinusLayout = () => {
    return (
        <div>
            <Helmet>
                <title>Talkify - Join us</title>
            </Helmet>
            <Outlet></Outlet>
        </div>
    );
};

export default JoinusLayout;