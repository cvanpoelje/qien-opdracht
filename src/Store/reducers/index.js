import { combineReducers} from "redux";
import { connectRouter} from 'connected-react-router'
import { reducer as formReducer } from 'redux-form';

import { clientDeviceReducer} from './client.reducer';
import { authReducer} from './auth.reducer';
import { groupReducer} from './group.reducer';
import { settingsReducer} from './settings.reducer';


export default (history) => combineReducers({	
	
	/***
	 *
	 */
	auth: authReducer,

	/***
	 *
	 */
	client: clientDeviceReducer,

	/***
	 *
	 */
	group: groupReducer,

	/**
	 * Tracking browser history and router state with redux
	 */
	router: connectRouter(history),
	

	/***
	 *
	 */
	settings: settingsReducer

	
});