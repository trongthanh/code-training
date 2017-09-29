import React, { Component } from 'react';

// REACT 16
// class ListItemsWrong extends Component {
// 	render() {
// 		return (
// 			<li>Item 1</li>
// 			<li>Item 2</li>
// 			<li>Item 3</li>
// 			<li>Item 4</li>
// 		);
// 	}
// }

class ListItems extends Component {
	render() {
		return [
			<li key="1">Item 1</li>,
			<li key="2">Item 2</li>,
			<li key="3">Item 3</li>,
			<li key="4">Item 4</li>,
		];
	}
}

export default ListItems;
