import React from 'react';
import './Home.css';
import Card from '../Card.js'
import BestSellerContainer from '../BestSellerContainer.js';

function Home() {
	return (
		<div className='flex justify-center'>
			<BestSellerContainer />
		</div>
	);
}

export default Home;