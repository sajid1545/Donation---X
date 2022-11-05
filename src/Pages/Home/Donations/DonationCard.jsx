import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const DonationCard = ({ event }) => {
	const { eventName, photoURL, description } = event;

	return (
		<div>
            <span class="group relative block bg-black h-[300px] cursor-pointer hover:scale-105 duration-500 hover:shadow-lg hover:shadow-yellow-600 rounded-2xl tooltip tooltip-info"
            data-tip={`select ${eventName}`}
            >
				<img
					alt="PICS"
					src={photoURL}
					class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity  "
				/>

				<div class="relative p-8">
					<p class="text-2xl font-bold text-white">{eventName}</p>

					
				</div>
			</span>
		</div>
	);
};

export default DonationCard;
