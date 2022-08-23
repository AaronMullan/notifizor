import Card from './Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function CustomCardGroup(cardData, setDismissed) {
	// console.log(cardData.data);
	// cardData.data.forEach((e) => console.log(e));
	return (
		<>
			<CardGroup style={{ marginTop: '20px' }}>
				{cardData.data.map((item, index) => {
					return (
						<Card
							image={item.multimedia[2].url}
							title={item.title}
							text={item.abstract}
							url={item.url}
							key={index}
							setDismissed={setDismissed}
						/>
					);
				})}
			</CardGroup>
		</>
	);
}
