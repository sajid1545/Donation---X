import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import RightSideBar from '../Shared/RighSideBar/RightSideBar';

const Admin = () => {
	return (
        <div>
            <Header/>
			<div className="grid grid-cols-12 gap-10 mt-10">
				<div className="col-span-2">
					<RightSideBar />
				</div>

				<div className="col-span-9">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Admin;
