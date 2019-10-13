import {
    SET_DISPLAY_SETTINGS,
    CHANGE_DIRECTION,
    CHANGE_NAVIGATION_STYLE,
    DARK_THEME,
    DRAWER_TYPE,
    HORIZONTAL_MENU_POSITION,
    SWITCH_LANGUAGE,
    THEME_COLOR,
    TOGGLE_COLLAPSED_NAV,
    WINDOW_WIDTH,
    SET_NETWORK_PULSE,
    SET_CENTRAL_PULSE,
    SET_SERVICE_PULSE,
    SET_NETWORK_STATUS

} from '../definitions';

/***
 * Display Settings
 */
export const setDisplaySettings = (isIOS, isMobile) => {
    return { type: SET_DISPLAY_SETTINGS, payload: { isIOS, isMobile}};
}

/***
 * System Interval Pulses
 */
export const propagateNetworkPulse = (pulseID) => {
    return { type: SET_NETWORK_PULSE, payload: pulseID };
}

export const propagateCentralPulse = (pulseID) => {
    return { type: SET_CENTRAL_PULSE, payload: pulseID };
}

export const propagateServicePulse = (pulseID) => {
     return { type: SET_SERVICE_PULSE, payload: pulseID };
}

/***
 * Network Status
 */
export const setNetworkStatus = (status) => {
    return { type: SET_NETWORK_STATUS, payload: status }
}

export function toggleCollapsedNav(isNavCollapsed) {
    return {type: TOGGLE_COLLAPSED_NAV, isNavCollapsed};
}

export function setDrawerType(drawerType) {
    return {type: DRAWER_TYPE, drawerType};
}

export function updateWindowWidth(width) {
    return {type: WINDOW_WIDTH, width};
}

export function setThemeColor(color) {
    return {type: THEME_COLOR, color};
}

export function setDarkTheme() {
    return {type: DARK_THEME};
}

export function changeDirection() {
    return {type: CHANGE_DIRECTION};
}

export function changeNavigationStyle(layoutType) {
    return {
        type: CHANGE_NAVIGATION_STYLE,
        payload: layoutType
    };
}

export function setHorizontalMenuPosition(navigationPosition) {
    return {
        type: HORIZONTAL_MENU_POSITION,
        payload: navigationPosition
    };
}

export function switchLanguage(locale) {
    return {
        type: SWITCH_LANGUAGE,
        payload: locale
    };
}
