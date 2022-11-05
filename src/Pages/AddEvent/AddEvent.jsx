import React from 'react';

const AddEvent = () => {
	const handleAddEvent = (event) => {
		event.preventDefault();
	};

	return (
		<div className="">
			<section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
				<form onClick={handleAddEvent}>
					<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
						<div>
							<label className="text-gray-700 dark:text-gray-200">Event Title</label>
							<input
								type="text"
								name="eventName"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							/>
						</div>

						<div>
							<label className="text-gray-700 dark:text-gray-200">Event Date</label>
							<input
								type="date"
								name="date"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							/>
						</div>

						<div>
							<label className="text-gray-700 dark:text-gray-200">Description</label>
							<textarea
								type="text"
								name="description"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							/>
						</div>

						<div>
							<label className="text-gray-700 dark:text-gray-200">Banner Image</label>
							<input
								type="text"
								name="photoURL"
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							/>
						</div>
					</div>

					<div className="flex justify-end mt-6">
						<button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
							Add Event
						</button>
					</div>
				</form>
			</section>
		</div>
	);
};

export default AddEvent;
