const key = process.env.REACT_APP_API_KEY;

async function getData() {
	let response = await fetch(
		`https://api.nytimes.com/svc/news/v3/content/nyt/climate.json?limit=10&api-key=${key}`
	);
	let data = await response.json();
	const results = data.results;
	localStorage.setItem('userData', JSON.stringify(results));
	return results;
}

export default getData;
