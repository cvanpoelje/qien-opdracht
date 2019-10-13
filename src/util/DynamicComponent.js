import React, {Component} from 'react';

class DynamicComponent extends Component {

	components={};

	generateID( length ) {
		let generatedTag = '';
		let c =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_';
		var cLength = c.length;
		for ( var i = 0; i < length; i++ ) {
      		generatedTag += c.charAt(Math.floor(Math.random() * cLength));
   		}

   		generatedTag = generatedTag.toLowerCase();
   		generatedTag = (generatedTag.charAt(0).toUpperCase()) + generatedTag.slice(1);

   		return generatedTag;
	}

	render() {

		const generatedTag =  this.generateID(12).toLowerCase();
		
		const comp = this.props.component;
		this.components[generatedTag] = comp;		

		const Tagname = this.components[generatedTag];

		return (<Tagname />)
	}
}

export default DynamicComponent;