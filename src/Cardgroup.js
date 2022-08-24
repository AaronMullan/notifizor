import { useEffect, useState } from 'react';
import Card from './Card';
import CardGroup from 'react-bootstrap/CardGroup';
import getData from './getData';
import { dummydata } from './dummydata';
const userData = localStorage.getItem('userData');

const CustomCardGroup = () => {
	const [cardData, setCardData] = useState(dummydata);
	const [displayData, setDisplayData] = useState(cardData);
	const [dismissed, setDismissed] = useState([]);
	// const testExclude = [
	// 	'https://www.nytimes.com/2022/08/23/climate/climate-greenwashing.html',
	// ];

	const handleDismissal = (url) => {
		//error handling here
		!dismissed?.includes(url) && setDismissed([...dismissed, url]);
		localStorage.setItem('dismissed', JSON.stringify([...dismissed]));
		const test = JSON.parse(localStorage.getItem('dismissed'));
		console.log('dismissed', dismissed, '1test', test);
	};

	useEffect(() => localStorage.setItem('userData', dummydata), []);

	useEffect(() => {
		const someDissed = localStorage.getItem('dismissed');
		setDisplayData((displayData) =>
			displayData.filter((item) => !someDissed.includes(item.url))
		);
		console.log('some', someDissed);
	}, [dismissed]);

	// useEffect(() => {
	// 	getData().then((data) => setCardData(data));
	// }, []);
	// localStorage.setItem('dismissed', [
	// 	'https://www.nytimes.com/2022/08/12/climate/biden-climate-bill-young-activists.html',
	// ]);
	// const huh = localStorage.getItem('dismissed');
	return (
		<>
			<CardGroup style={{ marginTop: '20px' }}>
				{displayData.map((item, index) => {
					return (
						<Card
							image={item.multimedia[2].url}
							title={item.title}
							text={item.abstract}
							date={item.published_date}
							url={item.url}
							key={index}
							handleDismissal={handleDismissal}
							// dismissed={dismissed}
							// setDismissed={setDismissed}
						/>
					);
				})}
			</CardGroup>
		</>
	);
};

export default CustomCardGroup;
