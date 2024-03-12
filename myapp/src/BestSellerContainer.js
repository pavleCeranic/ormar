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
		<div className='flex flex-col w-3/5 justify-center content-center'>
			<h1 className='flex justify-center text-3xl font-bold'>Best Seller Products</h1>
			<div className='grid grid-cols-4'>
				{items.map((item, index) => (
					<Card key={index} label={item.label} price={item.price}/>
				))}
			</div>
		</div>
	);
}

export default BestSellerContainer;
