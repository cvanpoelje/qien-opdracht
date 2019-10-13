import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Button, IconButton, AppBar, Toolbar, LinearProgress} from '@material-ui/core/';
import CssBaseline from "@material-ui/core/CssBaseline";
import Pagination from "material-ui-flat-pagination";
import {Badge} from 'reactstrap';
import {isIOS, isMobile} from 'react-device-detect';


const setDefaultState = () => {
	return {
		data: []
    }
}


/***
 * Start Code Sectie
 * Resources:
 * Material-UI 3.8.1
 * Bootstrap 4
 */

/***
 * Jouw component styles
 */


 /***
  * Presentation Components
  */
 const Presentation = props => {
 	return (<div>Mijn presentatie code</div>);
 }


/***
 * Jouw Component Code
 */
class Groups extends Component {


	renderMobile(groupList) {

		// const {orientation, viewPort, device, scroll } = this.props.client.screen;

		return (<div>
			<h1>Lijst</h1>
			{groupList.map( group => <Presentation key={group.id}/>)}
		</div>)

	}

	renderDesktop(groupList) {
		// const {orientation, viewPort, device, scroll } = this.props.client.screen;
		return(<div>
			<h1>Lijst</h1>
			{groupList.map( group => <Presentation key={group.id}/>)}
		</div>);
	}

	render() {

		// get list of groups
		const {client, group} = this.props;		

		console.log(client);

		/***
		 * Display Settings
		 * widths, heights, orientation (portrait/landscape)
		 * Display orientation change is detected
		 */     
		const {screen} = client;
		if(!screen) return null;

		const {
			orientation, // portrait-primary, portrait=landscape
			viewPort, // clientWIdth, offsetWidth, scrollWidth etc.
			device, // widht, availableWidth, height, availableHeight
			scroll // clientWIdth, offsetWidth, scrollWidth, scrollHeight etc.
		} = screen;

		/***
		 * Mock data
		 */
		const groupList = group.data;		
 
		return (
			<div className="container">
				{isMobile ? this.renderMobile(groupList) : this.renderDesktop(groupList) }				
			</div>
		);
	}
}


/***
 * Einde Code Sectie
 */


const mapStateToProps = ({client, group}) => {		
	return {client, group};
};

export default connect(mapStateToProps, {	
})(Groups);
