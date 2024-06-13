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
		{ name: 'Stolica', price: '21.55', id: 1 },
		{ name: 'Barska Stolica', price: '59.55', id: 2 },
		{ name: 'Kafanska Stolica', price: '82.55', id: 3 },
		{ name: 'Fotelja', price: '20.00', id: 4 },
		{ name: 'Sofa', price: '52.55', id: 5 },
		{ name: 'Trosjed', price: '59.55', id: 6 },
		{ name: 'Namjestaj Stolica Fotelja', price: '59.55', id: 7 },
		{ name: 'Najobicnija stolica iz nekog salona', price: '59.55', id: 8 }
	]

	return (
		<div className='flex flex-col justify-center items-center z-20'>
			{props.title === '' ? '' : <h1 className='flex justify-center text-3xl font-bold m-10'>{props.title}</h1>}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{items.map((item, index) => (
					<Card key={index} id={item.id} label={item.name} price={item.price} />
				))}
			</div>
		</div>
	);
}

export default ArticleGroupContainer;
