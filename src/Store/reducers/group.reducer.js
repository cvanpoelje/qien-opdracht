import * as actions from '../definitions';
import {GROUP_REDUCER_INIT_STATE} from "../states";


export const groupReducer = (state = GROUP_REDUCER_INIT_STATE, action) => {

    switch (action.type) {     

        /*Group Owners Context Menu: option ID */
        case actions.GROUP_OWNERS_CONTEXT_MENU_OPTION: {
            return { ...state, groupOwnersContextMenu: { ...state.groupOwnersContextMenu, optionID: action.payload}};
        }

        /***
         * Group Owners Context Menu: open or closed
         */
        case actions.GROUP_OWNERS_CONTEXT_MENU: {            
            const {menuState, anchorEl, context} = action.payload;            
            console.log('*** Incoming GroupOwnersMenu ', menuState, anchorEl, context)
             return { ...state, groupOwnersContextMenu: { 
                ...state.groupOwnersContextMenu, 
                menuState,
                anchorEl,
                context
            }};
        }        

        case actions.USERS_CONTEXT_MENU_OPTION: {         
            return { ...state, usersContextMenu: { ...state.usersContextMenu, optionID: action.payload}};
        }  

        case actions.GROUP_NEW: {          
            return {
                ...state,
                results: { 
                    ...state.results, 
                    new: action.payload 
                } 
            }
        }

        case actions.GROUP_ANIMATE: { 
            console.log("*** SHow animatoin ", action.payload);
            return { ...state, animate: action.payload } 
        }

        case actions.GROUP_HIDE_RESULT_NEW_FORM: {
            return { 
                ...state, 
                results: { 
                    ...state.results,                
                    new: {
                        ...state.results.new,
                        status: action.payload
                    }
                }
            }
        }

        /***
         * Group Controller ACTION
         */
        case actions.GROUP_CREATE: {        
            const {animate, status, data} = action.payload;        
            return { ...state, create: {
                ...state.create,
                animate,
                status,
                data
            }}
        }

        default:
            return state
    }
}

       
