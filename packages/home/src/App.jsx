import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, NavLink} from 'react-router-dom'

import "./index.css";
const FallbackHeader = React.lazy(() => import("nav/build/Header"));
const Header = React.lazy(() => import("mf-nav/Header"));
const MyButton = React.lazy(() => import("mf-button/Button"));
const Feedback = React.lazy(() => import("mf-feedback/App"));


class HeaderWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return (
        <React.Suspense fallback={<div>Loading fallback header</div>}>
          <FallbackHeader />
        </React.Suspense>
      );
    }

    return (
      <React.Suspense fallback={<div>Header loading</div>}>
        <Header />
      </React.Suspense>
    );
  }
}

class ButtonWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch() {}

	render() {
		if (this.state.hasError) {
			return (
				<React.Suspense fallback={<div>Loading fallback button</div>}>
					<div>loading</div>
				</React.Suspense>
			);
		}

		return (
			<React.Suspense fallback={<div>Button loading</div>}>
				<MyButton/>
			</React.Suspense>
		);
	}
}


class FeedbackWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch() {}

	render() {
		if (this.state.hasError) {
			return (
				<React.Suspense fallback={<div>Loading fallback feedback</div>}>
					<div>loading</div>
				</React.Suspense>
			);
		}

		return (
			<React.Suspense fallback={<div>Feedback loading</div>}>
				<Feedback/>
			</React.Suspense>
		);
	}
}

const App = () => (
  <div>
	  <ul>
		  <li>
			  <NavLink exact activeClassName={'active'} to="/">
				  Home
			  </NavLink>
		  </li>
		  <li>
			  <NavLink exact activeClassName={'active'} to="/feedback">
				  Show feedback
			  </NavLink>
		  </li>
		  <li>
			  <NavLink exact activeClassName={'active'} to="/bla">
				  Bla
			  </NavLink>
		  </li>
		  <li>
			  <NavLink exact activeClassName={'active'} to="/button">
				  Button
			  </NavLink>
		  </li>
		  <li>
			  <NavLink exact activeClassName={'active'} to="/feedback/add">
				  Add feedback
			  </NavLink>
		  </li>
	  </ul>

	  <Route path="/button">
		  <ButtonWrapper/>
	  </Route>
	  <Route path="/feedback">
		  <FeedbackWrapper/>
	  </Route>
	  <Route path="/bla">
		  <HeaderWrapper />
	  </Route>
	  <Route path="/">

	  </Route>
  </div>
);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("app"));
