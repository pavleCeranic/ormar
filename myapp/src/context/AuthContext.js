import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [loggedUser, setUser] = useState(null);

	const topLogin = (userData) => {
		setUser(userData);
	};

	const topLogout = () => {
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ loggedUser, topLogin, topLogout }}>
			{children}
		</AuthContext.Provider>
	);
};