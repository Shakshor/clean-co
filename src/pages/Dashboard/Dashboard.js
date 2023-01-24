import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoardSidebar from '../../components/DashBoardSidebar';

const Dashboard = () => {
    return (
        <>
            <DashBoardSidebar>
                <Outlet></Outlet>
            </DashBoardSidebar>
        </>
    );
};

export default Dashboard;