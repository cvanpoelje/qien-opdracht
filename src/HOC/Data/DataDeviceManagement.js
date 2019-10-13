import {Component} from "react";
import { connect} from 'react-redux';

import {isIOS, isMobile} from 'react-device-detect';

import {setDisplaySettings } from "store-actions";
import {store} from "Store";
import * as actions from 'Store/definitions';


const initialState = () => {
    return {           
        throttleRate: 1000
    }
}

/***
 * Manages Pull requests from server
 * User related Tasks
 * User related System Messages
 */
class DataDeviceManagement extends Component {

    state = initialState();     

    /***
     * Forward information on display and device
     */
    componentDidMount() { 

        const screen = this.getScreenDimensions();
      
        store.dispatch({ type: actions.CLIENT_DEVICE_SCREEN, payload: screen });

        // add window event handlers
        this.addScreenEventHandlers();

        this.props.setDisplaySettings(isIOS, isMobile); 
    }  

    /***
     * Throttle function: delay event detection
     */
    throttle = (func, limit) => {
        
        let lastFunc,
            lastRan

        return function() {
            const context = this;
            const args = arguments;
            
            if (!lastRan) {
                func.apply(context, args);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc)
                lastFunc = setTimeout(function() {
                    if ((Date.now() - lastRan) >= limit) {
                        func.apply(context, args)
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        }
    }

    /***
     * Get screen sizes
     */
    getScreenDimensions = () => {

        const s = window.screen;

        const screen = {

            orientation: s.msOrientation || s.mozOrientation || (s.orientation || {}).type,

            /***
             * Viewport
             */
            viewPort: {
                clientWidth: document.documentElement.clientWidth,
                innerWidth: window.innerWidth,
                outerWidth: window.outerWidth,
                clientHeight: document.documentElement.clientHeight,
                innerHeight: window.innerHeight,
                outerHeight: window.outerHeight
            },

            /***
             * Device
             */
            device: {
                width: window.screen.width,
                avaiableWidth: window.screen.availWidth,
                height: window.screen.height,
                availableHeight: window.screen.availHeight
            },

            /***
             * Scrolling document
             */
            scroll: {
                clientWidth: document.documentElement.clientWidth,
                offsetWidth: document.documentElement.offsetWidth,
                scrollWidth: document.documentElement.scrollWidth,
                clientHeight: document.documentElement.clientHeight,
                offsetHeight: document.documentElement.offsetHeight,
                scrollHeight: document.documentElement.scrollHeight
            }
        }

        return screen;
    }

    /***
     * Mobile Event Handlers
     */
    addScreenEventHandlers() {

        /***
         * alias functions as event listeners provide its own context
         */
        const getScreenDimensions = this.getScreenDimensions.bind(this);         

        /***
         * Window screen event listener(s)
         */
        window.addEventListener("resize", this.throttle(function() {
          
            const screen = getScreenDimensions();
            store.dispatch({ type: actions.CLIENT_DEVICE_SCREEN, payload: screen });          

        }, this.state.throttleRate), false);

        window.addEventListener("orientationchange", function() {
            // Generate a resize event if the device doesn't do it
            window.dispatchEvent(new Event("resize"));
        }, false);
    } 

   
    render() {         
        return this.props.children;
    }
}


const mapStateToProps = ({settings}) => {        
    return {settings};
};

export default connect(mapStateToProps, { 
    setDisplaySettings    
})(DataDeviceManagement);