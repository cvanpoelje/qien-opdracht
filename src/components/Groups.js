import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Button, IconButton, AppBar, Toolbar, LinearProgress} from '@material-ui/core/';
import CssBaseline from "@material-ui/core/CssBaseline";
import Pagination from "material-ui-flat-pagination";
import {Badge} from 'reactstrap';


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

	render() {

		// get list of groups
		const {client, group} = this.props;		     	

		const groupList = group.data;		
 
		return (
			<div className="container">
				<div>
					<h1>Lijst</h1>
					{groupList.map( group => <Presentation />)}
				</div>
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
