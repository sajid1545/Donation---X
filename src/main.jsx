import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import App from './App';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			
			<ToastContainer position="top-center" autoClose={2500} />
			<App />
		</AuthProvider>
	</React.StrictMode>
);
