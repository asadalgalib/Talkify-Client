import React from 'react';
import MyProfile from '../Components/Pages/Dashboard/MyProfile';
import AddPost from '../Components/Pages/Dashboard/AddPost';

const UserDashHome = () => {
    return (
        <div>
            <MyProfile></MyProfile>
            <AddPost></AddPost>
        </div>
    );
};

export default UserDashHome;