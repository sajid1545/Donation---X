import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({ event }) => {
    const { eventName, photoURL,_id} = event;
    
   


	

	return (
		<Link to={`/eventDetails/${_id}`} >
			<span
				className="group relative block bg-black h-[300px] cursor-pointer hover:scale-105 duration-500 hover:shadow-lg hover:shadow-yellow-600 rounded-2xl tooltip tooltip-info mt-5"
				data-tip={`select ${eventName}`}>
				<img
					alt="PICS"
					src={photoURL}
					className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity  "
				/>

				<div className="relative p-8">
					<p className="text-2xl font-bold text-white">{eventName}</p>
				</div>
			</span>
		</Link>
	);
};

export default DonationCard;
