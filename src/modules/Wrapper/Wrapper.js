/**
 * Import React.
 */

import React from 'react'


/** 
 * Import the component styles.
 */

import './Wrapper.scss'


/**
 * Render the React component.
 */

export default class Wrapper extends React.Component {

  render() {

    return  <div className="SD_Wrapper">
              {this.props.children}
            </div>

  }

}