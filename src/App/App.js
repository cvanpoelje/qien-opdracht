import React, {Component} from 'react';

// import connext from react-redux: redux was not build to work with react
// connect is used to call action creators
import { connect} from 'react-redux';
import { Route, Switch} from 'react-router-dom';
import MomentUtils from '@date-io/moment';


import { setInitUrl } from '../Store/actions/';

/***
 * Theme based imports
 */
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {MuiPickersUtilsProvider} from 'material-ui-pickers';
import "../assets/vendors/style"

import RTL from '../util/RTL';

/***
 * Components
 */
import DataDeviceManagement from '../HOC/Data/DataDeviceManagement';
import {Groups} from 'components';

/***
 * Actions
 */


/***
 * App
 */
class App extends Component {	
	
	componentDidMount() {

		window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
    	if (this.props.initURL === '') {
      		this.props.setInitUrl(this.props.router.location.pathname);
    	}    		
	}		
    
	render() {		

		const {
			isDirectionRTL
		} = this.props;			

		// define theme
		const applyTheme = createMuiTheme({ typography: { useNextVariants: true} }  );

    	if (isDirectionRTL) {
      		applyTheme.direction = 'rtl';
      		document.body.classList.add('rtl')
    	} else {
      		document.body.classList.remove('rtl');
      		applyTheme.direction = 'ltr';
    	}				
    	
		return (		
			<DataDeviceManagement>
				<MuiThemeProvider theme={applyTheme}>
					 <MuiPickersUtilsProvider utils={MomentUtils}>
					 	<RTL>
					 		<div className="app-main">	
					 			<Route 
				                	path='/groepen' 
				                	component={Groups}
				                />
							</div>
						</RTL>							
					 </MuiPickersUtilsProvider>
				</MuiThemeProvider>
			</DataDeviceManagement>
		);
	}
}


const mapStateToProps = ({auth, router, settings}) => {		
	
	const {sideNavColor, isDirectionRTL} = settings;
  	const { initURL} = auth; 
  	  
  	return {  	  
  		router, 
  		sideNavColor, 
  		isDirectionRTL,   
  		initURL  	
  	}  	  
};

export default connect(mapStateToProps, {
	setInitUrl
})(App);