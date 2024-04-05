import './Account.css';
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';


const Account = () => {

	const myDivRef = useRef(null);
	const [activeTab, setActiveTab] = useState('login');

	const handleTabClick = () => {

		setActiveTab('login');

		// Accessing the div by its ID
		const myDiv = myDivRef.current;
		if (myDiv) {
		  // Manipulate the div here
		  myDiv.style.backgroundColor = 'red';
		}
	  };

	  // nastavi sa setanjem css na tabovima prilikom aktiviranja
	return (
		<div className='h-[100vh] w-full flex justify-center items-center transition-colors'>
			<div className='h-3/5 w-2/5 shadow-2xl'>
				<div className='flex flex-row text-center cursor-pointer  w-full h-1/6 justify-around font-semibold text-xl'>
					<div id='myDiv' ref={myDivRef} className='content-center bg-inactiveGrey w-full h-full hover:bg-gray-100' onClick={handleTabClick} >Login</div>
					<div id='tab1' className='content-center bg-inactiveGrey w-full h-full hover:opacity-95' onClick={() => { setActiveTab('register') }} >Create Account</div>
				</div>
				<div className='w-full h-5/6 '>
					{activeTab === 'login' ? (
						<form className='flex flex-col justify-center items-center'>
							<input type='text' id='credentials' placeholder='Email or Username' className=' m-2 p-2 w-4/5' />
							<input type='text' id='password' placeholder='Password' className=' m-2 p-2 w-4/5' />
							<Link to="/" className=''>Forgot Your Password? </Link>
							<div className='bg-black text m-2 p-2 w-4/5 cursor-pointer text-white text-center hover:bg-buttonYellow '>SIGN IN</div>
						</form>
					) : (
						<form className='flex flex-col justify-center items-center'>
							<input type='text' id='email' placeholder='Email' className=' m-2 p-2' />
							<input type='text' id='username' placeholder='Username' className=' m-2 p-2' />
							<input type='text' id='password' placeholder='Password' className=' m-2 p-2' />
						</form>
					)}

				</div>
			</div>
		</div>



	);
};

export default Account;