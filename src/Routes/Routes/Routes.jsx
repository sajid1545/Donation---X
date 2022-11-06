import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Admin from '../../Pages/Admin/Admin';
import UpdateDonationEvent from '../../Pages/Home/Donations/UpdateDonationEvent';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import SelectedEvents from '../../Pages/SelectedEvents/SelectedEvents';
import RightSideBar from '../../Pages/Shared/RighSideBar/RightSideBar';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';
import AddEvent from './../../Pages/AddEvent/AddEvent';
import DonationsDetails from './../../Pages/Home/Donations/DonationsDetails';
import PrivateAdminRoute from './../PrivateAdminRoute/PrivateAdminRoute';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			// {
			// 	path: '/add-event',
			// 	element: (
			// 		<PrivateRoutes>
			// 			<AddEvent />
			// 		</PrivateRoutes>
			// 	),
			// },
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
				element: (
					<PrivateRoutes>
						<DonationsDetails />
					</PrivateRoutes>
				),
				loader: ({ params }) => fetch(`http://localhost:3000/events/${params.id}`),
			},
			{
				path: '/selected-events',
				element: (
					<PrivateRoutes>
						<SelectedEvents />
					</PrivateRoutes>
				),
			},
			{
				path: '/update-event/:id',
				element: (
					<PrivateAdminRoute>
						<UpdateDonationEvent />
					</PrivateAdminRoute>
				),
				loader: ({ params }) => fetch(`http://localhost:3000/events/${params.id}`),
			},
		],
	},
	{
		path: '/admin',
		element: (
			<PrivateAdminRoute>
				<Admin />
			</PrivateAdminRoute>
		),
		children: [
			{
				path: '/admin/add-event',
				element: <AddEvent />,
			},
		],
	},
]);
