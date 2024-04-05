import './Account.css';
import React, { useState } from 'react';

const Account = () => {

	const [activeTab, setActiveTab] = useState('login');



	return (
		<div className='h-[100vh] w-full bg-black flex justify-center items-center'>
			<div className='h-3/5 w-2/5'>
				<div className='flex flex-row text-center cursor-pointer  w-full h-1/6 justify-around'>
					<div className='bg-myColorGrey content-center w-full h-full hover:opacity-95' onClick={() => { setActiveTab('login') }} >Login</div>
					<div className='{{activeTab ? bg-myColorBrown : bg-myColorGrey }} content-center w-full h-full hover:opacity-95' donClick={() => { setActiveTab('register') }} >Registration</div>
				</div>
				<div className='bg-myColorBrown w-full h-5/6 '>
					{activeTab === 'login' ? (
						<form className='flex flex-col justify-center items-center'>
							<input type='text' id='credentials' placeholder='Email or Username' className=' m-2 p-2 w-4/5' />
							<input type='text' id='password' placeholder='Password' className=' m-2 p-2 w-4/5' />
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


{/* <div className='flex flex-col bg-gray-light shadow-xl h-96 w-full md:w-1/2 mx-auto mt-4'>
				<div className='flex flex-row text-center cursor-pointer'>
					<div className=' m-2 self-center'>Login</div>
					<div className=' m-2 self-center'>Registration</div>
				</div>
				<div className='bg-myColorBrown h-full'>
					<form className='flex flex-col items-center justify-center'>
						<input type='text' id='credentials' placeholder='Email or Username' className=' m-2 p-2' />
						<input type='text' id='password' placeholder='Password' className=' m-2 p-2' />
					</form>
				</div>
			</div> */}