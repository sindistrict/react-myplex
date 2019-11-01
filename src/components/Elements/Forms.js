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

import './Forms.scss'



/**
 * @method Elements/Forms/Form
 * @description Authenticates a user via the Plex API using
 *              the provided username and password.
 * 
 * @param [method] string
 * @param [action] string
 * @param [onSubmit] function
 * 
 * @return [<Form/>] Component
 */

export class Form extends React.Component {

  constructor(props) {

    super(props)
    this.state = {}
    this.state.id = props.id || "form-" + RandomID()
    this.state.submitted = false

  }

  submitHandler = (e) => {

    let data = {}

    for(let i = 0; i < e.target.length; i++) {
      let field = e.target.elements[i];
      if(field.name) data[field.name] = field.value
    }

    this.setState({ submitted: true })
    if(this.props.onSubmit) this.props.onSubmit(e, data)

  }

  render() {

    return <div className="form-wrapper">
             <form
               id={this.state.id}
               method={this.props.method || 'POST'}
               action={this.props.action || '/'}
               onSubmit={this.submitHandler}>
               {this.props.children}
             </form>
           </div>

  }

}



/**
 * @method Elements/Forms/Input
 * @description Authenticates a user via the Plex API using
 *              the provided username and password.
 * 
 * @param [type] string
 * @param [value] string
 * @param [label] string
 * @param [required] boolean
 * @param [onClick] function
 * 
 * @return [<Input/>] Component
 */

export class Input extends React.Component {

  constructor(props) {

    super(props)
    this.state = {}
    this.state.value = props.value || ''
    this.state.disabled = props.disabled || false
    this.state.id = props.id || "input-" + RandomID()

  }

  changeHandler = (e) => {

    this.setState({ value: e.target.value })
    if(this.props.onChange) this.props.onChange(e)

  }

  render() {

    return <div className="input-wrapper">
            {this.props.label && 
            <label htmlFor={this.state.id}>{this.props.label}</label>}
            <input 
              id={this.state.id}
              name={this.props.name}
              value={this.state.value}
              type={this.props.type || 'text'}
              required={this.props.required || false}
              disabled={this.state.disabled}
              onChange={this.changeHandler}/>
           </div>

  }

}



/**
 * @method Elements/Forms/Textarea
 * @description Authenticates a user via the Plex API using
 *              the provided username and password.
 * 
 * @param [value] string
 * @param [label] string
 * @param [required] boolean
 * @param [onClick] function
 * 
 * @return [<Textarea/>] Component
 */

export class Textarea extends React.Component {

  constructor(props) {

    super(props)
    this.state = {}
    this.state.value = props.value || ''
    this.state.disabled = props.disabled || false
    this.state.id = props.id || "textarea-" + RandomID()

  }

  changeHandler = (e) => {

    this.setState({ value: e.target.value })
    if(this.props.onChange) this.props.onChange(e)

  }

  render() {

    return <div className="input-wrapper">
             {this.props.label &&
             <label htmlFor={this.state.id}>{this.props.label}</label> }
             <textarea
               id={this.state.id}
               name={this.props.name}
               value={this.state.value}
               required={this.props.required || false}
               disabled={this.state.disabled}
               onChange={this.changeHandler}/>
           </div>

  }

}



/**
 * @method Elements/Forms/Select
 * @description Authenticates a user via the Plex API using
 *              the provided username and password.
 * 
 * @param [value] string
 * @param [label] string
 * @param [disabled] boolean
 * @param [required] boolean
 * @param [onChange] function
 * 
 * @return [<Select/>] Component
 */

export class Select extends React.Component {

  constructor(props) {

    super(props)
    this.state = {}
    this.state.value = props.value || ''
    this.state.disabled = props.disabled || false
    this.state.id = props.id || "select-" + RandomID()

  }

  changeHandler = (e) => {

    this.setState({ value: e.target.value })
    if(this.props.onChange) this.props.onChange(e)

  }

  render() {

    return <div className="input-wrapper">
             {this.props.label &&
             <label htmlFor={this.state.id}>{this.props.label}</label> }
             <select
               id={this.state.id}
               name={this.props.name}
               value={this.state.value}
               required={this.props.required || false}
               disabled = {this.state.disabled}
               onChange={this.changeHandler}>
               {this.props.children}
             </select>
           </div>

  }

}