import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateDonationEvent = () => {
	const storedEvent = useLoaderData();
	const { eventName, photoURL, date, description, _id } = storedEvent;

	// console.log(storedEvent);
	// const [updatedEvent, setUpdatedEvent] = useState(storedEvent);

	const handleUpdateEvent = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.eventTitle.value;
		const date = form.date.value;
		const photoURL = form.photoURL.value;
		const description = form.description.value;

		const event = {
			eventName: name,
			date,
			photoURL,
			description,
		};

		fetch(`http://localhost:3000/events/${_id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(event),
		})
			.then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success('Updated Successfully')

                }
			});
	};

	return (
		<div>
			<section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
				<form onSubmit={handleUpdateEvent}>
					<div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
						<div>
							<label className="text-gray-700 dark:text-gray-200">Event Title</label>
							<input
								type="text"
								name="eventTitle"
								required
								defaultValue={eventName}
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							/>
						</div>

						<div>
							<label className="text-gray-700 dark:text-gray-200">Event Date</label>
							<input
								type="date"
								name="date"
								required
								defaultValue={date}
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							/>
						</div>

						<div>
							<label className="text-gray-700 dark:text-gray-200">Description</label>
							<textarea
								type="text"
								name="description"
								required
								rows={6}
								defaultValue={description}
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							/>
						</div>

						<div>
							<label className="text-gray-700 dark:text-gray-200">Banner Image</label>
							<input
								type="text"
								name="photoURL"
								required
								defaultValue={photoURL}
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
							/>
						</div>
					</div>

					<div className="flex justify-end mt-6">
						<button
							type="submit"
							className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
							Update Event
						</button>
					</div>
				</form>
			</section>
		</div>
	);
};

export default UpdateDonationEvent;
