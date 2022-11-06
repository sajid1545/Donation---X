import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
	const { login } = useContext(AuthContext);

	const location = useLocation();
	const navigate = useNavigate();

	const from = location.state?.from?.pathname || '/';

	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		login(email, password)
			.then((result) => {
				const user = result.user;
				const currentUser = {
					email: user?.email,
				};

				fetch('http://localhost:3000/jwt', {
					method: 'POST',
					headers: {
						'content-type': 'application/json',
					},
					body: JSON.stringify(currentUser),
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data.token);
						toast.success('Successfully logged in');
						localStorage.setItem('donate-token', data.token);
						navigate(from, { replace: true });
					});
			})
			.catch((err) => {
				console.log(err);
				toast.error(err.message);
			});
	};

	return (
		<div>
			<div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
				<h1 className="text-2xl font-bold text-center">Login</h1>
				<form onSubmit={handleLogin} className="space-y-6 ">
					<div className="space-y-1 text-sm">
						<label htmlFor="username" className="block dark:text-gray-400">
							Email
						</label>
						<input
							type="email"
							name="email"
							placeholder="Username"
							className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
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
					<button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
						Login
					</button>
				</form>
				<div className="flex items-center pt-4 space-x-1">
					<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
					<p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
					<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
				</div>
				<div className="flex justify-center space-x-4">
					<button aria-label="Log in with Google" className="p-3 rounded-sm">
						<FaGoogle className="w-5 h-5 fill-current" />
					</button>
				</div>
				<p className="text-xs text-center sm:px-6 dark:text-gray-400">
					Don't have an account?
					<Link to={'/register'} className="underline dark:text-gray-100">
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
