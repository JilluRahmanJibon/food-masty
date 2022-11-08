import React, { createContext, useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
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
	// auth info
	const authInfo = {
		loading,
		user,
		createUserWithEmailAndPass,
		userProfileUpdate,
		continueWithGoogle,
	};
	return (
		<div>
			<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
		</div>
	);
};

export default AuthProvider;
