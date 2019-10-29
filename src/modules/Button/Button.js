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

    const _this = this

    this.state = {}
    this.state.id = props.id || `SD_Button_${RandomID()}`
    this.state.type = props.type || 'button'
    this.state.size = props.size || 'normal'
    this.state.variant = props.variant || 'primary'
    this.state.disabled = props.disabled || false
    this.state.className = props.className || ''

    this.state.onClick = (event) => { 
      _this.setState({ value: event.target.value })
      if(props.onClick && typeof props.onChange === 'function') {
        return props.onClick(event)
      }
    }

  }

  render() {

    return  <button 
            id={this.state.id}
            type={this.state.type} 
            className={"SD_Button size-" + this.state.size + " variant-" + this.state.variant + " " + this.state.className} 
            disabled={this.state.disabled}
            onClick={this.state.onChange}>
              {this.props.children}
            </button>

  }

}