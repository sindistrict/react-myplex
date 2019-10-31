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

import './Button.scss'


/**
 * Render the React component.
 */

export default class Button extends React.Component {

  constructor(props) {

    super(props)

    this.state = {}
    this.state.id = props.id || `SD_Button_${RandomID()}`
    this.state.size = props.size || 'normal'
    this.state.variant = props.variant || 'primary'
    this.state.className = props.className || ''

  }

  render() {

    return  <button 
            id={this.state.id}
            type={this.props.type || 'button'} 
            className={"SD_Button size-" + this.state.size + " variant-" + this.state.variant + " " + this.state.className} 
            disabled={this.props.disabled || false}
            onClick={this.props.onClick}> 
              {this.props.children}
            </button>

  }

}