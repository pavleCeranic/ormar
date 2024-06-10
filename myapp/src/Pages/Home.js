import React from 'react';
import './Home.css';
import BestSellerContainer from '../Components/BestSellerContainer.js';
import CarouselContainer from '../Components/CarouselContainer.js';

function Home() {

	return (
		<div className=''>
			<CarouselContainer />
			<BestSellerContainer title='Best Seller'/>
		</div>
	);
}

export default Home;