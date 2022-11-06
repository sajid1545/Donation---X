import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BannerField from '../BannerField/BannerField';
import DonationCard from './DonationCard';

const Donations = () => {
	const [events, setEvents] = useState([]);

	const [page,setPage] = useState(0);
	const [size,setSize] = useState(10);


	useEffect(() => {
		fetch('http://localhost:3000/events')
			.then((res) => res.json())
			.then((data) => setEvents(data));
	}, []);

	return (
		<div>
			<div>
				<BannerField />
			</div>

			<div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px] mx-auto my-10">
					{events.map((event) => (
						<DonationCard key={event._id} event={event} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Donations;
