import './Account.css';
import ArticleGroupContainer from '../Components/ArticleGroupContainer.js'
import { useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';
import { logout } from './User.js';

const Account = () => {

	const firstDivRef = useRef(null);
	const secondDivRef = useRef(null);
	const [activeTab, setActiveTab] = useState('ormar');
	const [user, setUser] = useState({});
	const navigate = useNavigate();
	const location = useLocation();
	const aCotnext = useContext(AuthContext);

	const handleTabChange = (newActiveTab, oldActiveTab) => {

		setActiveTab(newActiveTab === firstDivRef ? 'ormar' : '');

		if (newActiveTab && oldActiveTab) {
			newActiveTab.current.style.backgroundColor = 'white';
			oldActiveTab.current.style.backgroundColor = '#d3d3d3';
		}
	}

	const handleLogout = () => {
		const tryLogout = async () => {
			const response = await logout();

			if (response.status === 200) {
				setUser({});
				aCotnext.topLogout();
				navigate('/');
			}
		}

		tryLogout();
	}

	useEffect(() => {

		if (location.state?.ownerUsername && aCotnext.loggedUser && location.state?.ownerUsername === aCotnext.loggedUser.username) {
			setUser(aCotnext.loggedUser);
		} else if (location.state?.ownerUsername && aCotnext.loggedUser && location.state?.ownerUsername !== aCotnext.loggedUser.username) {
			setUser({
				username: location.state?.ownerUsername,
				id: location.state?.userId
			});
		} else if (aCotnext.loggedUser) {
			setUser(aCotnext.loggedUser);
		} else if (location.state?.ownerUsername) {
			setUser({
				username: location.state?.ownerUsername,
				id: location.state?.userId
			});
		}

		handleTabChange(firstDivRef, secondDivRef)

	}, []);

	return (
		<div className='flex flex-col w-full content-center mt-16 items-center'>
			<div className='flex flex-wrap w-11/12 lg:h-56 lg:w-3/5 justify-around items-center'>
				<UserIconLarge />
				<div className='flex flex-col flex-1 sm:w-[40vw]'>
					<div className='text-2xl lg:text-3xl '>{user?.username}</div>
					<div className='text-xs'> {user?.city || ''}</div>
				</div>
				{aCotnext.loggedUser?.id === user.id ? <div className='flex flex-col h-28 w-full sm:w-44 md:w-44 lg:w-44 shadow-lg rounded-md text-center self-center'>
					<button onClick={() => { navigate('/publishandeditarticle') }} className='hover:bg-black hover:bg-opacity-10 w-full h-full'>Objavi Artikl</button>
					<button onClick={() => { navigate('/user', { state: { user: aCotnext.loggedUser } }) }} className='hover:bg-black hover:bg-opacity-10 w-full h-full'>Uredi Detalje</button>
					<button onClick={handleLogout} className='hover:bg-black hover:bg-opacity-10 w-full h-full'>Odjavi se</button>
				</div>
					: ''}

			</div>
			<div className='flex flex-col h-full w-11/12 lg:w-3/5 m-2 mb-4 shadow-2xl min-w-[250px]'>
				<div className='flex flex-row sm:justify-around'>
					<div className=' flex justify-center items-center h-9 cursor-pointer w-full' ref={firstDivRef} onClick={() => { handleTabChange(firstDivRef, secondDivRef) }}>Ormar</div>
					<div className=' flex justify-center items-center h-9 cursor-pointer w-full' ref={secondDivRef} onClick={() => { handleTabChange(secondDivRef, firstDivRef) }}>Ocjene</div>
				</div>
				<div className='overflow-hidden h-full mt-3'>
					{activeTab === 'ormar' ?
						user.username && <ArticleGroupContainer title='' ownerUsername={user.username} />
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
								<UserIconSmall size='review' />
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

const UserIconSmall = (props) => {

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

const UserIconLarge = () => {

	return (
		<div className={`flex m-6 ml-0`}>
			<div className={`flex flex-col w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-zinc-400 items-center justify-end overflow-hidden`} >
				<div className={`w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-zinc-600 mb-1 sm:mb-2`}></div>
				<div className={`w-12 h-6 sm:w-20 sm:h-9 rounded-3xl bg-zinc-600`}></div>
			</div>
		</div>
	)
}

export default Account;