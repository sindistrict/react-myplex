/**
 * Import React.
 */

import React from 'react'


/**
 * Import helper functions.
 */

import {RandomID} from '../../helpers/String'


/** 
 * Import the component styles.
 */

import './Alerts.scss'



/**
 * @method Elements/Alerts
 * @description Authenticates a user via the Plex API using
 *              the provided username and password.
 * 
 * @param [value] string
 * @param [label] string
 * @param [disabled] boolean
 * @param [required] boolean
 * @param [onChange] function
 * 
 * @return [<Button/>] Component
 */

export class Notice extends React.Component {

  constructor(props) {

    super(props)
    this.state = {}
    this.state.id = props.id || "notice-" + RandomID()
    this.state.visible = 'false'

  }

  render() {

    setTimeout(() => {

      this.setState({ visible: 'true' })

    }, 1000)

    return <div 
             id={this.state.id}
             visible={this.state.visible}
             className="alert notice">
             <span>{this.props.children}</span>
           </div>

  }

}