import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Audio } from 'react-loader-spinner';

const PrivateRoutes = ({ children }) => {
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

	if (user) {
		return children;
	}

	return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
