import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import RightSideBar from '../Shared/RighSideBar/RightSideBar';

const Admin = () => {
	return (
		<div>
			<div className="border-b-8 p-2 text-xl">
				<Header />
			</div>
			<div className="grid grid-cols-12 gap-7">
				<div className="col-span-full md:col-span-2">
					<RightSideBar />
				</div>

				<div className="col-span-full md:col-span-9 mt-10">
					<Outlet />
				</div>
			</div>
			<ScrollRestoration />
		</div>
	);
};

export default Admin;
