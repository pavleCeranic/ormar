import React from 'react';
import './Home.css';
import BestSellerContainer from '../BestSellerContainer.js';
import CarouselContainer from '../CarouselContainer.js';

function Home() {

	return (
		<div className=''>
			<CarouselContainer />
			<BestSellerContainer />
		</div>
	);
}

export default Home;