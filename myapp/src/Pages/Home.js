import React from 'react';
import './Home.css';
import ArticleGroupContainer from '../Components/ArticleGroupContainer.js';
import CarouselContainer from '../Components/CarouselContainer.js';

function Home() {

	return (
		<div className=''>
			<CarouselContainer />
			<ArticleGroupContainer title='Izdvojeno za tebe'/>
		</div>
	);
}

export default Home;