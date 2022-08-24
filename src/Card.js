import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap';

export default function MyCard({
	image,
	title,
	text,
	date,
	url,
	handleDismissal,
}) {
	const handleClick = () => {
		handleDismissal(url);
	};
	const localDate = new Date(date).toLocaleDateString();

	return (
		<Card style={cardStyles}>
			<Card.Img variant="top" src={image} />
			<Card.Body style={{ padding: '10px' }}>
				<Card.Title style={{ fontWeight: 700 }}>{title}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">
					Published {localDate}
				</Card.Subtitle>
				<Card.Text>{text}</Card.Text>
			</Card.Body>
			<ButtonGroup>
				<Button href={url} target="_blank">
					View
				</Button>
				<Button variant="secondary" onClick={handleClick}>
					Dismiss
				</Button>
			</ButtonGroup>
		</Card>
	);
}

const cardStyles = {
	minWidth: '325px',
	margin: '10px 40px',
	padding: '5px',
	background: '#fff',
	border: '1px solid gray',
	borderRadius: '3px',
};
