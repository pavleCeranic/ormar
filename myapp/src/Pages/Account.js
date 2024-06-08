import './Account.css';

const Account = () => {

	return (
		<div className='flex flex-col content-center mt-24 items-center'>
			<div className='flex flex-row h-56 w-3/5 bg-buttonYellow justify-around items-center'>
				<div className='flex m-6'>
					<div className='flex flex-col w-44 h-44 rounded-full bg-zinc-400 items-center justify-end overflow-hidden' >
						<div className=' w-14 h-14 rounded-full bg-zinc-600 mb-2'></div>
						<div className=' w-32 h-20 rounded-3xl bg-zinc-600 '></div>
					</div>
				</div>
				<div className='flex flex-col flex-1'>
					<div className='text-3xl'>Svetozar Markovic</div>
					<br />
					<div> X Banjaluka</div>
					<div>Posljednji put vidjen u 13:44</div>
				</div>
				<div>actions</div>
			</div>
			<div className='flex flex-row h-80 w-3/5 bg-inactiveGrey'>container for displaying articles</div>
		</div>
	)
}

export default Account;