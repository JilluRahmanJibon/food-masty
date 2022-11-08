import React, { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
	// user state
	const [user, setUser] = useState(null);
	// loading state
	const [loading, setLoading] = useState(true);
	const googleProvider = new GoogleAuthProvider();
	const continueWithGoogle = () => {
		return signInWithPopup(auth, googleProvider);
	};

	// create user with email and password
	const createUserWithEmailAndPass = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	// user profile update
	const userProfileUpdate = (name, photoUrl) => {
		updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photoUrl,
		});
		if (photoUrl) {
		}
	};
	// log in with email password
	const logInWithEmailAndPassword = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	// Log out
	const userLogOut = () => {
		return signOut(auth);
	};
	// auth on state change ...  who is the login now log out now for checking
	useEffect(() => {
		const unSubscribes = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser);

			setLoading(false);
		});
		return () => {
			unSubscribes();
		};
	}, []);
	// auth info
	const authInfo = {
		loading,
		user,
		createUserWithEmailAndPass,
		userProfileUpdate,
		logInWithEmailAndPassword,
		userLogOut,
		continueWithGoogle,
	};
	return (
		<div>
			<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
		</div>
	);
};

export default AuthProvider;
