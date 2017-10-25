// modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import books from './books.js';

// components
import Toolbar from './components/Toolbar.jsx';
import Sidenav from './components/Sidenav.jsx';

// pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Books from './pages/Books.jsx';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="app">
					<Toolbar />
					<main>
						<Route path="/books" component={Sidenav} />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/about" component={About} />
							<Route path="/books/:topic?" render={(props) => <Books books={books} {...props} />} />
						</Switch>
					</main>
				</div>
			</Router>
		);
	}
}

export default App;
