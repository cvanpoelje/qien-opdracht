import * as actions from '../definitions';

import {CLIENT_REDUCER_INIT_STATE} from "../states";

/***
 * Client Device Reducer
 */
export const clientDeviceReducer = (state = CLIENT_REDUCER_INIT_STATE, action) => {	

	switch(action.type) {		

		/***
		 * Screen dimensions
		 */
		case actions.CLIENT_DEVICE_SCREEN: {			
			return { ...state, screen:action.payload }
		}		

		default: 
			return state;
	}	
}




