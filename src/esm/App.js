import Header from './Header.js';
import { num, str, default as Util } from '../common/utils.js';


class App {
	render() {
		return `
			${Header.render()}
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus magnam inventore quo minima rem natus dignissimos tempore, aliquam voluptatum sint aspernatur pariatur repellat nulla beatae, nam animi nostrum ad praesentium!</p>
			<p>${num} ${str}</p>
			<p>3 + 4 = ${Util.add(3, 4)}</p>
		`;
	}
}

export default new App();
