import './App.css';
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.js';
import LoginRegistration from './Pages/LoginRegistration.js';
import Heading from './Components/Heading.js';
import Footer from './Components/Footer.js';
import Article from './Pages/Article.js';
import Account from './Pages/Account.js';
import PublishAndEditArticle from './Pages/PublishAndEditArticle.js';
import User from './Pages/User.js';
import { AuthContext } from './context/AuthContext.js';
import Loader from './Components/Loader.js';
import axios from 'axios';

function App() {

	const [loading, setLoading] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const aContext = useContext(AuthContext);

	useEffect(() => {

		if (aContext.loggedUser) {
			setLoading(false);
		}

		const getPrincipal = async () => {
			try {
				const response = await axios.get(process.env.REACT_APP_API_BASE_URL + 'getPrincipal', {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					withCredentials: true
				});
				// debugger
				if (response.data) {
					aContext.topLogin(response.data);
					setIsAuthenticated(true);
				}
				setLoading(false);
			} catch (e) {
				console.error('Error on login: ', e);
				throw e;
			}
		}

		getPrincipal();

	}, [])

	return (
		loading ? (<Loader />) :
		<div className='flex flex-col overflow-x-hidden select-none'>
			<BrowserRouter>
				<Heading user={isAuthenticated}/>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<LoginRegistration />} />
					<Route path="/article" element={<Article />} />
					<Route path="/account" element={<Account />} />
					<Route path="/publishandeditarticle" element={<PublishAndEditArticle />} />
					<Route path="/user" element={<User />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>

	);
}

export default App;
