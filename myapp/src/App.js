import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.js';
import LoginRegistration from './Pages/LoginRegistration.js';
import Heading from './Components/Heading.js';
import Footer from './Components/Footer.js';
import Article from './Pages/Article.js';
import Account from './Pages/Account.js';
import PublishAndEditArticle from './Pages/PublishAndEditArticle.js';
import User from './Pages/User.js';

function App() {
	return (
		<div className='flex flex-col overflow-x-hidden select-none'>
			<BrowserRouter>
				<Heading />
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
