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

import './Buttons.scss'



/**
 * @method Elements/Button
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

export default class Button extends React.Component {

  constructor(props) {

    super(props)
    this.state = {}
    this.state.id = props.id || "button-" + RandomID()

  }

  clickHandler = (e) => {

    if(this.props.onClick) this.props.onClick(e)

  }

  render() {

    return <button 
             id={this.state.id}
             type={this.props.type || 'button'}
             className="button"
             disabled={this.props.disabled || false}
             state={this.props.state || 'pending'}
             onClick={this.clickHandler}>
             {this.props.children}
           </button>

  }

}