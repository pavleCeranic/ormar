import { useEffect, useState } from "react";
import { createArticle } from "./Article";
import { useNavigate } from "react-router-dom";

const PublishNewArticle = () => {

	const [articleInfo, setArticleInfo] = useState({});
	const navigate = useNavigate();

	const handleInputChange = (e) => {

		let name = e.target.name;
		let value = e.target.value;

		setArticleInfo(prevState => ({
			...prevState,
			[name]: value
		}));

	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const requestCreateArticle = async () => {
			try {
				const data = await createArticle(articleInfo);
				navigate('');
			} catch (error) {
				console.error('Error creating an article', error);
			}
		};

		requestCreateArticle();

	}

	useEffect(() => {

	}, []);

	// brand color description materials name price
	return (
		<form className='flex flex-col h-max self-center m-20' onSubmit={handleSubmit} onChange={handleInputChange}>
			<input name='name' type='text' id='' placeholder='Article Title' className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' />
			<textarea name='description' placeholder='Opis' className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' />
			<input name='price' type='number' min='0' max='1000' id='' placeholder='Cijena' className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' />
			<select name='sex' className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' id=''>
				<option value="option1">Odaberi Pol</option>
				<option value="option2">Muskarci</option>
				<option value="option3">Zene</option>
				<option value="option4">Unisex</option>
			</select>
			<select name='city' className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' id=''>
				<option value="option1">Odaberi Grad</option>
				<option value="option2">Option 2</option>
				<option value="option3">Option 3</option>
				<option value="option4">Option 4</option>
			</select>
			<select name='material' className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' id=''>
				<option value="option1">Odaberi Materijal</option>
				<option value="option2">Option 2</option>
				<option value="option3">Option 3</option>
				<option value="option4">Option 4</option>
			</select>
			<select name='brend' className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' id=''>
				<option value="option1">Odaberi Brend</option>
				<option value="option2">Option 2</option>
				<option value="option3">Option 3</option>
				<option value="option4">Option 4</option>
			</select>
			<select name='color' className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' id=''>
				<option value="option1">Odaberi Boju</option>
				<option value="option2">Option 2</option>
				<option value="option3">Option 3</option>
				<option value="option4">Option 4</option>
			</select>
			<select name='size' className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' id=''>
				<option value="option1">Odaberi Velicinu</option>
				<option value="option2">Option 2</option>
				<option value="option3">Option 3</option>
				<option value="option4">Option 4</option>
			</select>
			<select name='category' className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' id=''>
				<option value="option1">Kategorija</option>
				<option value="option2">Odjeca</option>
				<option value="option3">Obuca</option>
				<option value="option4">Aksesoari</option>
				<option value="option4"></option>
			</select>
			<button type='submit' className='bg-black text m-2 p-2 w-[80vw] max-w-sm cursor-pointer text-white text-center hover:bg-buttonYellow transition-colors'>Objavi Artikl</button>
		</form>
	);

}

export default PublishNewArticle