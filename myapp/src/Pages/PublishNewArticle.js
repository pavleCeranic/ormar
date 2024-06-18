import { useEffect, useState } from "react";
import { createArticle, updateArticle } from "./Article";
import { useLocation, useNavigate } from "react-router-dom";

const PublishNewArticle = () => {

	const [articleInfo, setArticleInfo] = useState({
		name: '',
		description: '',
		price: '0',
		sex: 'sex',
		city: 'Grad',
		material: 'material',
		brand: 'brand',
		color: 'Boja',
		size: 'size',
		category: 'category',
		condition: 'condition'
	});

	const navigate = useNavigate();
	const location = useLocation();

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
	const colors = [
		'Boja',
		'RED',
		'BLUE',
		'GREEN',
		'YELLOW',
		'ORANGE',
		'PURPLE',
		'BLACK',
		'WHITE',
		'GRAY',
		'PINK',
		'BROWN',
		'CYAN',
		'MAGENTA'
	];

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

		if (articleInfo.id) {
			const requestUpdateArticle = async () => {
				try {
					const response = await updateArticle(articleInfo);
					navigate('/article', { state: { label: response.data.name, price: response.data.price, id: response.data.id, article: response.data } });
				} catch (error) {
					console.error('Error creating an article', error);
				}
			};
			requestUpdateArticle();
		} else {
			const requestCreateArticle = async () => {
				try {
					const response = await createArticle(articleInfo);
					navigate('/article', { state: { label: response.data.name, price: response.data.price, id: response.data.id, article: response.data } });
				} catch (error) {
					console.error('Error creating an article', error);
				}
			};
			requestCreateArticle();
		}

	}

	const fillFields = () => {
		if (location.state?.article) {
			setArticleInfo(location.state.article);
		}
	}

	useEffect(() => {
		fillFields();
	}, []);

	// brand materials category
	return (
		<form className='flex flex-col h-max self-center m-20' onSubmit={handleSubmit} >
			<input name='name' type='text' id='' value={articleInfo?.name} placeholder='Article Title' className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' onChange={handleInputChange} />
			<textarea name='description' placeholder='Opis' value={articleInfo?.description} className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' onChange={handleInputChange} />
			<input name='price' type='number' min='0' max='1000' id='' value={articleInfo?.price} placeholder='Cijena' className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' onChange={handleInputChange} />
			<select name='sex' value={articleInfo?.sex} className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' id='' onChange={handleInputChange}>
				<option value='sex'>Odaberi Pol</option>
				<option value='MAN'>Muskarci</option>
				<option value='WOMAN'>Zene</option>
				<option value='UNISEX'>Unisex</option>
			</select>
			<select name='city' value={articleInfo.city} className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' id='' onChange={handleInputChange}>
				{cities.map((city, index) => {
					return <option key={index} className={city === 'Grad' ? 'opacity-20' : ''} value={city}>{city.replace('_', ' ')}</option>
				})}
			</select>
			<select name='material' value={articleInfo.material} className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' id='' onChange={handleInputChange}>
				<option value="material">Odaberi Materijal</option>
				<option value="option2">Option 2</option>
				<option value="option3">Option 3</option>
				<option value="option4">Option 4</option>
			</select>
			<select name='brand' value={articleInfo.brand} className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' id='' onChange={handleInputChange}>
				<option value="brand">Odaberi Brend</option>
				<option value="option2">Option 2</option>
				<option value="option3">Option 3</option>
				<option value="option4">Option 4</option>
			</select>
			<select name='color' value={articleInfo.color} className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' id='' onChange={handleInputChange}>
				{colors.map((color, index) => {
					return <option key={index} value={color}>{color}</option>
				})}
			</select>
			<select name='size' value={articleInfo.size} className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' id='' onChange={handleInputChange}>
				<option value="size">Odaberi Velicinu</option>
				<option value="option2">Option 2</option>
				<option value="option3">Option 3</option>
				<option value="option4">Option 4</option>
			</select>
			<select name='category' value={articleInfo.category} className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' id='' onChange={handleInputChange}>
				<option value='category'>Kategorija</option>
				<option value='CLOTHING'>Odjeca</option>
				<option value='SHOES'>Obuca</option>
				<option value='ACCESSORIES'>Aksesoari</option>
			</select>
			<select name='condition' value={articleInfo.condition} className='outline-0 shadow-2xl m-2 p-2 w-[80vw] max-w-sm focus:shadow-lg focus:scale-105 transition-all duration-200 ease-in-out' id='' onChange={handleInputChange}>
				<option value='condition'>Odaberi Stanje</option>
				<option value='NEW'>Novo</option>
				<option value='USED'>Koristeno</option>
				<option value='DAMAGED'>Osteceno</option>
			</select>
			<input name='images' type='file' accept='image/png, image/jpeg' className='m-2'></input>
			<button type='submit' className='bg-black text m-2 p-2 w-[80vw] max-w-sm cursor-pointer text-white text-center hover:bg-buttonYellow transition-colors' >{articleInfo.id ? 'Sacuvaj promjene' : 'Objavi Artikl'}</button>
		</form>
	);

}

export default PublishNewArticle