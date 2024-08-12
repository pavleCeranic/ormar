import { useContext, useState } from 'react';
import './Heading.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Heading(props) {

	const aContext = useContext(AuthContext);
	const [accountLink, setAccountLink] = useState('/register')

	return (
		<div className='w-full flex flex-row shadow-xl h-14 fixed top-0 z-50 bg-white text-sm sm:text-base p-3'>
			<Link to="/" className='self-center text-center w-44'>
				Logo
			</Link>
			<Menu label='Collections' items={['Item 1', 'Item 2', 'Item 3']} />
			<Link to={props.user} className='self-center text-center w-44 hover:font-bold transition-all duration-200 ease-in-out'>
				Account
			</Link>
		</div>
	);
}

const Menu = ({ label, items }) => {
	return (
		<div className='flex flex-1 self-center justify-center text-center w-max'>
			<span className=' hover:font-bold transition-all duration-200 ease-in-out'>
				{label}
			</span>
			<div className="hidden group-hover:block absolute z-10 bg-white p-2 mt-2 space-y-2 shadow">
				{items.map((item, index) => (
					<div key={index}>{item}</div>
				))}
			</div>
		</div>
	);
};

export default Heading;