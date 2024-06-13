import { useEffect, useState } from 'react';
import { getArticles } from '../Pages/Article.js';
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

		fetchArticles();

	}, []);

	const items = [
		{ label: 'Stolica', price: '21.55' },
		{ label: 'Barska Stolica', price: '59.55' },
		{ label: 'Kafanska Stolica', price: '82.55' },
		{ label: 'Fotelja', price: '20.00' },
		{ label: 'Sofa', price: '52.55' },
		{ label: 'Trosjed', price: '59.55' },
		{ label: 'Namjestaj Stolica Fotelja', price: '59.55' },
		{ label: 'Najobicnija stolica iz nekog salona', price: '59.55' }
	]

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
