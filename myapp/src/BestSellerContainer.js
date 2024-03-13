import './BestSellerContainer.css';
import Card from './Card.js'
// import myImg from './stolica_placeholder.png'

const BestSellerContainer = () => {

	const items = [
		{label: 'stolica', price: '59.55'},
		{label: 'stolica', price: '59.55'},
		{label: 'stolica', price: '59.55'},
		{label: 'stolica', price: '59.55'},
		{label: 'stolica', price: '59.55'},
		{label: 'stolica', price: '59.55'},
		{label: 'stolica', price: '59.55'},
		{label: 'stolica', price: '59.55'}
	]

	return (
		<div className='flex flex-col justify-center items-center'>
			<h1 className='flex justify-center text-3xl font-bold m-10'>Best Seller Products</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{items.map((item, index) => (
					<Card key={index} label={item.label} price={item.price}/>
				))}
			</div>
		</div>
	);
}

export default BestSellerContainer;
