import * as actions from '../definitions';
import {SETTINGS_REDUCER_INIT_STATE} from "../states";


export const settingsReducer = (state = SETTINGS_REDUCER_INIT_STATE, action) => {
    switch (action.type) {

        case actions.SET_DISPLAY_SETTINGS:
            return {
                ...state,
                isIOS: action.payload.isIOS,
                isMobile: action.payload.isMobile
            };

        case '@@router/LOCATION_CHANGE':
            return {
                ...state,
                navCollapsed: false
            };

        case actions.TOGGLE_COLLAPSED_NAV:
            return {
                ...state,
                navCollapsed: action.isNavCollapsed
            };

        case actions.WINDOW_WIDTH:
            return {
                ...state,
                width: action.width
            };
    
        case actions.CHANGE_DIRECTION:
            return {
                ...state,
                isDirectionRTL: !state.isDirectionRTL
        };

        case actions.CHANGE_NAVIGATION_STYLE:
            return {
                ...state,
                navigationStyle: action.payload
            };


        case actions.HORIZONTAL_MENU_POSITION:
            return {
                ...state,
                horizontalNavPosition: action.payload
        };

        /***
         * Network state
         */     
        case actions.SET_NETWORK_STATUS: return { ...state, network: { ...state.network, isConnected: action.payload }} 

        /***
         * System pulses
         */
        case actions.SET_NETWORK_PULSE: return { ...state, networkPulse: action.payload } 
        case actions.SET_CENTRAL_PULSE: return { ...state, centralPulse: action.payload } 
        case actions.SET_SERVICE_PULSE: return { ...state, servicePulse: action.payload } 

        default:
            return state;
    }
};


