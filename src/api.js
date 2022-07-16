

export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8b194f9185mshc61c4bb384b91d6p136bf9jsnd27585001d54',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo', geoApiOptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));