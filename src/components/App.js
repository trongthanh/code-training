import React, { Component } from 'react';

import Header from './Header.js';
import ListItems from './ListItems.js';
import Util, { num, str} from '../common/utils.js';

import './app.css';

class App extends Component {

	render() {
		return (
			<div className="app">
				<Header />
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus magnam inventore quo minima rem natus dignissimos tempore, aliquam voluptatum sint aspernatur pariatur repellat nulla beatae, nam animi nostrum ad praesentium!</p>
				<p>{num} {str}</p>
				<p>3 + 4 = {Util.add(3, 4)}</p>
				<ListItems />
			</div>
		);
	}
}

export default App;
