function Footer() {

	return (
		<div className='flex flex-col bg-greys text-white'>
			<div className='grid grid-cols-3 footer   h-96  justify-items-center items-center'>
				<div className='text-2xl'>
					LOGO
				</div>
				<div className='flex flex-col items-center'>
					<h1 className='text-2xl'>More From LOGO</h1>
					<ul className='text-slate-500 font-thin'>
						<li className='cursor-pointer hover:'>About logo</li>
						<li className='cursor-pointer'>Reach Us</li>
					</ul>
				</div>
				<div className='flex flex-col items-center'>
					<h1 className='text-2xl'>Find Us</h1>
					<div className='flex flex-row text-base items-center text-slate-500 font-thin'>
						<h1 className='m-2' >X</h1>
						<div className='m-2 '>Kralja Petra I Karađorđevića 85a <br />78000 Banjaluka</div>
					</div>
				</div>
			</div>
			<div className='flex justify-center m-2 text-base text-slate-500 font-thin'>
				Logo 2024. All rights reserved.
			</div>
		</div>
	);
}

export default Footer;