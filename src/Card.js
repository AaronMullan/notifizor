import Card from 'react-bootstrap/Card';

export default function MyCard({ image, headline, subheadline, url }) {
	return (
		<Card style={cardStyles}>
			<Card.Img
				variant="top"
				src="https://static01.nyt.com/images/2022/08/22/climate/00cli-pollution1/00cli-pollution1-mediumThreeByTwo440.jpg"
			/>
			<Card.Body style={{ padding: '10px' }}>
				<Card.Title style={{ fontWeight: 700 }}>
					Democrats Designed the Climate Law to Be a Game Changer. Here’s How.
				</Card.Title>
				<Card.Text>
					'In a first, the measure legally defines greenhouse gases as
					pollution. That’ll make new regulations much tougher to challenge in
					court.'
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

const cardStyles = {
	margin: '10px 40px',
	padding: '5px',
	background: '#fff',
	border: '1px solid gray',
	borderRadius: '2px',
	display: 'flex',
};
