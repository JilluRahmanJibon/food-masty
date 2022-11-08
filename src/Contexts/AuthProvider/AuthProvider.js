import React, { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
	// user state
	const [user, setUser] = useState(null);

	// auth info
	const authInfo = { user };
	return (
		<div>
			<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
		</div>
	);
};

export default AuthProvider;
