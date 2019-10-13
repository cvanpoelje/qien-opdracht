import React from 'react';
import {ConnectedRouter} from 'connected-react-router'
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

/***
 * Configure Store
 */
import {history, store } from './Store';

/***
 * Import App
 */
import App from './App/App';

const MainApp = () =>
	<Provider store={store}>
    	<ConnectedRouter history={history}>
    		<Switch>
        		<Route path="/" component={App}/>
      		</Switch>
    	</ConnectedRouter>
  	</Provider>;

export default MainApp;