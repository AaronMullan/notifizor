import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import CardGroup from './Cardgroup';
import getData from './getData';
import { dummydata } from './dummydata';

function App() {
	const [myData, setMyData] = useState(dummydata);
	const [dismissed, setDismissed] = useState(localStorage.getItem('dismissed'));
	// useEffect(() => {
	// 	getData('aaronmullan').then((data) => setMyData(data));
	// }, []);
	localStorage.setItem('dismissed', [
		'https://www.nytimes.com/2022/08/12/climate/biden-climate-bill-young-activists.html',
	]);
	// const huh = localStorage.getItem('dismissed');

	console.log('wtf', dismissed);
	return (
		<div className="App">
			<Header />
			<CardGroup data={myData} setDismissed={setDismissed} />
		</div>
	);
}

export default App;
