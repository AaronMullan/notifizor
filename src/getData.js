const key = process.env.REACT_APP_API_KEY;

async function getData(currentData) {
	let response = await fetch(
		`https://api.nytimes.com/svc/news/v3/content/nyt/climate.json?limit=10&api-key=${key}`
	);
	let data = await response.json();
	const results = data.results;
	const allData = [...currentData, ...results];
	const uniqueData = allData.reduce((acc, cur) => {
		const isDuplicate = acc.find((element) => element.url === cur.url);
		if (!isDuplicate) {
			return acc.concat([cur]);
		} else {
			return acc;
		}
	}, []);

	localStorage.setItem('userData', JSON.stringify(uniqueData));
	return uniqueData;
}

export default getData;
