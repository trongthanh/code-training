import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return [
			<header key="header">
				<h1>Hello ES Module</h1>
			</header>,
			<h3 key="subtitle">
				Adjacent subtitle
			</h3>,
			<section key="desc">
				Adjacent description
			</section>
		];
	}
}
