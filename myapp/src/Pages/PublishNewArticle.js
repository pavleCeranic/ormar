import { useEffect, useState } from "react";
import { createArticle } from "./Article";
import { useNavigate } from "react-router-dom";

const PublishNewArticle = () => {

	const [articleInfo, setArticleInfo] = useState({});
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
				<option value=''>Odaberi Pol</option>
				<option value='MAN'>Muskarci</option>
				<option value='WOMAN'>Zene</option>
				<option value='UNISEX'>Unisex</option>
			</select>
			<select name='city' className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' id=''>
				{cities.map((city, index)=>{
					return <option key={index} className={city==='Grad' ? 'opacity-20' : ''} value={city}>{city.replace('_', ' ')}</option>
				})}
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
				<option value=''>Kategorija</option>
				<option value='CLOTHING'>Odjeca</option>
				<option value='SHOES'>Obuca</option>
				<option value='ACCESSORIES'>Aksesoari</option>
			</select>
			<select name='condition' className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' id=''>
				<option value=''>Odaberi Stanje</option>
				<option value='NEW'>Novo</option>
				<option value='USED'>Koristeno</option>
				<option value='DAMAGED'>Osteceno</option>
			</select>
			<input name='images' type='file' accept='image/png, image/jpeg' className='m-2'></input>
			<button type='submit' className='bg-black text m-2 p-2 w-[80vw] max-w-sm cursor-pointer text-white text-center hover:bg-buttonYellow transition-colors'>Objavi Artikl</button>
		</form>
	);

}

export default PublishNewArticle