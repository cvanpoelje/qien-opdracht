import * as Cookies from 'js-cookie';

import {AUTH_REDUCER_INIT_STATE} from "../states";

const USER_TOKEN_COOKIE= process.env.RD_USER_TOKEN_COOKIE;
const AUTH_LOGGED_IN_STATE_COOKIE = process.env.RD_AUTH_LOGGED_IN_STATE_COOKIE;

/***
 * State Composer for Auth reducer
 */ 
export const AuthPreloadedStateComposer = () => {

	/***
	 * Init State
	 */
	let state = {...AUTH_REDUCER_INIT_STATE};			

    return state;
}


