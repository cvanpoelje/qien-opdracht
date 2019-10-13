import * as actions from '../definitions';

import {CLIENT_REDUCER_INIT_STATE} from "../states";

/***
 * Client Device Reducer
 */
export const clientDeviceReducer = (state = CLIENT_REDUCER_INIT_STATE, action) => {	

	switch(action.type) {

		/***
		 * Client Token (grant)
		 */
		case actions.CLIENT_TOKEN: {
			return { ...state, grant: action.payload, hasClientToken: true };
		}

		/***
		 * Client Analysis
		 */
		case actions.CLIENT_HEADERS_ANALYSIS:  {
			console.log(action.payload);
			return { ...state, client:action.payload }
		}

		/***
		 * Screen dimensions
		 */
		case actions.CLIENT_DEVICE_SCREEN: {
			console.log(action.payload)
			return { ...state, screen:action.payload }
		}
		

		default: 
			return state;
	}	
}




