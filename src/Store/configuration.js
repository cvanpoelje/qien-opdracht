/***
 * Create store
 */
import { routerMiddleware} from 'connected-react-router'
import { createBrowserHistory} from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // middleware

import reducers from './reducers';
import {	
} from './composers';

/***
 * Create Redux Router History object
 */
const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);

/***
 * Create Redux Store Moddlewares
 */
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/***
 * Format Init Store State
 */
let preloadedState;

preloadedState = {	
	
};

/***
 * Define Redux Environment Dev Tools
 */

const devTools = process.env.NODE_ENV === 'development' ? 
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() 
	: null

let _configureStore;

/***
 * Chrome Development
 */
if (window.navigator.userAgent.includes('Chrome') && process.env.NODE_ENV === 'development') {	
	
	_configureStore = () => { 

		const _store = createStore(
			reducers(history),
			preloadedState,
			compose(
				applyMiddleware(
					routeMiddleware,
					thunk
				),
				devTools				
			)
		);
		return _store;
	}
	

/***
 * All other browsers and environments
 */
} else {

	_configureStore = () => {

		try{
		const _store = createStore(
			reducers(history),
			preloadedState,
			compose(
				applyMiddleware(
					routeMiddleware,
					thunk
				)			
			)
		);
		return _store;
	} catch(e) {
		console.log(e);
	}

		

	}
}

export const store = _configureStore();

export {history};
