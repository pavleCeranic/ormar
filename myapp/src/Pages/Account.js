import './Account.css';
import BestSellerContainer from '../Components/BestSellerContainer.js'
import { useEffect, useRef, useState } from 'react';

const Account = () => {

	const firstDivRef = useRef(null);
	const secondDivRef = useRef(null);
	const [activeTab, setActiveTab] = useState('ormar');

	const handleTabChange = (newActiveTab, oldActiveTab) => {

		setActiveTab(newActiveTab === firstDivRef ? 'ormar' : '');

		if (newActiveTab && oldActiveTab) {
			newActiveTab.current.style.backgroundColor = 'white';
			oldActiveTab.current.style.backgroundColor = '#d3d3d3';
		}
	}

	useEffect(() => {
		handleTabChange(firstDivRef, secondDivRef)
	}, [])

	return (
		<div className='flex flex-col content-center mt-24 items-center'>
			<div className='flex flex-row h-56 w-3/5 justify-around items-center'>
				<div className='flex m-6'>
					<div className='flex flex-col w-44 h-44 rounded-full bg-zinc-400 items-center justify-end overflow-hidden' >
						<div className=' w-12 h-12 rounded-full bg-zinc-600 mb-2'></div>
						<div className=' w-28 h-16 rounded-3xl bg-zinc-600'></div>
					</div>
				</div>
				<div className='flex flex-col flex-1'>
					<div className='text-3xl'>Svetozar Markovic</div>
					<br />
					<div> X Banjaluka</div>
					<div>Posljednji put vidjen u 13:44</div>
				</div>
				<div>
					<div></div>
					<button>Edit account</button>
				</div>
			</div>
			<div className='flex flex-col h-full w-3/5 mb-4 shadow-2xl'>
				<div className='flex flex-row justify-around'>
					<div className=' flex justify-center items-center h-9 cursor-pointer w-full' ref={firstDivRef} onClick={() => { handleTabChange(firstDivRef, secondDivRef) }}>Ormar</div>
					<div className=' flex justify-center items-center h-9 cursor-pointer w-full' ref={secondDivRef} onClick={() => { handleTabChange(secondDivRef, firstDivRef) }}>Ocjene</div>
				</div>
				<div className='overflow-hidden h-full mt-3'>
					{activeTab === 'ormar' ?
						<BestSellerContainer title='' />
						: <Reviews />
					}
				</div>

			</div>
		</div>
	)
}

const Reviews = () => {

	const reviews = [
		{ reviewer: 'Pero', review: 'Super kupac', stars: 4, date: 'Decembar 2024' },
		{ reviewer: 'Mico', review: 'nisam zadovoljan komunikacijom', stars: 2, date: 'Decembar 1984' },
		{ reviewer: 'Jovo', review: 'sve pet', stars: 5, date: 'Januar 2024' },
	]

	return (
		<div className='flex flex-col h-96'>
			{reviews.length > 0
				? reviews.map((item, index) => {
					<div className='flex flex-col'>
						<div key={index} className='flex flex-row w-full h-20'>
							<div>
								<div className='w-10 h-10 bg-black m-3'></div>
							</div>
							<div>
								<div>{item.reviewer}</div>
								<div>{item.stars}</div>
							</div>
							<div>
								<div>{item.date}</div>
							</div>
						</div>
						<div className='w-full h-7'>{item.review}</div>
					</div>

				})
				: <div className='flex justify-center'>Trenutno nema ocjena</div>}
		</div>

	)
}

export default Account;