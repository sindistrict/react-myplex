/**
 * Import React.
 */

import React from 'react'



/** 
 * Import the component styles.
 */

import './Helpers.scss'



/**
 * @method Elements/Helpers/Wrapper
 * @description Authenticates a user via the Plex API using
 *              the provided username and password.
 * 
 * @param [value] string
 * @param [label] string
 * @param [disabled] boolean
 * @param [required] boolean
 * @param [onChange] function
 * 
 * @return [<Wrapper/>] Component
 */

export class Wrapper extends React.Component {

  render() {

    return <div className="wrapper">
            {this.props.children}
           </div>

  }

}