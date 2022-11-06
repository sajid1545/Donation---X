import React from 'react';
import { FaTrash } from 'react-icons/fa';

const VolunteerTable = ({ volunteer, handleDeleteVolunteer }) => {
	const { name, email, date,_id } = volunteer;

	return (
		<tr>
			<td>{name}</td>
			<td>{email}</td>
			<td>{date}</td>
			<th>
				<FaTrash
					onClick={()=>handleDeleteVolunteer(_id)}
					className="text-red-700 text-xl cursor-pointer hover:rotate-[360deg] duration-700 hover:scale-110"
				/>
			</th>
		</tr>
	);
};

export default VolunteerTable;
