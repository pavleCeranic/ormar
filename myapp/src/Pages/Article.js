// a page for dispaying an article

import { useEffect, useState } from 'react';
import img from '../stolica_placeholder.png'
import img1 from '../artiklslike/img1.jpg'
import img2 from '../artiklslike/img2.jpg'
import img3 from '../artiklslike/img3.jpg'
import img4 from '../artiklslike/img4.jpg'
import img5 from '../artiklslike/img5.jpg'
import img6 from '../artiklslike/img6.jpg'
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';
// import axios from 'axios';

const Article = () => {

	const location = useLocation();
	const navigate = useNavigate();

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

	const handleClick = () => {
		navigate('/account');
	}

	return (
		<div className='flex flex-row content-center justify-center mb-28 mt-44'>
			<div id='imagesContainer' className=''>
				<ArticleImages />
			</div>
			<div id='detailsContainer' className='w-1/6 ml-10 h-3/5'>
				<div className='text-3xl'>{location.state.label || 'Article Name'}</div> { /*ne moze pisati Article Name, u slucaju greske ne smije se otvoriti, ishendlati ranije*/}
				<div>{location.state.price + ' KM' || 'Cijena Nije Navedena'}</div>
				<br />
				<div>Article Description</div>
				<div> X Banja Luka</div>
				<div> Size M</div>
				<div> Kategorija</div>
				<br />
				<div className='w-full h-16 shadow-lg flex flex-row rounded-sm content-center cursor-pointer transition-shadow duration-200 ease-in-out' onClick={handleClick} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'}>
					<div className=' w-10 h-10 rounded-3xl  bg-black m-4 mb-0'></div>
					<div className='flex flex-col justify-center'>
						<div className='text-lg'>Svetozar Markovic</div>
						<div className='text-xs'>Online</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const ArticleImages = () => {

	let imagesStore = [
		<img className=' w-full h-full rounded-lg object-cover' src={img} alt='Nothing to display' />,
		<img className=' w-full h-full rounded-lg object-cover' src={img1} alt='Nothing to display' />,
		<img className=' w-full h-full rounded-lg object-cover' src={img2} alt='Nothing to display' />,
		<img className=' w-full h-full rounded-lg object-cover' src={img3} alt='Nothing to display' />,
		<img className=' w-full h-full rounded-lg object-cover' src={img4} alt='Nothing to display' />,
		<img className=' w-full h-full rounded-lg object-cover' src={img5} alt='Nothing to display' />,
		<img className=' w-full h-full rounded-lg object-cover' src={img6} alt='Nothing to display' />
	]

	const makeAnImage = (classname, source, alternative = 'Nothing to display', onClickHandler = () => { }) => {
		return <img className={classname} src={source} alt={alternative} onMouseEnter={onClickHandler} onMouseLeave={(e) => e.target.style.opacity = '100%'} />
	}

	const [highlightImage, setHighlightImage] = useState((makeAnImage(imagesStore[0]?.props.className, imagesStore[0]?.props.src, imagesStore[0]?.props.alt)));

	const changeImage = (e) => {

		e.target.style.opacity = '80%'
		setHighlightImage(makeAnImage(e.target.className, e.target.src, e.target.alt));

	}

	return (
		<div className='flex flex-row w-full h-full'>
			<div className='flex flex-col h-96 w-full overflow-y-auto no-scrollbar z-10'>
				{imagesStore.length > 0 ? (
					imagesStore.map((image, index) => {
						return (
							<div key={index} className='bg-black w-20 h-20 m-1 z-0 rounded-lg'>
								{makeAnImage(image.props.className, image.props.src, image.props.alt, changeImage)}
							</div>
						);
					})
				) : (
					<div className=' w-20 h-20 m-1 bg-gray-light'>
					</div>
				)}
			</div>

			<div className='flex h-96 w-96 pl-2'>
				<div id='img4' className='h-96 w-96 p-1 rounded-lg'>{highlightImage}</div>
			</div>
		</div>
	);
}

export default Article;