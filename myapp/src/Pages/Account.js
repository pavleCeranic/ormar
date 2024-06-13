import './Account.css';
import ArticleGroupContainer from '../Components/ArticleGroupContainer.js'
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

const Account = (props) => {

	const userId = props.reviewerId
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

		// axios.get('getUser&' + {userId})
		// 	.then(response => {
		// 	handle data
		// 	})
		// 	.catch(error => {

		// 	});

		handleTabChange(firstDivRef, secondDivRef)
	}, [])

	return (
		<div className='flex flex-col content-center mt-24 items-center'>
			<div className='flex flex-row h-56 w-3/5 justify-around items-center'>
				<UserIcon size='account' />
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
						<ArticleGroupContainer title='' />
						: <Reviews />
					}
				</div>

			</div>
		</div>
	)
}

const Reviews = () => {

	const navigate = useNavigate();
	const reviews = [
		{ reviewer: 'Pero', reviewerId: '468318', review: 'Super kupac', stars: '4', date: 'Decembar 2024' },
		{ reviewer: 'Mico', reviewerId: '464318', review: 'nisam zadovoljan komunikacijom', stars: '2', date: 'Decembar 1984' },
		{ reviewer: 'Jovo', reviewerId: '466318', review: 'sve pet', stars: '5', date: 'Januar 2024' },
	]

	return (
		<div className='flex flex-col h-96'>
			{reviews.length > 0
				? reviews.map((item, index) => {
					return (
						<div key={index} className='flex flex-col w-full  '>
							<div className='flex flex-row w-full justify-between items-center'>
								<UserIcon size='review' />
								<div className='flex-1'>
									<div className=' cursor-pointer' onClick={() => navigate('/account', { state: { id: item.reviewerId } })}>{item.reviewer}</div>
									<div>{item.stars}</div>
								</div>
								<div className='m-2'>{item.date}</div>

							</div>
							<div className='w-full h-7 m-2'>{item.review}</div>
							<div className='flex flex-col self-center border-b w-11/12'></div>
						</div>
					)
				})
				: <div className='flex justify-center'>Trenutno nema ocjena</div>}
		</div>

	)
}

const UserIcon = (props) => {

	const sizeReg = {
		account: { margin: 6, iconSize: 44, headSize: 12, shoulderW: 28, shoulderH: 16 },
		review: { margin: 2, iconSize: 10, headSize: 3, shoulderW: 7, shoulderH: 3 }
	}

	return (
		<div className={`flex m-${sizeReg[props.size].margin}`}>
			<div className={`flex flex-col w-${sizeReg[props.size].iconSize} h-${sizeReg[props.size].iconSize} rounded-full bg-zinc-400 items-center justify-end overflow-hidden`} >
				<div className={`w-${sizeReg[props.size].headSize} h-${sizeReg[props.size].headSize} rounded-full bg-zinc-600 mb-2`}></div>
				<div className={`w-${sizeReg[props.size].shoulderW} h-${sizeReg[props.size].shoulderH} rounded-3xl bg-zinc-600`}></div>
			</div>
		</div>
	)
}

export default Account;


/*

*/