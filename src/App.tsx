import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ContextStore } from './store';
import Principal from './pages/Principal';

export class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' render={() => <ContextStore comp={<Principal />} />} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
