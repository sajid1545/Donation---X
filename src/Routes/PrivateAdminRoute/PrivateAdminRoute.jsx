import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { Audio } from 'react-loader-spinner';

const PrivateAdminRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<Audio
					height="100"
					width="100"
					color="#4fa94d"
					ariaLabel="audio-loading"
					wrapperStyle={{}}
					wrapperClass="wrapper-class"
					visible={true}
				/>
			</div>
		);
	}

	if (user?.email === 'sajid1@gmail.com') {
		return children;
	} else {
		toast.error('Only admin can access this');
		return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
	}
};

export default PrivateAdminRoute;
