/**
 * Import React.
 */

import React from 'react'


/**
 * Import helper functions.
 */


import {RandomID} from '../../helpers/String'

export class Input extends React.Component {

  constructor(props) {

    super(props)

    this.state = {value: ''}

  }

  changeHandler = (e) => {

    this.setState({ value: e.target.value })
    if(this.props.onChange) this.props.onChange(e)

  }

  render() {

    const ID = RandomID()

    return <div className="input-wrapper">
            {this.props.label && <label htmlFor={this.props.id || ID}>{this.props.label}</label> }
            <input 
              id={this.props.id || ID}
              value={this.props.value || this.state.value}
              type={this.props.type || 'text'}
              required={this.props.required || false}
              onChange={this.changeHandler}/>
           </div>

  }

}

export class Textarea extends React.Component {

  render() {

    return <textarea>{this.props.children}</textarea>

  }

}