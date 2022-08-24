import { useEffect, useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Card from './Card';
import getData from './getData';

const CustomCardGroup = () => {
	const [cardData, setCardData] = useState(
		JSON.parse(localStorage.getItem('userData')) || []
	);
	const [displayData, setDisplayData] = useState(cardData);
	const [dismissed, setDismissed] = useState(
		JSON.parse(localStorage.getItem('dismissed')) || []
	);
	useEffect(() => {
		getData().then((data) => setCardData(data));
		console.log('fresh data');
	}, []);

	const handleDismissal = (url) => {
		setDismissed([...dismissed, url]);
	};

	const handleReset = () => {
		setDismissed([]);
		setDisplayData(cardData);
	};

	useEffect(() => {
		localStorage.setItem('dismissed', JSON.stringify([...dismissed]));
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
			<div
				style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}
			>
				<Button variant="danger" onClick={handleReset}>
					Reset Dismissals
				</Button>
			</div>
		</>
	);
};

export default CustomCardGroup;
