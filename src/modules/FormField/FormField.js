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

import './FormField.scss'


/**
 * Render the React component.
 */

export default class FormField extends React.Component {

  constructor(props) {

    super(props)

    const _this = this

    this.state = {}
    this.state.id = props.id || `SD_Input_${RandomID()}`
    this.state.type = props.type || 'text'
    this.state.size = props.size || 'normal'
    this.state.value = props.value || ''
    this.state.label = props.label || ''
    this.state.required = props.required || false
    this.state.disabled = props.disabled || false
    this.state.className = props.className || ''

    this.state.onChange = (event) => { 
      _this.setState({ value: event.target.value })
      if(props.onChange && typeof props.onChange === 'function') {
        return props.onChange(event)
      }
    }

  }

  render() {

    return  <div className="SD_FormField_Wrapper">
              {this.state.label !== '' &&
              <label htmlFor={this.state.id}>{this.state.label}</label>
              }
              <input 
              id={this.state.id}
              type={this.state.type} 
              className={"SD_FormField SD_FormField_Size_" + this.state.size + " " + this.state.className} 
              value={this.state.value} 
              required={this.state.required}
              disabled={this.state.disabled}
              onChange={this.state.onChange}/>
            </div>

  }

}