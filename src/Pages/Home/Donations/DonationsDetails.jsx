import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const DonationsDetails = () => {
	const event = useLoaderData();
	console.log(event);

	const { eventName, photoURL, date, description } = event;

	return (
		<div className="flex justify-center items-center min-h-screen w-3/4 mx-auto">
			<article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
				<img
					alt="Office"
					src={photoURL}
					class="h-[400px] bg-no-repeat bg-center bg-cover  w-full object-cover"
				/>

				<div class="bg-white p-4 sm:p-6 space-y-4">
					<time datetime="2022-10-10" class="block text-xs text-gray-500 mb-5">
						{date}
					</time>

					<a href="#">
						<h3 class="mt-0.5  text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold text-3xl">
							{eventName}
						</h3>
					</a>

					<p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">{description}</p>

					<button
						class="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
						href="/download">
						<span class="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
							Select Event
						</span>
					</button>
				</div>
			</article>
		</div>
	);
};

export default DonationsDetails;
