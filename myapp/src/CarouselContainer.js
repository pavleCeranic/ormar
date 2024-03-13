import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {

	const settings = {
		infinite: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4333,
	};

	const placeholders = [
		'bg-black',
		'bg-myColorGrey',
		'bg-gray-light',
		'bg-gray-dark'
	]

	return (
		<div className='h-3/5 w-full'>
			<Slider {...settings}>
				{placeholders.map((placeholder, index) => (
					<div key={index} className={`${placeholder} h-96 w-full`}>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Carousel;
