import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BannerField from '../BannerField/BannerField';
import DonationCard from './DonationCard';

const Donations = () => {
	const [events, setEvents] = useState([]);
	const [input, setInput] = useState('');
	const [count, setCount] = useState(0);
	const [page, setPage] = useState(0);
	const [size, setSize] = useState(6);
	const pages = Math.ceil(count / size);

	const handleInput = (text) => {
		text.toLowerCase()
		setInput(text)
	};

	useEffect(() => {
		fetch(`http://localhost:3000/events?page=${page}&size=${size}&title=${input}`)
			.then((res) => res.json())
			.then((data) => {
				setEvents(data.events);
				setCount(data.count);
			});
	}, [page, size,input]);

	return (
		<div>
			<div>
				<BannerField handleInput={handleInput} />
			</div>

			<div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px] mx-auto my-10">
					{events.map((event) => (
						<DonationCard key={event._id} event={event} />
					))}
				</div>
			</div>

			<div className="flex space-x-5 w-2/4 justify-center mx-auto my-5">
				{[...Array(pages).keys()].map((number) => (
					<button
						key={number}
						className={`px-12 btn-primary btn text-white font-semibold ${
							page === number ? 'bg-orange-500 font-bold text-4xl' : ''
						}`}
						onClick={() => setPage(number)}>
						{number + 1}
					</button>
				))}
			</div>
		</div>
	);
};

export default Donations;
