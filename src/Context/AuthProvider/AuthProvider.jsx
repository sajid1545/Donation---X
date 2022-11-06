import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);

		return createUserWithEmailAndPassword(auth, email, password);
	};

	const login = (email, password) => {
		setLoading(true);

		return signInWithEmailAndPassword(auth, email, password);
	};

	const updateUsersProfile = (name) => {
		setLoading(true);

		return updateProfile(auth.currentUser, {
			displayName: name,
		});
	};

	const logOut = () => {
		setLoading(true);

		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => {
			return unsubscribe();
		};
	}, []);

	const authInfo = { createUser, login, user, logOut,updateUsersProfile,loading };
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
