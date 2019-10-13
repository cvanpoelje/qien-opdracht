import * as actions from "../definitions";

export const SETTINGS_REDUCER_INIT_STATE = {

    isIOS: false,

    isMobile: false,
	
	navCollapsed: false,
    
    drawerType: actions.FIXED_DRAWER,
    
    width: window.innerWidth,
    
    isDirectionRTL: false,
    
    navigationStyle: actions.VERTICAL_NAVIGATION,
    
    horizontalNavPosition: actions.INSIDE_THE_HEADER,

    networkPulse: 0,

    centralPulse: 0,

    servicePulse: 0,

    network: {
        isConnected: true
    }

};