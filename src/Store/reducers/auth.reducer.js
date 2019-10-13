import * as actions from '../definitions';
import {AUTH_REDUCER_INIT_STATE} from "../states";

/***
 * Client Device Reducer
 */
export const authReducer = (state = AUTH_REDUCER_INIT_STATE, action) => { 

	switch (action.type) {

		case actions.INIT_URL: {
            return {
                ...state,
                initURL: action.payload
            };
        }

        case actions.USER_SET_ISLOGGEDIN_STATUS: {
            return {
                ...state,
                isLoggedIn: action.payload
            }
        }

        case actions.SHOW_AUTH_MESSAGE: {
            return {
                ...state,
                showMessage: action.payload,
                loader: false
            };
        }

        case actions.HIDE_MESSAGE: {
            return {
                ...state,
                showMessage: false,
                loader: false
            };
        }

        case actions.ON_SHOW_LOADER: {
            return {
                ...state,
                loader: true
            };
        }

        case actions.ON_HIDE_LOADER: {
            return {
                ...state,
                loader: false
            };
        }

        case actions.SIGNIN_SET_USER_TOKEN: {           
            return {
                ...state,
                userToken:action.payload
            }
        }

        case actions.AUTH_ROUTE_USER: {           
            return { ...state, routeUser: action.payload}
        }

        default:
            return state;
	}
	
}
