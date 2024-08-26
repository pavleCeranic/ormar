import { useEffect, useState } from 'react';
import { getArticles, getActive } from '../Pages/Article.js';
import './ArticleGroupContainer.css';
import Card from './Card.js'

const ArticleGroupContainer = (props) => {

	const [articles, setArticles] = useState([]);

	useEffect(() => {

		const fetchArticles = async () => {
			try {
				const data = await getArticles();
				setArticles(data);
			} catch (error) {
				console.error('Error fetching articles', error);
			}
		};

		const fetchActive = async () => {
			try {
				const data = await getActive(props.ownerUsername);
				setArticles(data);
			} catch (error) {
				console.error('Error fetching articles', error);
			}
		};

		if (props.articlesIdList === 'all') {
			fetchArticles();
		} else {
			fetchActive();
		}

	}, []);

	return (
		<div className='flex flex-col justify-center items-center z-20'>
			{props.title === '' ? '' : <h1 className='flex justify-center text-3xl font-bold m-10'>{props.title}</h1>}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{articles.map((item, index) => (
					<Card key={index} id={item.id} label={item.name} price={item.price} />
				))}
			</div>
		</div>
	);
}

export default ArticleGroupContainer;
