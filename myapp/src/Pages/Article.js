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
import axios from 'axios';

export const getArticles = async () => {
	try {
		const response = await axios.get(process.env.REACT_APP_API_ARTICLE_URL + 'getAll');
		return response.data;
	} catch (error) {
		console.error('Error fetching articles', error);
		throw error;
	}
};

export const getArticleById = async (id) => {
	try {

		const response = await axios.get(process.env.REACT_APP_API_ARTICLE_URL + id);
		return response.data;
	} catch (error) {
		console.error(`Error fetching article with id ${id}`, error);
		throw error;
	}
};

export const createArticle = async (article) => {
	try {
		const response = await axios.post(process.env.REACT_APP_API_ARTICLE_URL + 'create', article);
		return response;
	} catch (error) {
		console.error('Error creating article', error);
		throw error;
	}
};

export const updateArticle = async (article) => {
	try {
		const response = await axios.post(process.env.REACT_APP_API_ARTICLE_URL + 'update', article);
		return response;
	} catch (error) {
		console.error('Error updating article', error);
		throw error;
	}
};

export const deleteArticle = async (id) => {
	try {
		await axios.delete(process.env.REACT_APP_API_ARTICLE_URL + id);
	} catch (error) {
		console.error(`Error deleting article with id ${id}`, error);
		throw error;
	}
};

const Article = () => {

	const location = useLocation();
	const navigate = useNavigate();
	const [article, setArticle] = useState({});
	const owns = true; // is the user owner of the article that is displayed TODO: dynamicly seting

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}, 150);

		if (location.state.article) {
			setArticle(location.state.article);
		} else {
			const fetchArticle = async () => {
				try {
					const fetchedArticle = await getArticleById(location.state.id);
					setArticle(fetchedArticle);
				} catch (error) {
					console.error(`Error fetching article with id number: ${location.state.id}`, error);

				}
			}

			fetchArticle();
		}

	}, []);

	const handleClick = () => {
		navigate('/account');
	}

	return (
		<div className='flex flex-wrap w-11/12 h-max self-center content-center justify-center lg:w-6/6 lg:items-start mt-16'>
			<ArticleImages />
			<div id='detailsContainer' className='flex flex-col w-full self-center md:w-1/3 lg:w-1/3 md:self-start md:pl-2 md:pt-2 xl:w-1/3 xl:ml-5'>
				<div className='text-3xl'>{location.state.label}</div>
				<div>{location.state.price && location.state.price !== 0 ? location.state.price + ' KM' : 'Cijena Nije Navedena'}</div>
				<div>Objavljeno {new Date(article.dateAdded).toLocaleString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
				<br />
				<div> X {article.city?.replace('_', ' ')}</div>
				<div> {article.size}</div>
				<div> {article.category}</div>
				<div> {article.condition}</div>
				<div> {article.color}</div>
				<div> {article.brand}</div>
				<div> {article.description}</div>
				<div> {article.materials}</div>
				<br />
				<div className='flex flex-row self-center w-full h-16 sm:w-full sm:self-center lg:w-72 lg:self-start shadow-lg rounded-sm content-center cursor-pointer transition-shadow duration-200 ease-in-out' onClick={handleClick} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'}>
					<div className=' w-10 h-10 rounded-3xl  bg-black m-4 mb-0'></div>
					<div className='flex flex-col justify-center'>
						<div className='text-lg'>Svetozar Markovic</div>
						<div className='text-xs'>Online</div>
					</div>
				</div>
				<br />
			</div>
			{owns && <UserActions id={article.id} article={article} />}
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
		<div className='flex flex-col-reverse mt-2 sm:flex-row sm:w-max w-full md:w-2/3 lg:w-1/2 xl:w-1/3 '>
			<div className='flex flex-row h-1/6 w-full overflow-x-auto no-scrollbar z-10 sm:flex-col sm:overflow-y-auto sm:h-96 sm:w-1/6 md:w-3/12 lg:w-3/12 lg:items-end'>
				{imagesStore.length > 0 ? (
					imagesStore.map((image, index) => {
						return (
							<div key={index} className='flex-shrink-0 bg-black w-16 h-16 m-1 z-0 rounded-lg'>
								{makeAnImage(image.props.className, image.props.src, image.props.alt, changeImage)}
							</div>
						);
					})
				) : (
					<div className=' w-20 h-20 m-1 bg-gray-light'>
					</div>
				)}
			</div>

			<div className=' flex-shrink-0 flex h-96 w-full sm:w-5/6 md:w-9/12 lg:w-9/12'>
				<div id='img4' className='h-96 w-96 p-1 rounded-lg'>{highlightImage}</div>
			</div>
		</div>
	);
}

const UserActions = (props) => {

	const navigate = useNavigate();

	const handleDelete = () => {

		deleteArticle(props.id);
		navigate(-1);

	}

	const handleEdit = () => {

		// edit
		navigate('/publishnewarticle', { state: { article: props.article } });

	}

	const handleFinish = () => {

		// finish

	}

	return (
		<div className='flex flex-col h-28 w-full shadow-lg mb-5 rounded-md text-center self-center sm:w-[60vw] sm:min-w-48 sm:self-auto md:mt-5'>
			<div className=' shadow-sm cursor-pointer w-full h-full content-center hover:bg-lime-300' onClick={handleEdit}>Uredi</div>
			<div className=' shadow-sm cursor-pointer w-full h-full content-center hover:bg-red-300' onClick={handleFinish}>Zavrsi prodaju</div>
			<div className=' shadow-sm cursor-pointer w-full h-full content-center hover:bg-red-300' onClick={handleDelete}>Obrisi</div>
		</div>
	)
}

export default Article;