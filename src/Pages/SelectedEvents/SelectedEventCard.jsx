import React, { useContext, useReducer, useState } from 'react';
import { toast } from 'react-toastify';

const SelectedEventCard = ({ event, handleDeleteEvent }) => {
	const { eventName, eventPhoto, date, _id } = event;

	return (
		<div>
			<div className="card card-side bg-base-100 shadow-xl">
				<figure>
					<img src={eventPhoto} alt="Movie" className="h-[200px]" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{eventName}</h2>
					<p>{date}</p>
					<div className="card-actions justify-end">
						<button onClick={() => handleDeleteEvent(_id)} className="btn  bg-red-600">
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SelectedEventCard;
