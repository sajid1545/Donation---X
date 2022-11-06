import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import SelectedEventCard from './SelectedEventCard';

const SelectedEvents = () => {
	const [selectedEvents, setSelectedEvents] = useState([]);
	const { user, logOut } = useContext(AuthContext);

	useEffect(() => {
		fetch(`https://donation-x-server.vercel.app/selected-events?email=${user?.email}`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem('donate-token')}`,
			},
		})
			.then((res) => {
				if (res.status === 403 || res.status === 401) {
					return logOut();
				}
				return res.json();
			})
			.then((data) => setSelectedEvents(data));
	}, [user?.email]);

	const handleDeleteEvent = (id) => {
		console.log(id);

		const agree = window.confirm('Are you sure you want to delete');

		if (agree) {
			fetch(`https://donation-x-server.vercel.app/selected-events/${id}`, {
				method: 'DELETE',
				headers: {
					authorization: `Bearer ${localStorage.getItem('donate-token')}`,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						toast.success('Deleted');
						const remaining = selectedEvents.filter((event) => event._id !== id);
						setSelectedEvents(remaining);
					}
				});
		}
	};

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
					<SelectedEventCard key={event._id} event={event} handleDeleteEvent={handleDeleteEvent} />
				))}
			</div>
		</div>
	);
};

export default SelectedEvents;
