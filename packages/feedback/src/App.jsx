import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from 'react-router-dom'

import "./index.css";

const App = () => (
  <div>
	  <Route path="/feedback/add">
		  add feedback
	  </Route>
	  <Route path="/feedback">

	  </Route>
  </div>
);

export default App
