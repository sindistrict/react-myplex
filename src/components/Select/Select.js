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

import './Select.scss'


/**
 * Render the React component.
 */

export default class Select extends React.Component {

  constructor(props) {

    super(props)

    this.state = {}
    this.state.id = props.id || `SD_Select_${RandomID()}`
    this.state.className = props.className || ''
    this.state.value = this.props.value || ''

  }

  selectHandler = (e) => {

    this.setState({ value: e.target.value })
    if(this.props.onChange) this.props.onChange(e)

  }

  render() {

    const _this = this

    return  <div className="SD_Select_Wrapper">
              <select 
              id={this.state.id}
              type={this.props.value || ''} 
              className={"SD_Select " + this.state.className} 
              disabled={this.props.disabled || false}
              onChange={this.selectHandler}
              value={this.state.value}> 
                {this.props.children}
              </select>
            </div>

  }

}