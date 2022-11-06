import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const RightSideBar = () => {
	return (
		<div>
			<div className="drawer drawer-mobile">
				<div className="drawer-side">
					<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
					<ul className="menu p-4 w-80 h-full bg-slate-700 text-white font-bold text-2xl space-y-5 ">
						<span>
							<NavLink
								className={({ isActive }) => (isActive ? 'text-red-500' : undefined)}
								to={'/admin/add-event'}>
								Add Events
							</NavLink>
						</span>
						<span>
							<NavLink
								className={({ isActive }) => (isActive ? 'text-red-500' : undefined)}
								to={'/admin/volunteers'}>
								Volunteers
							</NavLink>
						</span>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default RightSideBar;
