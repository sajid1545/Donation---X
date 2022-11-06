import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const DonationsDetails = () => {
	const event = useLoaderData();

	const { user } = useContext(AuthContext);

	const { eventName, photoURL, date, description } = event;

	const selectedEvent = {
		eventName,
		eventPhoto: photoURL,
		date,
		description,
		email: user?.email,
	};


	const handleSelectedEvent = (id) => {
		
		fetch('http://localhost:3000/selected-events', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(selectedEvent),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					toast.success('Event Selected');
				}
				console.log(data);
			});
	};

	return (
		<div className="flex justify-center items-center min-h-screen w-3/4 mx-auto">
			<article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
				<img
					alt="Office"
					src={photoURL}
					className="h-[400px] bg-no-repeat bg-center bg-cover  w-full object-cover"
				/>

				<div className="bg-white p-4 sm:p-6 space-y-4">
					<time className="block text-xs text-gray-500 mb-5">{date}</time>

					<a href="#">
						<h3 className="mt-0.5  text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold text-3xl">
							{eventName}
						</h3>
					</a>

					<p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">{description}</p>

					<button
						onClick={() => handleSelectedEvent(selectedEvent)}
						className="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
						href="/download">
						<span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
							Select Event
						</span>
					</button>
				</div>
			</article>
		</div>
	);
};

export default DonationsDetails;
