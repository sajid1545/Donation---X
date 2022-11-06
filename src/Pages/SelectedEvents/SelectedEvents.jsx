import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import SelectedEventCard from './SelectedEventCard';

const SelectedEvents = () => {
	const [selectedEvents, setSelectedEvents] = useState([]);
	const { user } = useContext(AuthContext);

	useEffect(() => {
		fetch(`http://localhost:3000/selected-events?email=${user?.email}`)
			.then((res) => res.json())
			.then((data) => setSelectedEvents(data));
	}, [user?.email]);

	return (
		<div>
			<div>
				<h1 className="text-center text-4xl">
					Events selected By{' '}
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-extrabold text-5xl italic">
						{user?.displayName}
					</span>{' '}
				</h1>
			</div>
			<div className="grid grid-cols-2 gap-10 max-w-[1200px] mx-auto my-20">
				{selectedEvents.map((event) => (
					<SelectedEventCard key={event._id} event={event} />
				))}
			</div>
		</div>
	);
};

export default SelectedEvents;
