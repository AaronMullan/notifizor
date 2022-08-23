export default function Header() {
	return (
		<div style={headerStyles}>
			<h1>Latest Climate News</h1>
		</div>
	);
}

const headerStyles = {
	marginTop: '30px',
	textAlign: 'center',
	backgroundColor: '#fff',
	paddingBottom: '30px',
};
