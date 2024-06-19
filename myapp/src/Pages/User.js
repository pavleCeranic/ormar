// User page and functionality

import axios from "axios";

export const getUserById = async (userId) => {

	try {
		const response = await axios.get(process.env.REACT_APP_API_ARTICLE_URL + userId);
		return response;
	} catch (e) {
		console.error('Error getting user with id: ' + userId + ',  ' + e);
		throw e;
	}

}

export const createUser = async (user) => {

	try {
		const response = await axios.post(process.env.REACT_APP_API_ARTICLE_URL, user);
		return response;
	} catch (e) {
		console.error('Error creating new User. ', e);
		throw e;
	}

}

export const updateUser = async (user) => {

	try {
		const response = await axios.post(process.env.REACT_APP_API_ARTICLE_URL, user);
		return response;
	} catch (e) {
		console.log('Error updating user: ', e);
		throw e;
	}

}

export const deleteUser = async (userId) => {

	try {
		const response = await axios.delete(process.env.REACT_APP_API_ARTICLE_URL + userId);
		return response
	} catch (e) {
		console.log('Error deleting user: ', e);
		throw e;
	}

}

const User = () => {

	return (
		<div></div>
	);
}

export default User;