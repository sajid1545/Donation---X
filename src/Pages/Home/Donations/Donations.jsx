import React from 'react';
import { useState } from 'react';
import BannerField from '../BannerField/BannerField';

const Donations = () => {

    const [events,setEvents] = useState([])

	return (
		<div>
			<BannerField />
		</div>
	);
};

export default Donations;
