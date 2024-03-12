import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.js';
import Account from './Pages/Account.js';
import Heading from './Heading.js';

function App() {
	return (
		<div className=''>
			<BrowserRouter>
				<Heading />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/account" element={<Account />} />
				</Routes>
			</BrowserRouter>
		</div>

	);
}

export default App;
