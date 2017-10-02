import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Image from './components/Image';

class App extends Component {
	state = {
		image: 'https://static.pexels.com/photos/442007/pexels-photo-442007.jpeg',
		selectedFilter: '',
		settings: {
			contrast: 100,
			hue: 0,
			brightness: 100,
			saturate: 100,
			sepia: 0
		}
	}
	render() {

		const {image, selectedFilter, settings} = this.state;

		return (
			<div className="app">
				<Header title="Фото фильтры"></Header>

				<main className="main">
					<Image src={image}/>
				</main>
			</div>
		);
	}
}

export default App;
