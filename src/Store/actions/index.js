import {
	setInitUrl,				
	showAuthLoader,
	hideAuthLoader,
	hideMessage	
} from "./auth.actions";

import {
	setDisplaySettings,
	toggleCollapsedNav,
	setDrawerType,
	updateWindowWidth,
	setThemeColor,
	setDarkTheme,
	changeDirection,
	changeNavigationStyle,
	setHorizontalMenuPosition,
	switchLanguage,
	setNetworkStatus	

} from "./settings.actions";


export {

	// network
	setNetworkStatus,

	// client
	setInitUrl,

	// auth
	showAuthLoader,
	hideAuthLoader,
	hideMessage,

	// markup / settings
	setDisplaySettings,
	toggleCollapsedNav,
	setDrawerType,
	updateWindowWidth,
	setThemeColor,
	setDarkTheme,
	changeDirection,
	changeNavigationStyle,
	setHorizontalMenuPosition,
	switchLanguage
};



