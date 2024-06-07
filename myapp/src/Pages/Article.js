// a page for dispaying an article

import { useEffect, useState } from 'react';
import img from '../stolica_placeholder.png'
import { useLocation } from 'react-router-dom';
import '../App.css';
// import axios from 'axios';


const Article = () => {

	const location = useLocation();

	useEffect(() => {
		setTimeout(() => {
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
			</div>
			<div id='detailsContainer' className='w-1/6 ml-10 h-3/5'>
				<div className='text-3xl'>{location.state.label || 'Article Name'}</div> { /*ne moze pisati Article Name, u slucaju greske ne smije se otvoriti, ishendlati ranije*/}
				<div>{location.state.price + ' KM' || 'Cijena Nije Navedena'}</div>
				<br />
				<div>Article Description</div>
				<div> X Banja Luka</div>

			</div>
		</div>
	);
}

const ArticleImages = () => {

	let imagesStore = [
		<img className='h-full w-full opacity-20' src={img} alt="Description of the image" />,
		<img className='h-full w-full opacity-10' src={img} alt="Description of the image" />,
		<img className='h-full w-full opacity-90' src={img} alt="Description of the image" />,
		<img className='h-full w-full opacity-50' src={img} alt="Description of the image" />,
		<img className='h-full w-full opacity-30' src={img} alt="Description of the image" />,
		<img className='h-full w-full opacity-80' src={img} alt="Description of the image" />,
		<img className='h-full w-full' src={img} alt="Description of the image" />
	]

	const makeAnImage = (classname, source, alternative, onClickHandler = () => { }) => {
		return <img className={classname} src={source} alt={alternative} onClick={onClickHandler} />
	}

	const [highlightImage, setHighlightImage] = useState((makeAnImage(imagesStore[0].props.className, imagesStore[0].props.src, imagesStore[0].props.alt)));

	const changeImage = (e) => {

		setHighlightImage(makeAnImage(e.target.className, e.target.src, e.target.alt));

	}

	return (
		<div className='flex flex-row w-full h-full'>
			<div className='flex flex-col h-96 w-full bg-gray overflow-y-auto no-scrollbar z-10'>
				{imagesStore.length > 0 ? (
					imagesStore.map((image, index) => {

						return (
							<div key={index} className='bg-black w-20 h-20 m-1 z-0'>
								{makeAnImage(image.props.className, image.props.src, image.props.alt, changeImage)}
							</div>
						);
					})
				) : (
					<div className='bg-black w-20 h-20 m-1' onClick={changeImage}>
					</div>
				)}
			</div>

			<div className='flex h-96 w-96 bg-inactiveGrey'>
				<div id='img4' className='bg-black h-96 w-96 p-1 '>{highlightImage}</div>
			</div>
		</div>
	);
}

export default Article;