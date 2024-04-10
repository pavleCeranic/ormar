import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.js';
import LoginRegistration from './Pages/LoginRegistration.js';
import Heading from './Heading.js';
import Footer from './Footer.js';

function App() {
	return (
		<div className='flex flex-col overflow-x-hidden select-none'>
			<BrowserRouter>
				<Heading />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/account" element={<LoginRegistration />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>

	);
}

export default App;
