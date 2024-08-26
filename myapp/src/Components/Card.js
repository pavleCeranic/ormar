import './Card.css';
import img from '../stolica_placeholder.png'
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/article', { state: { label: props.label, price: props.price, id: props.id } });
	}

	return (
		<div onClick={handleClick} className={'flex flex-col max-[400px]:w-full max-[400px]:m-0 justify-between h-96 w-64 m-4 shadow-md cursor-pointer hover:shadow-2xl hover:mt-2 hover:contrast-125 transition-all duration-600 ease-in-out'} >
			<div className='h-3/4 max-[400px]:w-[90vw] w-64 bg-myColorBrown '>
				<img className='h-full w-full object-cover' src={img} alt="Description of the image" />
			</div>
			<div className='m-2 font-bold'>{props.label}</div>
			<div className='m-2'>{props.price} BAM</div>
		</div>
	);
}

export default Card;
