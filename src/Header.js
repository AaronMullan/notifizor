export default function Header() {
	return (
		<div style={headerStyles}>
			<h1 style={{ fontSize: '48px' }}>Latest Climate News</h1>
			<h6>From the New York Times</h6>
		</div>
	);
}

const headerStyles = {
	marginTop: '30px',
	textAlign: 'center',
	backgroundColor: '#fff',
	paddingBottom: '30px',
};
