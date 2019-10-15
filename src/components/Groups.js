import React, { Component, useState } from "react";
import Card from '@material-ui/core/Card';
import { connect } from "react-redux";
import { isMobile } from "react-device-detect";

/***
 * Start Code Sectie
 * Resources:
 * Material-UI 3.8.1
 * Bootstrap 4
 */
/***
 * Jouw component styles
 */

const styles = {
  container:{
    overflow: 'scroll'
  },
  listItem: {
    padding: '10px',
    margin: '5px',
    cursor: 'pointer'
  },
  active: {
    backgroundColor: 'rgba(0,0,0,.2)'
  },
  hover: {
    backgroundColor: 'rgba(43,200,100,.2)'
  }
};

/***
 * Presentation Components
 */

const Presentation = props => {
  const [mouseInside, setMouseInside] = useState();
  const [showWidget, setShowWidget] = useState();
  const clickHandler = () => {
    setShowWidget(!showWidget);
  };

  return (
    <Card style={  showWidget?styles.active:null, mouseInside?styles.hover:null ,styles.listItem}
        onClick= {() => clickHandler()}
        onMouseEnter={()=>{setMouseInside(true)}}
        onMouseLeave={()=>{setMouseInside(false)}}
      >
    <h1>{props.group.grp_name}</h1>
    <p>{props.group.grp_teaser}</p>
      {showWidget ? (
        <div>
          <p>{props.group.founder.fullName} is the founder.</p>
          <h2>List of Owners </h2>
          <ul>
            {props.group.owners.map( 
              owner => <li>{owner.fullName} is an owner</li>)}
          </ul>
        </div>
      ) : null}
      
    </Card>

  );
};

/***
 * Jouw Component Code
 */
class Groups extends Component {
  renderMobile(groupList) {
    return (
      <div>
        <h1>List For all the Mobile Users</h1>

        {groupList.map(group => (
          <Presentation key={group.id} group={group} />
        ))}
      </div>
    );
  }

  renderDesktop(groupList) {
    return (
      <div className={styles.container}>
        <h1>List For all the desktop Users</h1>
        {groupList.map(group => (
          <Presentation key={group.id} group={group}/>
        ))}
      </div>
    );
  }

  render() {
    // get list of groups
    const { client, group } = this.props;

    /***
     * Display Settings
     * widths, heights, orientation (portrait/landscape)
     * Display orientation change is detected
     */

    const { screen } = client;
    if (!screen) return null;

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
      <div className="container" >
        
        {isMobile
          ? this.renderMobile(groupList)
          : this.renderDesktop(groupList)}
      </div>
    );
  }
}

/***
 * Einde Code Sectie
 */


const mapStateToProps = ({ client, group }) => {
  return { client, group };
};

export default connect(
  mapStateToProps,
  {}
)(Groups);
