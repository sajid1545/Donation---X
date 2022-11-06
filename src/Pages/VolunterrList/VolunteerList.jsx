import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import VolunteerTable from './VolunteerTable';

const VolunteerList = () => {
	const [volunteers, setVolunteers] = useState([]);

	useEffect(() => {
		fetch('https://donation-x-server.vercel.app/volunteers', {
			headers: {
				authorization: `Bearer ${localStorage.getItem('donate-token')}`,
			},
		})
			.then((res) => res.json())
			.then((data) => setVolunteers(data));
	}, []);

	const handleDeleteVolunteer = (_id) => {
		const agree = window.confirm('Are you sure you want to delete this user');

		if (agree) {
			fetch(`https://donation-x-server.vercel.app/volunteers/${_id}`, {
				method: 'DELETE',
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						console.log(data);
						toast.success('Deleted successfully');
						const remaining = volunteers.filter((v) => v._id !== _id);
						setVolunteers(remaining);
					}
				});
		}
	};

	return (
		<div>
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Date</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{volunteers.map((v) => (
							<VolunteerTable
								key={v._id}
								volunteer={v}
								handleDeleteVolunteer={handleDeleteVolunteer}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default VolunteerList;
