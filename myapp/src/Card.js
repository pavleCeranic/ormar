import './Card.css';
import img from './stolica_placeholder.png'

const Card = (props) => {

	return (
		<div className={'flex flex-col justify-between h-96 w-64 m-8 shadow-xl cursor-pointer hover:shadow-sm hover:mt-5 transition-all duration-600 ease-in-out '}>
			<div className='h-3/4 w-64 bg-myColorBrown'>
				<img className='h-full w-full' src={img} alt="Description of the image" />
			</div>
			<div className='m-2 font-bold'>{props.label}</div>
			<div className='m-2'>{props.price} BAM</div>
		</div>
	);
}

export default Card;
