import React from 'react';
import ReactDOM from 'react-dom';

import { setConfig } from 'react-hot-loader'

setConfig({
    pureSFC: true
})


// Create a reusable render method that we can call more than once
const rootElement = document.getElementById('test-assignment'); 

// Create a reusable render method that we can call more than once
let render = () => {
	// Dynamically import our main App component, and render it
  	const MainApp = require('./MainApp').default;
	ReactDOM.render(
		<MainApp/>,
    	rootElement 
  	);
};

render();










