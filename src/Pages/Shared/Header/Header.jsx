import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {
	const { user, logOut } = useContext(AuthContext);


	const menuItems = (
		<>
			<li className="font-semibold">
				<Link to="/add-event">Events</Link>
			</li>
			{user?.uid ? (
				<>
					<li className="font-semibold">
						<Link to="/register">
							<span className="">Register</span>
						</Link>
					</li>
					<li className="font-semibold">
						<Link to="/admin">
							<span className="">Admin</span>
						</Link>
					</li>
					<li className="font-semibold">
						<Link>
							<button onClick={logOut} className="">
								LogOut
							</button>
						</Link>
					</li>
					<li className="font-bold">
						<Link to="/">
							<span className="">{user?.displayName}</span>
						</Link>
					</li>
				</>
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
					<Link to={'/'} className="btn btn-ghost normal-case text-xl">Donation-X</Link>
				</div>
				<div className="navbar-end hidden lg:flex">
					<ul className="menu menu-horizontal p-0">{menuItems}</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
