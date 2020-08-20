import React from 'react';
import SideBar from './components/SideBar';
import EmptyState from './components/EmptyState';
// import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="web">
			<SideBar />
			<EmptyState />
		</div>
	);
}

export default App;
