import React from 'react';
import { NavLink } from 'react-router-dom';

const DashBoardSidebar = ({ children }) => {
    return (
        <section className='mt-20 bg-accent'>

            <div className="drawer drawer-mobile">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to='/dashboard/add-service'>Add Service</NavLink></li>
                        <li><NavLink to='/dashboard/add-admin' >Add Admin</NavLink></li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default DashBoardSidebar;