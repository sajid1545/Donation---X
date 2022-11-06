import React from 'react';

const BannerField = ({handleInput}) => {
	return (
		<div>
			<div>
				<h1 className="text-4xl text-center font-bold mb-0">Help all the people in need</h1>
			</div>
			<div className="w-2/4 mx-auto my-5 flex">
				<div className="w-full mx-auto">
					<div className="relative">
						<span className="absolute inset-y-0 left-0 flex items-center pl-3">
							<svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
								<path
									d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"></path>
							</svg>
						</span>

						<input
							type="text"
							onChange={(e)=>handleInput(e.target.value)}
							className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
							placeholder="Search"
						/>
					</div>
				</div>
				<button className="btn btn-primary">Search</button>
			</div>
		</div>
	);
};

export default BannerField;
