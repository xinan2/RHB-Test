import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './css/home.css';

const Home = () => {
	const orderList = useSelector(state => state)
	console.log(orderList)
	return (
		<div className="container">
			<p>Home</p>
			<div className="item">
				<Link to="/about">About</Link>
			</div>
		</div>
	);
}

export default Home;
