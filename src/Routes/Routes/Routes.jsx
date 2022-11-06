import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import SelectedEvents from '../../Pages/SelectedEvents/SelectedEvents';
import AddEvent from './../../Pages/AddEvent/AddEvent';
import DonationsDetails from './../../Pages/Home/Donations/DonationsDetails';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/add-event',
				element: <AddEvent />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/eventDetails/:id',
				element: <DonationsDetails />,
				loader: ({ params }) => fetch(`http://localhost:3000/events/${params.id}`),
			},
			{
				path: '/selected-events',
				element: <SelectedEvents />,
			},
		],
	},
]);
