import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogout = () => {
		logOut().then().catch();
		localStorage.removeItem('donate-token');
	};

	const menuItems = (
		<>
			{user?.uid ? (
				<div className="lg:flex gap-10 space-y-5 md:space-y-0">
					<button onClick={handleLogout} className="font-semibold hover:px-4 duration-500">
						<Link>LogOut</Link>
					</button>
					<button className="font-bold hover:px-4 duration-500 ">
						<Link to="/selected-events">
							<span className="">{user?.displayName}</span>
						</Link>
					</button>

					<Link to="/admin">
						<button
							type="button"
							className="py-2 rounded-lg px-7 hover:scale-110 bg-gradient-to-r from-green-400 to-blue-500 text-white w-full transition ease-in duration-700 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 mt-4 md:mt-0 ">
							Admin
						</button>
					</Link>
				</div>
			) : (
				<>
					<li className="font-semibold">
						<Link to="/login">
							<span className="">Login</span>
						</Link>
					</li>
				</>
			)}
		</>
	);

	return (
		<div>
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
							{menuItems}
						</ul>
					</div>
					<Link to={'/'} className="btn btn-ghost normal-case text-xl">
						Donation-X
					</Link>
				</div>
				<div className="navbar-end hidden lg:flex">
					<ul className="menu menu-horizontal p-0">{menuItems}</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
