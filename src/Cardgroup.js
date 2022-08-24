import { useEffect, useState } from 'react';
import Card from './Card';
import CardGroup from 'react-bootstrap/CardGroup';
import getData from './getData';
import { dummydata } from './dummydata';

const CustomCardGroup = () => {
	const [cardData, setCardData] = useState(dummydata);
	const [displayData, setDisplayData] = useState(cardData);
	const [dismissed, setDismissed] = useState(
		JSON.parse(localStorage.getItem('dismissed')) || []
	);
	// useEffect(() => {
	// 	getData().then((data) => setCardData(data));
	// }, []);

	const handleDismissal = (url) => {
		setDismissed([...dismissed, url]);
		localStorage.setItem('dismissed', JSON.stringify([...dismissed]));
	};

	useEffect(() => localStorage.setItem('userData', dummydata), []);

	useEffect(() => {
		setDisplayData((displayData) =>
			dismissed
				? displayData.filter((item) => !dismissed.includes(item.url))
				: displayData
		);
	}, [dismissed]);

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
						/>
					);
				})}
			</CardGroup>
		</>
	);
};

export default CustomCardGroup;
