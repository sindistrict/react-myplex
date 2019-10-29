/**
 * Import React.
 */

import React from 'react'


/**
 * Import component dependencies.
 */

import Wrapper from '../../modules/Wrapper/Wrapper'
import FormField from '../../modules/FormField/FormField'
import Button from '../../modules/Button/Button'


/**
 * Import helper functions.
 */

import {Authenticate} from '../../helpers/Plex'


/** 
 * Import the component styles.
 */

import './Login.scss'


/**
 * Render the React component.
 */

export default class Login extends React.Component {

  constructor(props) {

    super(props)

    const _this = this

    this.state = {}
    this.state.username = ''
    this.state.password = ''
    this.state.authenticated = false

    this.state.onSuccess = (response) => { 
      _this.setState({ authenticated: true })
      if(props.onSuccess && typeof props.onSuccess === 'function') {
        return props.onSuccess(response)
      }
    }

    this.loginHandler = this.loginHandler.bind(this)

  }

  loginHandler(event) {

    event.preventDefault();

    const _this = this

    Authenticate(this.state.username, this.state.password, (response) => {

      localStorage.setItem('uuid', response.user.uuid)
      localStorage.setItem('username', response.user.username)
      localStorage.setItem('email', response.user.email)
      localStorage.setItem('token', response.user.authToken)

      _this.state.onSuccess(response)

    })

  }

  render() {

    return  <Wrapper>
              <form onSubmit={this.loginHandler}>
                <FormField 
                  type="text" 
                  required={true} 
                  label="Username" 
                  value={this.state.username} 
                  onChange={(e) => { this.setState({ username: e.target.value }) }} />
                <FormField 
                  type="password" 
                  required={true} 
                  label="Password" 
                  value={this.state.password} 
                  onChange={(e) => { this.setState({ password: e.target.value }) }} />
                <Button type="submit">Enter</Button>
              </form>
            </Wrapper>

  }

}