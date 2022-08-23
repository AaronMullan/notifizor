import './App.css';
import Header from './Header';
import Card from './Card';
import CardGroup from 'react-bootstrap/CardGroup';

function App() {
	localStorage.setItem('test', 'mytest');
	const huh = localStorage.getItem('test');
	const key = process.env.REACT_APP_API_KEY;
	console.log('wtf', huh, key);
	return (
		<div className="App">
			<Header></Header>
			<CardGroup>
				<Card />
				<Card />
			</CardGroup>
		</div>
	);
}

export default App;
