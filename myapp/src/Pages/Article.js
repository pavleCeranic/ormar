// a page for dispaying an article

import { useEffect } from 'react';
import img from '../stolica_placeholder.png'
import { useLocation } from 'react-router-dom';
// import axios from 'axios';


const Article = () => {

	const location = useLocation();
	let article = {};

	const itemId = location.state.id;
	useEffect(() => {
		setTimeout(()=>{
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}, 150);

		// axios.get('getArticle&' + {itemId})
		// 	.then(response => {
		// fill the article object
		// 	})
		// 	.catch(error => {

		// 	});
	}, []);

	return (
		<div className=' flex flex-row content-center justify-center mb-28 mt-44'>
			<div id='imagesContainer' className=''>
				<ArticleImages />
				{/* <img className='h-full w-full' src={img} alt="Description of the image" /> */}
			</div>
			<div id='detailsContainer' className='w-1/6'>
				<div className='text-3xl'>{location.state.label || 'Article Name'}</div> { /*ne moze pisati Article Name, u slucaju greske ne smije se otvoriti, ishendlati ranije*/}
				<div>{location.state.price + ' KM' || 'Cijena Nije Navedena'}</div>
				<br />
				<div>Article Description</div>
				<div> X Banja Luka</div>

			</div>
		</div>
	);
}

const ArticleImages = ({ images }) => {
	return (
		<div className='flex flex-row w-1/6 h-3/5'>
			<div className='flex flex-col h-max bg-gray'>
				<div id='img1' className='bg-black w-20 h-20 m-1'></div>
				<div id='img2' className='bg-black w-20 h-20 m-1'></div>
				<div id='img3' className='bg-black w-20 h-20 m-1'></div>
			</div>
			<div className='flex h-max w-max bg-inactiveGrey'>
				<div id='img4' className='bg-black h-64 w-64 m-1'></div>
			</div>
		</div>
	);
}

export default Article;