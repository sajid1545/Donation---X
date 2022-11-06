import React from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setAuthToken } from '../../api/Auth';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
	const { createUser, updateUsersProfile } = useContext(AuthContext);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const handleRegister = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const date = form.date.value;

		const volunteer = {
			name,
			email,
			date,
		};

		createUser(email, password)
			.then((result) => {
				const user = result.user;
				updateUsersProfile(name);
				const currentUser = {
					email: user?.email,
				};
				// toast.success('Registered user successfully');
				// navigate(from, { replace: true });

				fetch('http://localhost:3000/volunteers', {
					method: 'POST',
					headers: {
						'content-type': 'application/json',
					},
					body: JSON.stringify(volunteer),
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.acknowledged) {
							setAuthToken(currentUser);

							toast.success('Registered user successfully');
							// navigate(from, { replace: true });
						}
						console.log(data);
					});
			})
			.catch((err) => console.error(err));
	};

	return (
		<div>
			<div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
				<h1 className="text-2xl font-bold text-center mb-10">Register to be a volunteer</h1>
				<form onSubmit={handleRegister} className="space-y-6 ">
					<div className="space-y-1 text-sm">
						<label htmlFor="username" className="block dark:text-gray-400">
							Full Name
						</label>
						<input
							type="text"
							name="name"
							placeholder="Username"
							className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 border-2"
						/>
					</div>
					<div className="space-y-1 text-sm">
						<label htmlFor="username" className="block dark:text-gray-400">
							Email
						</label>
						<input
							type="email"
							name="email"
							placeholder="Email"
							className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 border-2"
						/>
					</div>
					<div className="space-y-1 text-sm">
						<label htmlFor="password" className="block dark:text-gray-400">
							Password
						</label>
						<input
							type="password"
							name="password"
							placeholder="Password"
							className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
						/>
					</div>
					<div className="space-y-1 text-sm">
						<label htmlFor="password" className="block dark:text-gray-400">
							Date
						</label>
						<input
							type="date"
							name="date"
							className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 border-2"
						/>
					</div>

					<button
						type="submit"
						className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
						Register
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
