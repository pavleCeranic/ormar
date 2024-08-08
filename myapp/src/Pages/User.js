// User page and functionality

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const login = async (user) => {

	const response = await axios.post(process.env.REACT_APP_API_USER_URL + 'login',
		new URLSearchParams({
			username: user.username,
			password: user.password
		}), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		withCredentials: true
	}
	);

	return response;

}

export const logout = async () => {
	try {
		const response = await axios.get(process.env.REACT_APP_API_BASE_URL + 'logout', {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			withCredentials: true
		});
		return response;
	} catch (e) {
		console.error('Error on logout: ', e);
		throw e;
	}
}

export const getUserById = async (userId) => {

	try {
		const response = await axios.get(process.env.REACT_APP_API_USER_URL + userId);
		return response;
	} catch (e) {
		console.error('Error getting user with id: ' + userId + ',  ' + e);
		throw e;
	}

}

export const createUser = async (user) => {

	try {
		const response = await axios.post(process.env.REACT_APP_API_USER_URL + 'register', user);
		return response;
	} catch (e) {
		console.error('Error creating new User. ', e);
		throw e;
	}

}

export const updateUser = async (user) => {

	try {
		const response = await axios.post(process.env.REACT_APP_API_USER_URL + 'update', {
			body: user,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			withCredentials: true
		});
		return response;
	} catch (e) {
		console.log('Error updating user: ', e);
		throw e;
	}

}

export const deleteUser = async (userId) => {

	try {
		const response = await axios.delete(process.env.REACT_APP_API_USER_URL + userId);
		return response
	} catch (e) {
		console.log('Error deleting user: ', e);
		throw e;
	}

}

const User = () => {

	const location = useLocation();
	const aCotnext = useContext(AuthContext);
	const navigate = useNavigate();

	const cities = [
		'Grad',
		'SARAJEVO',
		'BANJA_LUKA',
		'TUZLA',
		'ZENICA',
		'MOSTAR',
		'ISTOCNO_SARAJEVO',
		'SREBRENIK',
		'BIHAC',
		'BRCKO',
		'BIJELJINA',
		'PRIJEDOR',
		'TREBINJE',
		'TRAVNIK',
		'KISELJAK',
		'DOBOJ',
		'CAZIN',
		'BUGOJNO',
		'VELIKA_KLADUSA',
		'VISOKO',
		'GORAZDE',
		'KONJIC',
		'GRACANICA',
		'GRADACAC',
		'BOSANSKA_KRUPA',
		'MRKONJIC_GRAD',
		'FOCA',
		'ZAVIDOVICI',
		'ZIVINICE',
		'SANSKI_MOST',
		'GRADISKA',
		'BILECA',
		'LUKAVAC',
		'KAKANJ',
		'LIVNO',
		'ODZAK',
		'SIPOVO',
		'PROZOR',
		'NOVI_TRAVNIK',
		'ZVORNIK'
	]

	const [userInfo, setUserInfo] = useState({
		username: '',
		email: '',
		password: '',
		city: 'Grad'
	});

	const handleInputChange = (e) => {

		let name = e.target.name;
		let value = e.target.value;

		setUserInfo(prevState => ({
			...prevState,
			[name]: value
		}));

	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const requestUpdateUser = async () => {
			try {
				const response = await updateUser(userInfo);
				alert("Profile updated succesfully.")
			} catch (error) {
				console.error('Error updating user', error);
			}
		};
		requestUpdateUser();
	}

	const fillFields = () => {
		if (location.state?.user) {
			setUserInfo(location.state.user);
		}
	}

	useEffect(() => {

		if (!aCotnext.loggedUser) {
			navigate('/register')
		}

		fillFields();
	}, []);

	return (
		<form className='flex flex-col h-max self-center m-20' onSubmit={handleSubmit} >
			<input name='username' type='text' id='' value={userInfo?.username} placeholder='Username' className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' onChange={handleInputChange} />
			<input name='email' type='text' id='' value={userInfo?.email || ''} placeholder='E-mail' className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' onChange={handleInputChange} />
			<input name='password' type='text' id='' value={userInfo?.password} placeholder='Password' className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' onChange={handleInputChange} />
			<select name='sex' value={userInfo?.sex} className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' id='' onChange={handleInputChange}>
				<option value='sex'>Odaberi Pol</option>
				<option value='MAN'>Muskarci</option>
				<option value='WOMAN'>Zene</option>
				<option value='UNISEX'>Unisex</option>
			</select>
			<select name='city' value={userInfo.city || ''} className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' id='' onChange={handleInputChange}>
				{cities.map((city, index) => {
					return <option key={index} className={city === 'Grad' ? 'opacity-20' : ''} value={city}>{city.replace('_', ' ')}</option>
				})}
			</select>
			<input name='images' type='file' accept='image/png, image/jpeg' className='m-2'></input>
			<button type='submit' className='bg-black text m-2 p-2 w-[80vw] max-w-sm cursor-pointer text-white text-center hover:bg-buttonYellow transition-colors' >{'Sacuvaj promjene'}</button>
		</form>
	);
}

export default User;