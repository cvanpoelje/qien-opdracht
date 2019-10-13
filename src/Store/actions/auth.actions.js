import {reset} from 'redux-form';

import * as actions from '../definitions/';
import * as Cookies from 'js-cookie';

/***
 * Theme based actions
 */
export const setInitUrl = (url) => { return { type: actions.INIT_URL, payload: url }; };

export const hideMessage = () => { return { type: actions.HIDE_MESSAGE }; };

export const showAuthLoader = () => { return { type: actions.ON_SHOW_LOADER }; };

export const hideAuthLoader = () => { return { type: actions.ON_HIDE_LOADER }; };
