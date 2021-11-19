import React from 'react';
import useAuth from '../../hooks/useAuth';
import Admin from "../Admin/Admin/Admin";
import User from "../User/User/User";


const DashboardHome = () => {
    const { admin } = useAuth()
    console.log(admin)
    return (
        <>
            {
                admin ?
                    <Admin></Admin>
                    :
                    <User></User>}

        </>

    );
};

export default DashboardHome;